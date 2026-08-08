import UserModel from "../Models/usermodel.js";
import bcrypt, { hash } from "bcrypt";
import e from "express";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import razorpay from "razorpay";
import TransectionModel from "../Models/transectionmodel.js";

export const registeruser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) return res.json({
            success: false,
            message: "All fields are required"
        })

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const userdata = {
            name,
            email,
            password: hashed
        }

        const newuser = new UserModel(userdata);
        const user = await newuser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "10d" })

        res.json({
            success: true,
            message: "User registered successfully.",
            token,
            name: user.name

        })

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }
}


export const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                success: false,
                message: "Email and Password are required."
            })
        }

        const user = await UserModel.findOne({ email })

        if (!user) return res.json({
            success: false,
            message: "User Doesn't exist"
        })

        const match = await bcrypt.compare(password, user.password)

        if (match) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
            res.json({
                success: true,
                message: "Logged in successfully.",
                token,
                name: user.name
            })
        }
        else {
            res.json({
                success: false,
                message: "Invalid credentials."
            })
        }


    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        })
    }
}

export const usercredits = async (req, res) => {

    const { user_id } = req.body;

    if (!user_id) {
        return res.json({
            success: false,
            message: "Can't get user"
        })
    }

    try {
        const user = await UserModel.findById(user_id);

        res.json({
            success: true,
            credits: user.credits,
            user: {
                name: user.name
            }
        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }

}

const rzrpy = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
    currency: process.env.CURRENCY
})

export const payment = async (req, res) => {


    try {

        const { user_id, planId } = req.body;

        const userdata = await UserModel.findById(user_id);

        if (!userdata || !planId) return res.json({
            success: false,
            message: "Missing Details."
        })

        let credits, plan, amount, date;

        if (planId === "Basic") {
            credits = 100;
            amount = 100;
            date = "7 days";
            plan = "Basic Plan"
        }
        else if (planId === "Advanced") {
            credits = 250;
            amount = 200;
            plan = "Advanced Plan"
        }
        else if (planId === "Business") {
            credits = 1000;
            amount = 500;
            plan = "Enterprise Plan"
        }
        else return res.json({
            success: false,
            message: "Invalid Plan."
        })

        date = Date.now();

        const transection_data = {
            user_id, plan, amount, credits, date
        }

        const newtrans = await TransectionModel.create(transection_data);

        const options = {
            amount: amount * 100,               //for razorpay-> 500 INR = 50000
            currency: process.env.CURRENCY,
            receipt: newtrans._id,

        }
        await rzrpy.orders.create(options, (e, order) => {
            if (e) {
                console.log(e.message)
                return res.json({
                    success: false,
                    message: e.message
                })
            }

            res.json({
                success: true,
                order
            })
        })


    } catch (e) {
        console.log(e.message)
        res.json({
            success: false,
            message: e.message
        })
    }
}

export const verifyrazorpay = async (req, res) => {
    try {
        const { razorpay_order_id } = req.body;
        const order_info = await rzrpy.orders.fetch(razorpay_order_id);
        if (order_info.status === "paid") {
            const transection_data = await TransectionModel.findById(order_info.receipt);

            if (transection_data.payment) {
                return res.json({
                    success: false,
                    message: "Payment already verified."
                });
            }

            // Update user credits
            const user = await UserModel.findById(transection_data.user_id);
            user.credits += transection_data.credits;
            await user.save();

            // Mark transaction as paid
            transection_data.payment = true;
            await transection_data.save();

            return res.json({
                success: true,
                message: "Credits added successfully."
            });
        } else {
            return res.json({
                success: false,
                message: "Payment verification failed."
            });
        }
        
    } catch (e) {
        console.log(e.message)
        res.json({
            success: false,
            message: e.message
        })
    }
} 

import UserModel from "../Models/usermodel.js";
import bcrypt, { hash } from "bcrypt";
import e from "express";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

export const registeruser = async(req, res) => {
    try{
        const {name,email,password} = req.body;     

        if(!name || !email || !password) return res.json({
            success:false,
            message:"All fields are required"
        })

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const userdata = {
            name,
            email,
            password:hashed
        }

        const newuser = new UserModel(userdata);
        const user = await newuser.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn:"10d"})
        
        res.json({
            success:true,
            message:"User registered successfully.",
            token,
            name : user.name
            
        })

    }catch(e){
        console.log(e);
        res.json({
            success:false,
            message : e.message
        })
    }
}


export const loginuser = async (req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.json({
                success:false,
                message:"Email and Password are required."
            })
        }

        const user = await UserModel.findOne({email})

        if(!user) return res.json({
            success:false,
            message:"User Doesn't exist"
        })

        const match = await bcrypt.compare(password, user.password)

        if(match){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn:"1h"})
            res.json({
                success:true,
                message:"Logged in successfully.",
                token,
                name:user.name
            })
        }
        else{
            res.json({
                success:false,
                message:"Invalid credentials."
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

export const usercredits = async (req,res) =>{
    
    const {user_id} = req.body;

    if(!user_id){
        return res.json({
            success: false,
            message: "Can't get user"
        })
    }

    try {
        const user = await UserModel.findById(user_id);

        res.json({
            success: true,
            credits:user.credits,
            user: {
                name:user.name
            }
        })
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }   

}


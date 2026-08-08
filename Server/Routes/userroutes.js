import express from "express"
import {registeruser,loginuser, usercredits, payment, verifyrazorpay} from "../Controllers/usercontroller.js"
import { userAuth } from "../Middlewares/auth.js"

const userRouter = express.Router();



// {backendurl}/api/user/register
userRouter.post("/register", registeruser)

// {backendurl}/api/user/register
userRouter.post("/login", loginuser)

// {backendurl}/api/user/credits
userRouter.get("/credits", userAuth,usercredits)

// {backendurl}/api/user/register
userRouter.post("/razor-pay", userAuth,payment);

// {backendurl}/api/user/verify-razor
userRouter.post("/verify-razor", userAuth, verifyrazorpay);




export default userRouter
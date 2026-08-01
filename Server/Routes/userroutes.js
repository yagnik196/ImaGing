import express from "express"
import {registeruser,loginuser, usercredits} from "../Controllers/usercontroller.js"
import { userAuth } from "../Middlewares/auth.js"

const userRouter = express.Router();



// {backendurl}/api/user/register
userRouter.post("/register", registeruser)

// {backendurl}/api/user/register
userRouter.post("/login", loginuser)

// {backendurl}/api/user/credits
userRouter.post("/credits", userAuth,usercredits)



export default userRouter
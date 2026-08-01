import express from "express"
import {registeruser,loginuser} from "../Controllers/usercontroller.js"

const userRouter = express.Router();



// {backendurl}/api/user/register
userRouter.post("/register", registeruser)

// {backendurl}/api/user/register
userRouter.post("/login", loginuser)



export default userRouter
import express from "express";
import { generateimg } from "../Controllers/imagecontroller.js";
import { userAuth } from "../Middlewares/auth.js";

const imgRouter = express.Router();

// imgurl_post
imgRouter.post("/generate", userAuth, generateimg);

export default imgRouter;
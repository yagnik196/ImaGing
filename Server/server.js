import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./Config/mongodb.js";
import userRouter from "./Routes/userroutes.js";

const PORT = process.env.PORT || 4000;

const app = express()

app.use(cors());
app.use(express.json());
await connectDB();

app.use("/api/user",userRouter);
app.get("/", (req, res) => {
    res.send("ImaGing Api is running...")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


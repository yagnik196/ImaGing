import mongoose from "mongoose";


const transectionSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    plan: { type: String, required: true },
    amount: { type: Number, required: true },
    credits: { type: Number, required: true },
    payment: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
})

const TransectionModel = mongoose.models.transection || mongoose.model("transection", transectionSchema);

export default TransectionModel;
import axios from "axios";
import UserModel from "../Models/usermodel.js";
import FormData from "form-data";

export const generateimg = async(req,res) =>{
    try {
        
        const {user_id,prompt} = req.body;
        const user = await UserModel.findById(user_id);

        if(!user || !prompt){
            return res.json({
                success:false,
                message: "Missing Details"
            })
        }

        if(user.credits === 0){
            return res.json({
                success:false,
                message:"Insufficient Credits.",
                credits: user.credits
            })
        }

        const form = new FormData()
        form.append("prompt",prompt)

        const {data} = await axios.post(process.env.URL,form,{headers:{
                "x-api-key": process.env.API_KEY
            },
            responseType:'arraybuffer'
        })

        const base64img = Buffer.from(data,'binary').toString('base64');
        const resimg = `data:image/png;base64,${base64img}`;

        user.credits -=1;
        await user.save();

        res.json({
            success:true,
            message:"Image generated successfully.",
            image: resimg,
            credits: user.credits
        })
    } catch (e) {
        console.log(e.message);
        res.json({
            success:false,
            message:e.message
        })
    }
}
import jwt from "jsonwebtoken";


export const userAuth = async (req, res, next) => {

    const { token } = req.headers
    if (!token) return res.json({
        success: false,
        message: "Can't Authnticate. Please re-login"
    })

    try {

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if (!decode.id) return res.json({
            success: false,
            message: "Invalid User, try to Re-login"
        })


        req.body = req.body || {};      //if the request has no body
        req.body.user_id = decode.id;
        next();

    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }


}
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) =>{

    const authHeaders = req.header("Authorization");
    const token = authHeaders && authHeaders.split(" ")[1];

    if(!token){
        return res.status(400).json({success : false , message : "Unauthorized"})
    }

    try{
        jwt.verify(token , process.env.ACCESS_TOKEN_SECRET , (err , user)=>{
            if(err){
                return res.status(403).json({
                    success: false,
                    message: "Token is not valid"
                })
            }

            res.id = user.id,
            res.author = user.author,
            res.accountType = user.accountType,

            next();
        })
    }
    catch(error){
        return res.status(500).json({sucess: false , message : "Internal Server Error"});
    }



}

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const User = require("../Models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {createWebToken} = require("../Helpers/accessToken")
const {createRefreshToken} = require("../Helpers/refreshToken")

const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;

  if(!username , !email , !password){
    return res.status(400).json({success: false , message: "Enter All Fields"})
  }

  try {
    const user = await User.findOne({username});
    if (user) {
      return res.status(400).json({success: false , message : "UserName Already exist"});
    }

    const securePassword = await bcrypt.hash(password , 10 )

    const newUser = new User({
        username , password: securePassword , email , accountType
    })

    await  newUser.save();
    return res.status(200).json({success:true , messgae: "New User Created"})

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};




const login = async (req, res) => {

    const {email , password} = req.body

    try{
        const user = await User.findOne({email})
        if(!user){
            res.status(400).json({success: false, message : "Email Not found"})
        }

        const checkPassword = await bcrypt.compare(password , user.password);
        if(!checkPassword){
            return res.status(400).json({success: false, message : "Password is Invalid" })
        }

        const data = {
          id : user._id,
          author : user.username,
          accountType : user.accountType
        }
    
        const accessToken = createWebToken(data)
        const refreshToken = createRefreshToken(data)
        console.log(accessToken, refreshToken)
    
        return res.status(200).json({
          success: true ,
          message : "Login Successfull",
          accessToken,
          refreshToken,
          role : user.accountType,
          author : user.username
        })
    
        
    }
    catch(error){
        res.status(500).json({success: false , message: error.message})
    }

   
};

module.exports = { signup, login };

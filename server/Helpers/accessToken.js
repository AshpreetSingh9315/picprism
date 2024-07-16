/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const createWebToken = (user)=>{
   return jwt.sign(user , process.env.ACCESS_TOKEN_SECRET, {expiresIn : "15m"})
}

module.exports = {createWebToken};
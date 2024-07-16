/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const  jwt = require('jsonwebtoken');

const createRefreshToken = (user)=>{
    return jwt.sign(user , process.env.REFRESH_TOKEN_SECRET , {expiresIn : "1d"});
} 

module.exports = {createRefreshToken} ;
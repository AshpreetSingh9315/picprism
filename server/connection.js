/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require("mongoose");

const connectDb = async (req,res)=>{
    const connection = await mongoose.connect(process.env.MONGO_URL)
    if(connection.STATES.connected){return console.log("database conn")}
    if(connection.STATES.disconnected){return console.log("database dis")}
}


module.exports = {connectDb}
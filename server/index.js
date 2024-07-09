/* eslint-disable no-undef */
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.get( "/" ,(req,res) => {
    res.send("<center><h1>The First Node Server By Ash Singh</h1></center>");
})

app.listen(port,()=>{
    console.log(`the Server is running on ${port}`);    
})


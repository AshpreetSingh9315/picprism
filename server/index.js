/* eslint-disable no-undef */
const express = require("express");
const dotenv = require("dotenv");
// const authRoute = require("./routes/routes");
const {readdirSync} = require("fs");
const {connectDb} = require('./connection');
const cors = require("cors");

dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json());





readdirSync("./routes").map((route)=>{
    app.use("/api", require(`./routes/${route}`))
})
console.log(readdirSync("./routes"))







app.get( "/" ,(req,res) => {
    res.send("<center><h1>The First Node Server By Ash Singh</h1></center>");
})

app.listen(port,()=>{
    console.log(`the Server is running on ${port}`);    
})


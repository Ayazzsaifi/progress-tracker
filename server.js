const dotenv=require("dotenv")
dotenv.config()
const express= require("express")
const app=express();
const connectDB = require("./config/db")
connectDB()
app.use(express.json());
app.listen(process.env.PORT ||3000 ,function(){
    console.log("Server is running")
})

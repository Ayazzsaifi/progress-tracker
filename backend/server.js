const dotenv=require("dotenv")
dotenv.config()
const cors = require("cors")
const express= require("express")
const app=express();
const connectDB = require("./config/db")
connectDB()
app.use(cors())
app.use(express.json());

const router=require("./routes/authRoutes")
app.use(express.json())
app.use("/api/auth",router)

const sessionRouter= require("./routes/sessionRoutes")
app.use("/api/session",sessionRouter)
app.listen(process.env.PORT ||3000 ,function(){
    console.log("Server is running")
})

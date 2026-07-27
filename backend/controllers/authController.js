const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");
const userModel= require("../models/user")



function registerUser (req,res){
    const name=req.body.name;
    const password=req.body.password;
    const email=req.body.email;

    const userExist=userModel.findOne({email})

}
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");
const userModel= require("../models/user")
const JWT_SECRET = process.env.JWT_SECRET


async function registerUser (req,res){
    const name=req.body.name;
    const password=req.body.password;
    const email=req.body.email;

    const userExist=await userModel.findOne({email})
    if(userExist){
        res.json({
            error:"User already Exists"
        })
    }
    else{
        const hashedPassword=await bcrypt.hash(password,5);
        const newUser= new userModel({name:name,password:hashedPassword,email:email})
        await newUser.save()
        const token= jwt.sign({id:newUser._id},JWT_SECRET,{expiresIn:"7d"})

        res.json({
            token
        })
    }
    
}




async function loginUser (req,res){
    const email=req.body.email;
    const password=req.body.password;

    const userExit=await userModel.findOne({email})
    if(!userExit){
        res.json({
            errror:"User does not Exist"
        })
    }
    else{
        const passwordValid = await bcrypt.compare(password,userExit.password)
        if(!passwordValid){
           return res.json({
                error:"Password is incorrect"
            })
        }
        else{
            const token = jwt.sign({id:userExit._id},JWT_SECRET,{expiresIn:"7d"});

            res.json({
                token:token
            })
        }
        
    }
}

module.exports={registerUser,loginUser};
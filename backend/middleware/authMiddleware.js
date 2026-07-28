const jwt=require("jsonwebtoken");
const JWT_SECRET=process.env.JWT_SECRET

function auth (req,res,next){
    const token= req.headers.authorization.split(" ")[1];
   
    if(!token){
        res.json({
            error:"user not loggedIn"
        })
    }
    else{
        const VerifyToken= jwt.verify(token,JWT_SECRET)
        req.user=VerifyToken.id
        next();
    }
}

module.exports=auth
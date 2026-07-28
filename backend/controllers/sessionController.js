const session = require ("../models/session");


async function createSession(req,res){
    const topic=req.body.topic;
    const notes=req.body.notes;
    const user=req.user;
    const date=new Date();

    try{
    const newSession =new session({topic,date,notes,user})
    await newSession.save()
    res.json({
        message:"Added"
    })}
    catch(error){
        console.log(error)
        res.json({message:"Incorrect"})
    }
}


async function getSession(req,res) {
    try{
     const user=req.user;
     const data=await session.find({user})
     res.json({data})
    }
    catch(error){
        console.log(error)
        res.json({error:"No data available"})
        
    }
}

module.exports={createSession,getSession};
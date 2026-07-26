const mongoose = require("mongoose");
const sessionSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required :true,
        ref:"user"
    },
    date:{
         type:Date,
        required :true
    },
    topic:{
        type:String
    },
    notes:{
        type:String
    }
})

const session=mongoose.model("session",sessionSchema)
module.exports=Session
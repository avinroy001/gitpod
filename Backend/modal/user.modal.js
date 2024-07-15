
const mongoose =require("mongoose");

const userdataSchema=mongoose.Schema({
    avatar_url: {
        type:String,
        // required:true
    },
bio: {
    type:String,
    // required:true
},

followers:{
    type:Number,
    // required:true
}, 

followers_url:{
    type:String,
    // required:true
}, 

following:{
    type:Number,
    // required:true
},


following_url:{
    type:String,
    // required:true
}, 

login:{
    type:String
}, 

name:{
    type:String
}, 

repos_url:{
    type:String,
    // required:true
} 

})

const UserData=mongoose.model("userData",userdataSchema);

module.exports={UserData};
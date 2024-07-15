const express=require("express");
const { default: mongoose } = require("mongoose");
const { mongodb_url } = require("./config/config");
const cors=require("cors");
const server=express();

const appRouter=require("./route/user.route")
server.use(cors());
server.use(express.json());
server.use("/",appRouter);


mongoose.connect(mongodb_url).then(()=>{
    console.log("connected mongoDB")
    server.listen(3001,()=>{
        console.log("listening");
    })
}).catch((err)=>console.log(err));

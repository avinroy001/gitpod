const { default: axios } = require("axios");
const { UserData } = require("../modal/user.modal");
// const dataBase=require("../modal/user.modal")

const getData=async(req,res)=>{
    const{username}=req.params;
    // console.log(username);
    const data=await UserData.findOne({login:username});
    // console.log("data",data);
    if(data){
        console.log("already existed")
        res.send(data);

    }else{
        let apiData= await axios.get(`https://api.github.com/users/${username}`);
        console.log(apiData);
        const result=await UserData.create(apiData.data);
        // console.log("result",result)
        res.send(result)
    }

}
module.exports={getData};
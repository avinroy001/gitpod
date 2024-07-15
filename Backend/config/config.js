const env=require("dotenv");
env.config()
module.exports={mongodb_url:process.env.MONGODB_URL}
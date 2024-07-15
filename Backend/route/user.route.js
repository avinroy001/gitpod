const { getData } = require("../controller/user.controller");

const router=require("express").Router();

router.post("/:username",getData);

module.exports=router

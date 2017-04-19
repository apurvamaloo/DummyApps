var express=require('express');
var router=express.Router();

var signUpModel=require("../models/signUp")
router.post('/',function(req,res)
{
  // console.log("request for signup",req,req.body.uname);
  console.log(req.body.uname);
  console.log(req.body.pwd);
  console.log(req.body.check);

  var user=new signUpModel({
    'uname':req.body.uname,
    'pwd':req.body.pwd,
    'check':req.body.check
  });

  user.save(function(err,data)
{
  if (err) {
    console.log("error occured while saving");
  }
  else {
    console.log("user details is saved");
  }
})
  res.json({'message':"hello"})
})

module.exports=router;

var mongoose=require("mongoose");

var signUpSchema=mongoose.Schema({
  'uname':String,
  'pwd':String
});

var signUpModel=mongoose.model('signUpModel',signUpSchema);
module.exports=signUpModel;

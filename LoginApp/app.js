var express=require('express');
var bodyParser=require('body-parser')
var mongoose =require('mongoose');

mongoose.connect("mongodb://localhost/test");
var app=express();

var signUp=require("./routes/signUp")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}));

app.use("/signUp",signUp);
app.listen('3000',function()
{
  console.log("server started at 3000");
})

var express=require("express");
var bodyParser=require("body-parser");

var app=express();
var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/test");
var Bear=require('./model/bear')

var router=express.Router();


app.use(bodyParser.urlencoded({'extended':true}));
app.use(bodyParser.json());

router.get('/',function(req,res)
{
  console.log("we got a request");
  res.send({'message':'hello from router'})
});

router.post('/bear',function(req,res)
{
  console.log("we got a request",req.body.name);
  var bear=new Bear({'name':req.body.name});
  bear.save(function(err,success)
{
  if(err)
  {
    res.send(err)
  }
  else {
    res.json({"message":"bear created"});
  }
})
});


// // configure app to use bodyParser()
// // this will let us get the data from a POST
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.listen('3000',function()
{
  console.log("listening on 3000");
})

app.use('/api',router);

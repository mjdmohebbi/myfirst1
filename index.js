var express= require('express');

var app=express();
app.get('/boogh',(req,res)=>{
    console.log(req);
    res.send({name:'majidi',likes:['football','pingpong']});
});

app.listen(81);
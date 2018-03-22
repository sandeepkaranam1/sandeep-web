var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');

var port=3000;

var app=express();

app.use(function(req,res,next){
console.log('time:',Date.now());
next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
	res.send('Hello World');
});

app.get('/about',function(req,res){
	res.send('Its about About page');
});
app.listen(port);
console.log('Server Started on Port '+ port);
module.exports=app;

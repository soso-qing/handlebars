/**
 * Created by Administrator on 2017/1/6.
 */
var express=require('express');
var fortune=require('./lib/fortune.js');
var app=express();
app.set('port',process.env.port ||2000);
var handlebars=require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
    console.log(app);
    res.render('home');
});
app.get('/about',function(req,res){

    res.render('about',{fortune:fortune.getFortune()});
});
app.use(function(req,res,next){
    res.status(404);
    res.render('404');
});
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500);
    res.render('500');
});


app.listen(app.get('port'),function(err){
    console.log("1111111")
});
/**
 * Created by Administrator on 2017/1/9.
 */
var fortunes=["Conquer your fears or they will conquer you",
    "Rivers need springs",
    "Do not fear what you don't know",
    "You will have a pleasant surprise",
    "whenever possible keep it simple",
    "hahahahaha"];

exports.getFortune=function(){
    var idx=Math.floor(Math.random()*fortunes.length);
    return fortunes[idx];
    }
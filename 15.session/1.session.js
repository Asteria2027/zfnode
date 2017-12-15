/*
* npm i express-session
* */

var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();

//app.use(session({
//    secret : 'zzxx',// secret的值建议使用随机字符串
//    cookie : {maxAge: 60 *1000 *30},// 过期时间（毫秒）
//    resave : true,//每次都保存
//    saveUninitialized: true
//}));

app.use(cookieParser());
app.use(zfsession());

app.get('/', function (req, res) {
    if(req.session.sign){//检查用户是否已经登录
        req.session.count = req.session.count + 1 ;
        console.log(req.session); //打印session的值
        res.send('welcome <strong>' + req.session.name+'</strong>,欢迎你第'+req.session.count+'次登录');
    }else {
        req.session.sign = true;
        req.session.name = 'zzxx';
        req.session.count = 1;
        res.send('欢迎登录！');
    }
});
app.listen(8080);

var uuid = require('node-uuid');//npm i node-uuid

function zfsession(){
    var data = {};
    return function (req, res, next) {
        var id = req.cookies['connect.sid'] ? req.cookies['connect.sid'] : uuid.v4();
        res.cookie('connect.sid',id,{
            maxAge:60*1000
        });
        req.session = data[id]?data[id]:{};
        //当响应结束的时候要把在处理函数修改的session保存回data里
        res.on('finish', function () {
            data[id] = req.session;
        });
        next();
    }
}
/*
*  npm i cookie-parser
* */

var express = require('express');
//var cookieParser = require('cookie-parser');
var querystring = require('querystring');

var app = express();
//app.use(cookieParser());

app.use(function (req, res, next) {

    req.cookies = querystring.parse(req.headers.cookie,'; ','=');
    //req.cookie = cookie;
    next();
});

app.get('/', function (req, res) {
    // 如果请求中的cookie存在 visited，则输出 cookie
    // 否则，设置 cookie 字段 visited，并设置过期时间为10分钟
    res.setHeader('Content-Type', 'text/plain; charset=utf8');
    if(req.cookies.visited){
        res.end('欢迎老朋友');
    } else {
        //res.cookie('visited', 1, {path: '/a'});
        //res.cookie('visited', 1, {domain: 'a.zzxx.cn'});
        //res.cookie('visited', 1, {maxAge: 1000*10});//设置过期时间为10秒后
        //res.cookie('visited', 1, {expires:new Date(Date.now()+10*1000)});
        res.cookie('visited', 1, {httpOnly:true});
        res.send('欢迎新朋友');
    }
});
app.get('/a', function (req, res) {
    // 如果请求中的cookie存在 visited，则输出 cookie
    // 否则，设置 cookie 字段 visited，并设置过期时间为10分钟
    res.setHeader('Content-Type', 'text/plain; charset=utf8');
    if(req.cookies.visited){
        res.send('欢迎老朋友');
    } else {
        res.send('欢迎新朋友');
    }
});
app.get('/b', function (req, res) {
    // 如果请求中的cookie存在 visited，则输出 cookie
    // 否则，设置 cookie 字段 visited，并设置过期时间为10分钟
    res.setHeader('Content-Type', 'text/plain; charset=utf8');
    if(req.cookies.visited){
        res.send('欢迎老朋友');
    } else {
        res.send('欢迎新朋友');
    }
});


app.listen(8080);
// domain path expires maxAge httpOnly secure
function cookie(name, val, options){
    console.log('name',name);
    console.log('val',val);
    console.log('options',options);
    var opt = options || {};
    var parts = [name + '=' + val];
    if(null != opt.maxAge){
        parts.push('Max-Age='+Number(opt.maxAge));
    }
    if(null != opt.domain){
        parts.push('Domain'+ opt.domain);
    }
    if(null != opt.path){
        parts.push('Path='+ opt.path);
    }
    if(null != opt.expires){
        parts.push('Expires='+opt.expires.toUTCString());
    }
    if(null != opt.httpOnly){
        parts.push('httpOnly');
    }
    if(null != opt.secure){
        parts.push('secure');
    }
    console.log('parts',parts.join(';'))
    return parts.join(';')
}
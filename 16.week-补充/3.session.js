/*
* 会话
* */

var http = require('http');
var querystring = require('querystring');
var uuid = require('node-uuid');

http.createServer(server).listen(8080);
var SESSION_ID = 'connectid';
var sessions = {};
//{money:100}
function server(req, res){
    var cookie = req.headers['cookie'];
    console.log('cookie',cookie);
    var cookieObj = querystring.parse(cookie,'; ','=');
    console.log('cookieObj',cookieObj);
    console.log('cookieObj',typeof cookieObj);
    console.log('cookieObj[SESSION_ID]',cookieObj[SESSION_ID]);
    if(cookieObj[SESSION_ID]){
        var sessionObj = sessions[cookieObj[SESSION_ID]];
        if(sessionObj){
            console.log(sessionObj)
            sessionObj.money = sessionObj.money -10;
            res.setHeader('Content-Type','text/html;charset=utf8');
            res.end('欢迎你，老顾客, 优惠券还剩'+sessionObj.money+'元');
        }else {
            var sessionId = uuid.v4();
            sessions[sessionId] = {money:100};
            res.setHeader('Content-Type','text/html;charset=utf8');
            res.setHeader('Set-Cookie',SESSION_ID+'='+sessionId);
            res.end('欢迎你，新顾客, 送100优惠券');
        }
    }else {
        var sessionId = uuid.v4();
        sessions[sessionId] = {money:100};
        res.setHeader('Content-Type','text/html;charset=utf8');
        res.setHeader('Set-Cookie',SESSION_ID+'='+sessionId);
        res.end('欢迎你，新顾客, 送100优惠券');
    }
}
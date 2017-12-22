/*
* 1. 第一次访问 http://localhost:8080
* 2. 服务器为它生成session,http://localhost:8080?connect.sid=xxxx
* */


var http = require('http');
var querystring = require('querystring');
var uuid = require('node-uuid');

http.createServer(server).listen(8080);
var SESSION_ID = 'connectid';
var sessions = {};
//{money:100}
function server(req, res){

}
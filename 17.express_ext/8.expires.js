var fs = require('fs');
var express = require('express');

var http = require('http');


function send(filename, req, res){
    fs.readFile(filename,function(err,data){
        var expires = new Date(Date.now()+ 10*1000);
        // res.setHeader('Expires', expires.toUTCString);//设置过期时间
        res.setHeader('Cache-Control','max-age=10000');//'Cache-Control优先级高于Expires，功能一样
        res.end(data);
    });
}
 
http.createServer(function(req, res){
    console.log('接收请求')
    if(req.url != '/favicon.ico'){
        var filename = req.url.slice(1);
        send(filename, req, res);
    }else {
        res.end('404');
    }
}).listen(8080);
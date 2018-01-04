var fs = require('fs');
var express = require('express');

var http = require('http');

function send(filename, req, res){
    var lastModified = new Date(req.headers['if-modified-since']);
    console.log(filename)
    fs.stat(filename, function(err, stat){//获取文件的状态信息
        // console.log(stat)
        // console.log(err)
        if(stat.mtime.getTime() == lastModified.getTime()){
            res.statusCode = 304;
            res.end();
        }else { 
            res.writeHead(200, {'Last-Modified':stat.mtime.toGMTString()});
            fs.createReadStream(filename).pipe(res);
        }
    });
}

http.createServer(function(req, res){
    if(req.url != '/favicon.ico'){
        var filename = req.url.slice(1);
        send(filename, req, res);
    }else {
        res.end('404');
    }
}).listen(8080);
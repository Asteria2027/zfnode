/*
* 接收客户端的参数数据
* 1. query查询字符串
* 2. 路径参数
* 3. 请求体里 req.body
* 4. 请求头 req.headers
* */

var express = require('express');
var app = express();
app.get('/query', function (req, res) {
   res.send(req.query);
});
app.get('/article/:id/:name', function (req, res) {
   res.send(req.params);
});
app.all('/host', function (req, res) {
    console.log(req.path);
    console.log(req.hostname);
    res.send('host');
})

app.listen(8080);
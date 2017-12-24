/*
*  反向代理
* */

var express = require('express');

var proxy = require('http-proxy').createProxyServer();//npm i http-proxy

var app = express();
function proxyPass(config) {
    return function (req, res, next) {
        var target = config[req.hostname];
        proxy.web(req, res,{
            target:target
        })
    }
}

app.use(proxyPass({
    'a.zzxx.cn':'http://localhost:3000',
    'b.zzxx.cn':'http://localhost:4000',
}));

app.listen(80);

//应用服务器A a.zzxx.cn
var app3000 = express();
app3000.get('/',function (req, res) {
    res.end('3000');
});
app3000.listen(3000);

//应用服务器B b.zzxx.cn
var app4000 = express();
app4000.get('/',function (req, res) {
    res.end('4000');
});
app4000.listen(4000);

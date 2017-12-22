var express = require('express');
var path = require('path');

var app = express();
//判断用户是否有权限访问此图片
app.use('/img',function (req, res, next) {
    var whitelist = ['b.zzxx.cn'];//设置白名单，允许那些主机过来请求
    var referer = req.headers.referer;
    console.log(referer);
    if(!referer){
        return next();
    }
    var referHost = require('url').parse(referer).host.split(':')[0];
    whitelist.forEach(function (val) {
        if(val == req.host||referHost === req.host){
            return next();
        }else {
            res.sendFile(path.join(__dirname,'img','wrong.jpg'));
        }
    });
});
app.use(express.static(__dirname))
//返回html
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'img.html'));
});
app.listen(8080);
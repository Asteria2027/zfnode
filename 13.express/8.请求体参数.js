var express = require('express');
/*
* npm i body-parser
* */
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
// querystring false
app.use(bodyParser.urlencoded({extended:true}));//true 使用原生解析 false 使用bodyParser里的方法解析，就结果无区别

app.use(function (req, res, next) {
   console.log(req.headers['content-type']);
    next();
});

app.post('/post', function (req, res) {
    res.send(req.body);
})
app.get('./index', function (req, res) {
    res.render('index',{
        name:'zzxx',
        age:6
    })
});

app.listen(8080)
/*
* 多语言版本
* */
var express = require('express');
var path = require('path');

//Accept-Language:zh-CN,zh;q=0.8

var app = express();

function checklanguage(languages){
    function parse(str){
        console.log('str',str);
        if(!str){return []}
        return str.toLowerCase().split(',').map(function (language) {
            var parts = language.split(';');
            return {name:parts[0],q:parts[1]||1}
        }).filter(function (language) {//过滤掉服务器端不能提供的语言
            console.log('language',language)
            return languages.indexOf(language.name)!=-1;
        }).sort(function (pre, after) {//按q进行排序，从高到低排序
            return after.q - pre.q;
        }).map(function (item) {//把数组的每个元素转成字符串
            console.log('item',item)
            return item.name;
        });
    }
    return function (req, res, next) {
        var acceptlanguage = req.headers['accept-language'];
        console.log('acceptlanguage',acceptlanguage)
        req.acceptLanguage = parse(acceptlanguage)[0]||languages[0];
        console.log('req.acceptLanguage',req.acceptLanguage)
        next();
    }
}

app.use(checklanguage(['en','zh']));

app.get('/', function (req, res) {
    res.setHeader('Content-Language',req.acceptLanguage);
    res.sendFile(path.join(__dirname,req.acceptLanguage,'index.html'));
});

app.listen(8080);
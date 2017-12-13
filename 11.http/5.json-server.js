var http = require('http');
var util = require('util');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){//通过index.html 的form表单来发送请求  而5.form-client.js则通过node api http.request来发送请求，本质一样
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname=='/post'){
        var contentType = req.headers['content-type'];
        req.setEncoding('utf8');
        var result = '';
        req.on('data', function (data) {
            result+=data;
        })
        req.on('end', function (data) {
            if(contentType == 'application/json')
                var obj = JSON.parse(result);
            else if(contentType == 'application/x-www-form-urlencoded')
                var obj = querystring.parse(result);
            res.end(JSON.stringify(obj));
        })
    }


}).listen(8040, function () {
    console.log('server started');
})


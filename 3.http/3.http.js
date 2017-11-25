var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url'); //对URL进行处理，把字符串转成对象

function serve(request,response){
    //true 表示query转成对象
    var urlObj = url.parse(request.url,true);
    console.log(request.url ,urlObj.query.name,urlObj.query.age);
    if(urlObj.pathname == '/'){
        //设置响应的类型，编码为utf-8
        response.setHeader('Content-Type','text/html;charset=utf-8');
        //读取文件的内容并且将读到的内容写入响应体
        fs.readFile('index.html', function (err, data) {
            response.write(data);//写入响应体
            response.end();
        });
        //fs.readFile是异步方法，通过回调函数来接收读取文件返回内容。
        // fs.readFileSync是同步方法，通过返回值来接收文件返回内容。
    } else if(urlObj.pathname == '/clock'){
        var counter = 0;
        var int = setInterval(function () {
            response.write((new Date()).toString());
            counter++;
            if(counter==5){
                clearInterval(int);
                response.end();
            }
        },1000)
    } else {
        static(urlObj.pathname, response);
    }
    function static(pathname, response){
        //设置响应的类型，编码为utf-8
        response.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
        //读取文件的内容并且将读到的内容写入响应体
        fs.readFile(pathname.slice(1), function (err, data) {
            response.write(data);//写入响应体
            response.end();
        });
    }

}
//每当有请求来的时候调用serve函数对客户端进行响应
var server =  http.createServer(serve);

server.listen(8080,'localhost');
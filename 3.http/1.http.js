var http = require('http');
var fs = require('fs');

function serve(request,response){
    //请求的方法//请求里的url地址
    console.log(request.method,request.url);
    //console.log(request.headers);//获取请求头

    response.statusCode = 200;//设置状态码
    response.setHeader('Content-Type','text/html;charset=utf-8');//设置响应的类型，编码为utf-8
    response.setHeader('name','zzz');//设置响应头
    //读取文件的内容并且将读到的内容写入响应体
    fs.readFile('index.html', function (err, data) {
        response.write(data);//写入响应体
        response.end();
    });
    //fs.readFile是异步方法，通过回调函数来接收读取文件返回内容。
    // fs.readFileSync是同步方法，通过返回值来接收文件返回内容。
}
//每当有请求来的时候调用serve函数对客户端进行响应
var server =  http.createServer(serve);

server.listen(8080,'localhost');
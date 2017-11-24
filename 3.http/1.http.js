var http = require('http');
var fs = require('fs');

function serve(requese,response){
    console.log(requese.method);//请求的方法
    console.log(requese.url);//请求里的url地址
    console.log(requese.headers);//获取请求头

    response.statusCode = 404;//设置状态码
    response.setHeader('Content-Type','text/html;charset=utf-8');//设置响应的类型，编码为utf-8
    response.setHeader('name','zzz');//设置响应头
    //读取文件的内容并且将读到的内容写入响应体
    fs.readFile('index.html', function (err, data) {
        response.write(data);//写入响应体
        response.end();
    });
}
//每当有请求来的时候调用serve函数对客户端进行响应
var server =  http.createServer(serve);

server.listen(8080,'localhost');
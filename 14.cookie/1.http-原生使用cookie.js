var http = require('http');
http.createServer(function (req, res) {
    console.log(req.headers.cookie);
    var time = new Date(new Date().getTime()+60*1000).toGMTString();
    //res.writeHead(200,{
    //    'Set-Cookie':'name=zzxx; path=/; Expires=' + time
    //});
    res.setHeader('Set-Cookie',['name=zzxx; path=/;','age=6; path=/;']);
    res.end('ok')
}).listen(8080);
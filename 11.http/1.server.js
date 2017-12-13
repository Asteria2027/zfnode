var http = require('http');
http.createServer(function (req, res) {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    console.log(req.httpVersion);
    res.end('over');
}).listen(8080, function () {
    console.log('server started');
})

/*
*  curl -v http://localhost:8080
*
*  */
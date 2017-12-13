var net = require('net');
var util = require('util');
var fs = require('fs');

//net.Socket 双工流 Duplux
var ws = fs.createWriteStream('./socket.txt');
var server = net.createServer({allowHalfOpen:false}, function(socket) {
   socket.setTimeout(10*1000);
    socket.on('timeout', function () {
        socket.resume();
        socket.pipe(ws,{end:false});
        //ws.write(socket.address().address);
        ws.write(socket.remoteAddress);
    });
});

server.on('error', function (err) {
    console.log(err);
    socket.destroy();
});


server.listen(8080,'0.0.0.0',511, function () {
    console.log(util.inspect(server.address()));
});


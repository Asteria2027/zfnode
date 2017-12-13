var net = require('net');
var util = require('util');

//net.Socket 双工流 Duplux
var server = net.createServer({allowHalfOpen:false}, function(socket) {
    console.log('socket',socket)
    console.log(util.inspect(socket.address()));

    socket.setEncoding('utf8');
    socket.on('data', function (data) {
        console.log(data);
        console.log('已经接收到%d个字节',socket.bytesRead);
        socket.write('服务器已收到：'+ data);
    });
    socket.on('close', function (err) {
       console.log('close',err);
    });
    socket.on('end', function () {
        console.log('end');
    });
})

server.on('error', function (err) {
    console.log(err);
    socket.destroy();
});


server.listen(8080,'0.0.0.0',511, function () {
    //console.log(util.inspect(server.address()));
});


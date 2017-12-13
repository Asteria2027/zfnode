var net = require('net');
var util = require('util');

//net.Socket 双工流 Duplux
var server = net.createServer({allowHalfOpen:false}, function(socket) {
    console.log(util.inspect(socket.address()));
    //查看当前连接数量
    server.getConnections(function (err, count) {
        console.log(count);
    })
})

server.on('error', function (err) {
    console.log(err);
    socket.destroy();
});

server.on('close', function (err) {
    console.log('服务器端正常关闭');
});

server.listen(8080,'0.0.0.0',511, function () {
    console.log(util.inspect(server.address()));
    setTimeout(function () {
        server.close();
    },3000)
});


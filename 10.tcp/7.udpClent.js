var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

socket.on('message', function (msg, rinfo) {
    console.log(msg.toString());
    console.log(rinfo);
})

socket.send(new Buffer('学习'),0,6,41234,'localhost', function (err, bytes) {
    console.log('发送了%d字节', bytes);
});
var net = require('net');
var util = require('util');

var socket = new net.Socket({allowHalfOpen:true});
socket.setEncoding('utf8');

socket.connect(8080,'localhost', function () {//2和5形成联动，通过on('data')接收读取数据，通过write发送数据
    socket.write('hello');
    socket.on('data', function (data) {
        console.log(data);
    })
});
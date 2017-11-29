var fs = require('fs');
var buffer = new Buffer(12);
fs.open('line.txt','r', function (err, fd) {
    fs.read(fd, buffer, 0,6,0, function (err, bytesRead) {
        console.log('bytesRead',bytesRead);//实际读取到的字节数
        console.log(buffer.toString());
        fs.read(fd,buffer,6,6,6, function (err, bytesRead) {
            console.log('bytesRead',bytesRead);//实际读取到的字节数
            console.log(buffer.toString());
        });
    });
});
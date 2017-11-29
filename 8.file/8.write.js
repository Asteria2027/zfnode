/*
*
*   fs.write 写入文件
* */

var fs = require('fs');

//fs.open('line.txt','w',function (err, fd) {
//    fs.write(fd, new Buffer('中国工作'),6,6,0, function (err, bytesWritten) {
//        console.log(bytesWritten);
//    });
//});

var buffer = new Buffer('中国工作');
fs.open('line.txt','w',function (err, fd) {
    console.log('first',fd);
    fs.write(fd, buffer,6,6,6, function (err, bytesWritten) {
        //console.log(bytesWritten);
        fs.write(fd, buffer,0,6,0, function (err, bytesWritten) {
            //console.log(bytesWritten);
            fs.close(fd, function () {

            });
            fs.open('line.txt','w', function (err, fd) {
                console.log('second',fd);
            })
        });
    });
});


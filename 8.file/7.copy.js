var fs = require('fs');


//同步的方式把src 复制到target里
function copy(src, target){
    //fs.open(src,'r', function (err, fd) {
    //    var pos = 0;
    //    var list = [];
    //    callRead();
    //    function callRead(){
    //        var buffer = new Buffer(3);
    //        fs.read(fd, buffer,0,3,pos, function (err, bytesRead) {
    //            list.push(buffer.slice(0,bytesRead));
    //            pos += bytesRead;
    //            if(bytesRead>0){
    //                callRead();
    //            }else {
    //                var buffer1 = Buffer.concat(list);
    //                console.log(buffer1.toString())
    //                fs.open(target,'w', function (err, fd) {
    //                    fs.write(fd,buffer1,0,pos,0, function (err, bytesWritten) {
    //                    })
    //                });
    //            }
    //        });
    //    }
    //})



    var pos = 0;
    var buffer = new Buffer(8);
    var fd = fs.openSync(src,'r');
    var bytesRead = fs.readSync(fd,buffer,0,3,18);
    console.log(bytesRead)
    //var fdW = fs.openSync(target,'w');
    //fs.writeSync(fdW,content,0,18,0);
}

copy('line.txt','2.txt');
var fs = require('fs');

var rs = fs.createReadStream('./read.txt',{
    start:0,end:7,highWaterMark:3
});
var buffers = [];
//监听readable会使数据从底层读到系统缓存区，读到数据后 或者 排空后（数据读取完） 如果再读到数据，会触发readable事件
rs.on('readable', function () { //不管是流动模式还是非流动模式，每当缓存区占满，就会触发一次。但非流动模式中如果没有读取缓存区，就会暂停
    console.log('=======readable========')
    var buff;
    while(null!=(buff=rs.read(1))){
        buffers.push(buff);
    }
});

rs.on('end', function () {
    var data = Buffer.concat(buffers);
    console.log(data.toString());
});
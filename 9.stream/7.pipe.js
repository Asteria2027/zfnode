var fs = require('fs');

var rs = fs.createReadStream('read.txt');
var ws = fs.createWriteStream('write.txt');

rs.pipe(ws);

rs.on('data', function (data) {
    var flag = ws.write(data);
    if(!flag){
        rs.pause();
    }
});

ws.on('drain', function () {
    rs.resume();
});
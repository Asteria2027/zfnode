var fs = require('fs');

var rs = fs.createReadStream('./read.txt',{highWaterMark:1});
var ws = fs.createWriteStream('./write.txt',{highWaterMark:1});

rs.on('data', function (data) {
    var flag = ws.write(data);//缓存区满了返回false
    console.log(flag);
});

ws.on('drain', function () {//缓存区排空触发
   console.log('drain')
});
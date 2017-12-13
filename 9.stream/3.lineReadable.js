var fs = require('fs');

var rs = fs.createReadStream('./read.txt',{
    start:0,end:7,highWaterMark:3
});
rs.on('readable', function () {
    console.log('=======readable========')
    var buff;
    while(null!=(buff=rs.read(1))){
        var char = buff[0];
        //char 如果为换行符，即到了一行的末尾

    }
});

rs.on('end', function () {

});
var fs = require('fs');
var ws = fs.createWriteStream('./test.txt',{
    highWaterMark:16
});

writeMillon(ws,'1234','utf8', function () {});

function writeMillon(writer,data,encoding,callback){
    var i = 1000000;
    write();
    function write(){
        var ok = true;
        do{
            i-= 1;
            if(i==0){
                writer.write(data,encoding,callback);
            }else {
                ok = writer.write(data, encoding);//缓存区满了则返回false
                console.log(ok);
            }
        }while (i>0&&ok)
        if(i>0){
            writer.once('drain',write);
        }
    }
}
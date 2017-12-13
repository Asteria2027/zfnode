var fs = require('fs');
var rs = fs.createReadStream('./request.txt');


//解析头部
var StringDecoder = require('string_decoder').StringDecoder;
function parseHeader(callback){
    var headers = '';
    rs.on('readable', onReadable);
    var decoder = new StringDecoder();
    function onReadable(){
        var chunk;
        while (null!=(chunk = rs.read())){
            var str = decoder.write(chunk);
            if(str.match(/\r\n\r\n/)){
                var splits = str.split(/\r\n\r\n/);
                console.log(splits)
                headers += splits.shift();
                console.log(headers)
                rs.removeListener('readable',onReadable);
                var remain = splits.join(/\r\n\r\n/);
                console.log(remain)
                var buf = new Buffer(remain,'utf8');
                if(buf.length){
                    rs.unshift(buf);
                    callback(headers);
                }
            }else {
                headers += str;
            }
        }
    }
}

parseHeader(function (headers) {
    //console.log(headers);
    //console.log('====')
    rs.on('data', function (data) {
        //console.log(data.toString());
    })
})
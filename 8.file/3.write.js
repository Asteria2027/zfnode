var fs = require('fs');

/*
*   异步的方式把字符串写入文件
*   read r write w execute
*   读       写     可执行
*   二爷（二写）一直（一执行）死（4读）读书
*
*   -rw- 自己创建者拥有的权限
*   r--  所属组
*   r--  其它人
* */

fs.writeFileSync('line.txt','第一行',{flag:'w',encoding:'utf8'}, function (err, data) {
    console.log(err);
    console.log(data);
});

fs.writeFileSync('line.txt',new Buffer('第二行'),{flag:'a',encoding:'utf8'}, function (err, data) {
    console.log(err);
    console.log(data);
});

fs.appendFile('line.txt',new Buffer('第三行'), function () {
    
});

console.log(Math.pow(2,6)-1);//0-63
console.log(Math.pow(2,8)-1);//0-255
/*
*   base64
*   base 是把3个8位字节 转成4个6位字节 然后在6位字节前补两个0
*
* */

var buf = new Buffer('珠');
console.log(buf);
//e7 8f a0

function base64(str){
    return result;
}


console.log(parseInt('e7',16));
console.log(parseInt('8f',16));
console.log(parseInt('a0',16));
console.log(231..toString(2));
console.log(143..toString(2));
console.log(160..toString(2));
// 11100111 10001111 10100000
// 00111001 00111000 00111110 00100000

console.log(parseInt('00111001',2));//57
console.log(parseInt('00111000',2));//56
console.log(parseInt('00111110',2));//62
console.log(parseInt('00100000',2));//32

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str += str.toLowerCase();
str += '0123456789';
str += '+/';
console.log(str);
console.log(str[57]+str[56]+str[62]+str[32]);
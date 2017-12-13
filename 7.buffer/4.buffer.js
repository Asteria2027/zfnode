
//三种构建buffer的方法
var buf1 = new Buffer(3);
console.log(buf1);
buf1.fill(0);
console.log(buf1);
buf1[0] = 0x61;
buf1[1] = 0x62;
buf1[2] = 0x63;

var buf2 = new Buffer([0x61,0x62,0x63]);

var buf3 = new Buffer('abc','utf8');

console.log(buf1.toString()==buf2.toString());
console.log(buf2.toString()==buf3.toString());

var buf4 = new Buffer('a','utf8');
console.log(buf4);

var buf5 = new Buffer('a','ascii');
console.log(buf5);

var str = '升水升水';
var buf = new Buffer(str,'utf8');
console.log(str.length);
console.log(buf.length);
console.log(buf.toString('utf8'));

str[0] = '天';
console.log(str);

console.log(buf);
//buf[0]=0;
//console.log(buf);

var newStr = str.slice(1);
var newBuffer = buf.slice(1);
newBuffer[1] = 5;
//console.log(newBuffer);
console.log(buf);

var buf = new Buffer(12);
buf.write('中国',0,6);
buf.write('工作',6,6);
console.log(buf.toString());

var buffer = new Buffer('订单学习');
var buf1 = buffer.slice(0,7);
var buf2 = buffer.slice(7);
console.log(buf1.toString());
console.log(buf2.toString());

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();
console.log(decoder.write(buf1));
console.log(decoder.write(buf2));

var srcBuf = new Buffer([4,5,6]);
var tarBuf = new Buffer(6);
tarBuf[0] = 1;
tarBuf[1] = 2;
tarBuf[2] = 3;
srcBuf.copy(tarBuf,3,1,2);
console.log(tarBuf);


var buf1 = new Buffer([1,2,3]);
var buf2 = new Buffer([4,5,6]);
var buf = Buffer.concat([buf1,buf2],6);
console.log(buf);


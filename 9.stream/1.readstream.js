/*
*
* */

var fs = require('fs');

/*
* path 读取的文件路径
* options
*   flags 对文件采取的何种操作，默认为 r
*   encoding 指定编码 ， 默认为null
*   autoClose 读完数据后是否关闭文件描述符
*   start 用整数表示文件开始读取的字节数的索引位置
*   end 用整数表示文件结束读取的字节数的索引位置（包括end位置）
*   highWaterMark 最高水位线，停止从底层资源读取前内部缓冲区最多能存放的字节数。缺省为64kb
* */
var rs = fs.createReadStream('./read.txt',{
    start:0,end:5,encoding:'utf8'
});

rs.on('data', function (data) {
   console.log(data);
});

rs.on('end', function () {
    console.log('读取完成');
})
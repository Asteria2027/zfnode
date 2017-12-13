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
    start:0,end:8,highWaterMark:2
});

rs.setEncoding('utf8');

rs.resume();

//先调用resume，让对象触发data事件去监听，使用定时器让绑定data事件延后，结果文件读取完成之后，还没有绑定data事件，绑定事件之后，文件读取已完成，数据也就丢失
setTimeout(function () {

    //绑定一个data事件监听器会将流切换到 流动模式 ，数据会被尽可能的读出
    rs.on('data', function (data) {
//    setTimeout(function () {
        console.log(data);
        rs.pause();// 通知对象停止触发data事件
        setTimeout(function () {
            rs.resume();//通知对象恢复触发data事件
        },1000)
        //},5)
    });

},1000)


rs.on('end', function () {//改时间会在 读完 数据后被触发
    console.log('读取完成');
});

//当底层数据源（比如，源头的文件的描述符）被关闭时触发，并不是所有流都会触发这个事件
rs.on('close', function () {
    console.log('文件关闭');
});

rs.on('open', function () {
    console.log('打开文件');
})
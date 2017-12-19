/*
* 行处理器
* */

var fs = require('fs');
var EventEmitter = require('events');
var util = require('util');

function LineReader(path){
    this._rs = fs.createReadStream(path);
    //console.log(this._rs);
}
util.inherits(LineReader,EventEmitter);
//Object.setPrototypeOf(LineReader.prototype, EventEmitter.prototype);
//该Object.setPrototypeOf()方法将[[Prototype]]指定对象的原型（即内部属性）设置为另一个对象或null。
//LineReader.prototype = (function () {
//    var Temp = function(){};
//    Temp.prototype = EventEmitter.prototype;
//    return new Temp();
//})();
//
//LineReader.prototype = Object.create(EventEmitter.prototype);//方法会使用指定的原型对象及其属性去创建一个新的对象。

var RETURN = 0x0d; // \r
var NEWLINE = 0x0a; //\n
LineReader.prototype.setEncoding = function (encoding) {
    if(Buffer.isEncoding(encoding)){//判断buffer是否支持这个编码
        this._encoding = encoding;
    }
}
LineReader.prototype.parse = function (buf) {
    if(this._encoding){
        return  buf.toString(this._encoding);
    }
    return buf;
}

LineReader.prototype.on('newListener', function (eventName, callback) {//当添加新的监听器时，newListener 事件会触发
    console.log(eventName);
    if(eventName=='newLine'){
        var row = [];
        var self = this;
        this._rs.on('readable', function () {
           var buff;
            while(null != (buff = this.read(1))){
                var ch = buff[0];
                if(ch == RETURN){
                    this.read(1);
                    var curr = new Buffer(row);
                    self.emit('newLine',self.parse(curr));
                    row.length=0;//清空数组
                }else {
                    row.push(ch);
                }
            }
        });
        this._rs.on('end', function () {
            if(row.length>0){// 读到最后一行其实已经没有换行了
                self.emit('newLine',self.parse(new Buffer(row)));
            }
            self.emit('end');
        });
    }
});

var lineReader = new LineReader('./index.txt');
lineReader.setEncoding('utf8');
lineReader.on('newLine', function (row) {
    console.log(row);
});
lineReader.on('end', function () {
    console.log('end');
})
//console.log(lineReader.on);
//console.log(lineReader.__proto__);
//console.log(lineReader.__proto__.__proto__ == EventEmitter.prototype);
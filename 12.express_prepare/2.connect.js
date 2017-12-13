var http = require('http');
var proto = {};

function createServer(){
    function app(req, res, next){

    }
    //把proto中的属性拷贝到app对象里
    Object.assign(app,proto);
    app.stack = [];
}
proto.use = function (handle) {
    this.stack.push(handle);
}

module.exports = createServer;
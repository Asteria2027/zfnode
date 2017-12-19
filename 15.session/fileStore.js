var path = require('path');
var fs = require('fs');
var mkdirp = require('mkdirp');//npm i mkdirp

module.exports = function (session) {
    var Store = session.Store;
    function FileStore(opt){
        var options = opt||{};
        this._maxAge = options.maxAge||0;
        this._dir = options.dir||'.';
        this._percent = 0.1;
        mkdirp.sync(this._dir);
    }
    var data =  {};
    FileStore.prototype.__proto__ = Store.prototype;
    FileStore.prototype.get = function (sid, callback) {
        console.log('get',data[sid]);
        console.log(callback)
        fs.exists(path.join(this._dir,sid), function (exists) {//检测文件是否存在
            if(exists){
                fs.readFile(path.join(this._dir,sid),{encoding:'utf8'}, function (err, data) {
                    callback(null, JSON.parse(data));
                });
            }else {
                callback(null, null);
            }
        });
        if((Math.random()*10).toFixed(0)==1)
        this.startGC();
        //callback(null,data[sid]);
    }
    FileStore.prototype.startGC = function () {
        console.log('start gc');
        fs.readdir(this._dir, function (err, list) {//list是一个包含 “ 指定目录下所有文件名称的” 数组。
            list.forEach(function (file) {
                fs.stat(path.join(this._dir,file), function(err, stat){//获取文件的状态信息
                    if(stat.mtime+this._maxAge<Date.now()){//文件修改时间加上倒计时低于此刻时间时为true
                        fs.unlink(path.join(this._dir,file));//删除文件操作
                    }
                });
            });
        });
    }
    FileStore.prototype.set = function (sid, session, callback) {
        console.log('set',session);
        console.log(sid);
        fs.writeFile(path.join(this._dir,sid),JSON.stringify(session),callback);
        //data[sid] = session;
        //callback();
    }
    FileStore.prototype.destroy = function (sid, callback) {
        fs.unlink(path.join(this._dir,sid),callback);
        //delete data[sid];
        //callback();
    }

    return FileStore;
}
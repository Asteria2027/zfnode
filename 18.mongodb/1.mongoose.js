var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/zzxx',{useMongoClient: true});
var db = mongoose.connection;
db.on('error',function(error){
    console.log('数据库连接失败'+error);
});
db.on('open',function(){
    console.log('数据库连接成功');
});
//集合的数据模型定义 定义了字段名和字段类型 默认值 
var PersonSchema = new mongoose.Schema({
    name:{type: String},
    age:{type: Number, default:0},
    time:{type: Date, default:Date.now},
    email:{type: String, default:''},
});

var PersonModel = db.model('Person',PersonSchema);



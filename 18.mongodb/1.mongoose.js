
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var uri = 'mongodb://127.0.0.1:27017/zzxx'
var options = { promiseLibrary: require('bluebird') };
var db = mongoose.createConnection(uri,options);
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
//创建Model 是通过数据库连接创建的
var PersonModel = db.model('Person',PersonSchema);

var personEntity = new PersonModel({
    name:'zzxx',
    age:6,
    email:'zzxx@163.com'
});
console.log(personEntity.name);
console.log(personEntity.age);
console.log(personEntity.time);


// personEntity.save(function(error,doc){
//     if(error){
//         console.log('error:'+ error);
//     }else {
//         console.log('doc',doc);
//     }
// });

PersonModel.create({name:'zzxx',age:7},function(error,doc){
        if(error){
            console.log('error:'+ error);
        }else {
            console.log('doc',doc);
        }
})

PersonModel.find({},function(error,docs){
    console.log(docs);
    console.log(docs[0].email);
    //若没有像find传递参数默认的是显示所有文档
})
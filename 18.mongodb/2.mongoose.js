
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

PersonSchema.add({password:{type:String}});
PersonSchema.add({hobby:{type:String}});

PersonSchema.static('findByName',function(name, cb){
    return this.find({name:name},cb);
})

PersonSchema.method('mysave',function(cb){
    this.hobby = 'drink';
    // this.save(cb);
    console.log('how are you');
})

//创建Model 是通过数据库连接创建的
var PersonModel = db.model('Person',PersonSchema);

var personEntity = new PersonModel({
    name:'zzxx',
    age:6,
    email:'zzxx@163.com',
    password:12345678
});
PersonModel.findByName('zzxx',function(err, docs){
    console.log(docs.length);
})

personEntity.mysave(function(err,doc){
    console.log(doc.hobby);
});

// personEntity.save(function(){

// })

// PersonModel.create([
//     {name:'zzxx1',age:1},
//     {name:'zzxx2',age:2},
//     {name:'zzxx3',age:3},
//     {name:'zzxx4',age:4},
//     {name:'zzxx5',age:5},
//     {name:'zzxx6',age:6},
//     {name:'zzxx7',age:7},
//     {name:'zzxx8',age:8},
//     {name:'zzxx9',age:9},
//     {name:'zzxx10',age:10},
// ],function(error,docs){
//     if(error){
//         console.log('error:'+ error);
//     }else {
//         console.log('save ok');
//     }
// });

PersonModel.find({},null,{skip:3,limit:3,sort:{age:-1}},function(error, docs){
    if(error){
        console.log('error:'+ error);
    }else {
        docs.forEach(function(doc){
            console.log(doc.name, doc.age);
        });
    }
})
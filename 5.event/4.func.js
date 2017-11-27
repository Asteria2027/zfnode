function say(name, word){
    console.log(name,':',word);
}
//var newSay = say.bind(this,'张三');
function newSay(){
    say.apply(null, ['张三'].concat(Array.prototype.slice.call(arguments)));
}
newSay('我爱你');
newSay('i love you');

var a = 0;
function eat(times , callback){
    return function () {
        if(++a==times){
            console.log(arguments)
            callback.apply(this,Array.prototype.slice.apply(this));
        }
    }
}
var newEat = eat(5, function () {
    console.log('吃完了')
});
newEat();
newEat();
newEat();
newEat();
newEat();
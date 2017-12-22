/*
*   util
*
* */
var util = require('util');

function Parent(){
    this.name = 'father';
    this.age = 6;
    this.say = function () {
        console.log('hello',this.name);
    }
}

Parent.prototype.showName = function () {
    console.log(this.name);
}

function Child(){
    this.name = 'child';
}

//不能传参 会继承私有属性
//Child.prototype = new Parent(); //Parent.prototype

//Child.prototype = Object.create(Parent.prototype);

util.inherits(Child, Parent);

var child = new Child();
child.showName();

function Person() {
    this.name = 'sss';
    this.parent = {
        name: 'parent'
    }
}
Person.prototype.toString = function () {
    console.log('this is',this.name);
}

var p = new Person();
p.toString();
/*
*   showHidden  是否显示隐藏属性
*   depth   对象的递归显示深度
*   colors 是否显示颜色
* */
console.log(util.inspect(p,true,2,true));

var arr1 = [1,2];
var arr2 = [3,4];
console.log(arr1.concat(arr2));//[1,2,3,4]
console.log(Array.prototype.push.apply(arr1,arr2));//push返回值是长度 4
console.log(arr1);//[1,2,3,4]

console.log(util.isArray([]));//true
console.log(util.isDate([]));//false
console.log(util.isRegExp([]));//false
console.log(util.isError([]));//false

var result = util.format('%s:%s', 'foo');
console.log(result);
var result2 = util.format('%s:%s', 'foo', 'bar', 'baz');
console.log(result2);
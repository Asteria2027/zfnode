var Person = require('./Human');
//Person = Person.Person;
var girl = new Person('小龙女',28);
var boy = new Person('杨过',20);

console.log(girl.getName(), girl.getAge());
console.log(boy.getName(), boy.getAge());

girl.setName('老龙女');
girl.setAge(60);

console.log(girl.getName(), girl.getAge());
console.log(boy.getName(), boy.getAge());

console.log(girl.home,boy.home);
console.log(girl.hasOwnProperty('home'));
girl.home = '深圳';
console.log(girl.hasOwnProperty('home'));
console.log(girl.home,boy.home);
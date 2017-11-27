
console.log('welcome')
exports.name = 'sss';
var person = require('./person');
exports.welcome = function (words) {
    console.log('welcome----',words)
}
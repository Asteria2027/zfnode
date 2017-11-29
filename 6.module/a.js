
exports.loaded = function () {
    console.log(module.loaded);
}
console.log('A开始加载');
require('./b');

exports.name = 'sss';

console.log('module.parent',module.parent)
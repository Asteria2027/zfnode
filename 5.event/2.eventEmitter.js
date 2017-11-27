var EventEmitter = require('events');

/*
*   inherits
*   on = addListener
*   once
*   emit
*   listeners
*   removeAllListeners
*   removeListener
* */
var util = require('util');
function Bell(name){
    this.name = name;
}

util.inherits(Bell,EventEmitter);

var jingle = new Bell('jingle');

jingle.on('ring', function () {
    console.log('收到礼物1');
});
jingle.addListener('ring', function () {
    console.log('收到礼物2');
});
var drop = function (who) {
    console.log(who,'铃铛丢了');
}

//jingle.removeAllListeners('ring');
jingle.once('drop', drop);
jingle.emit('ring');
//jingle.removeListener('drop',drop);
jingle.emit('drop','鹿');
jingle.emit('drop','老人');

console.log(jingle.listeners('ring'));
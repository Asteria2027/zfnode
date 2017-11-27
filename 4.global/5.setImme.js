var fs = require('fs');

fs.readFile('1.txt', function (err, data) {
    console.log(data.toString());
});


setTimeout(function () {
    console.log('setTimeout c');
},0);

process.nextTick(function () {
    console.log('nextTick a');
    process.nextTick(function () {
        console.log('nextTick b');
    })
});

setImmediate(function () {
    console.log('setImmediate a');
    setImmediate(function () {
        console.log('setImmediate b');
    })
});

//nextTick > setTimeout > setImmediate > 异步IO
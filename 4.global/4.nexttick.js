/*
*   nexttick
*
*
* */
console.log('a扫地');
setTimeout(function () {
    console.log('a客人 settimeout');
},0);
process.nextTick(function () {
    console.log('a客人 nexttick');
    process.nextTick(function () {
        console.log('a客人 nexttick2');
        process.nextTick(function () {
            console.log('a客人 nexttick3');
        })
    })
})
console.log('b厨师');
console.log('c厨师');
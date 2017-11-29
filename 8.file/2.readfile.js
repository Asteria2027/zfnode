/*
*   readFileSync   读取文件
* */

var fs = require('fs');

/*
*   path 文件的路径
*   options
*     encoding 文件的编码
*     flag
* */

var data = fs.readFileSync('index.txt',{encoding:'utf8',flag:'r'});

fs.readFile('index.txt',{encoding:'utf8',flag:'w'}, function (err,data) {
    if(err){
        console.error(err)
    }
});

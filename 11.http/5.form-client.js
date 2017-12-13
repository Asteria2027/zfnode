
var http = require('http');
var options = {
    hostname: 'localhost',
    port:8040,
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    },
    path:'/',
    method:'POST'
}

var request = http.request(options, function (res) {
    res.setEncoding('utf8');
    var result = '';
    res.on('data', function (data) {
        result+=data;
    })
    res.on('end', function () {
        console.log(JSON.parse(result));
    })

});

var querystring = require('querystring');
request.write(querystring.stringify({"name":"zzxx"}));
request.end();
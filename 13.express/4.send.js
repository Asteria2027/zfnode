

var express = require('express');
var app = express();
app.get('/query', function (req, res) {
    res.send(req.query);
});
app.get('/article/:id/:name', function (req, res) {
    res.send(req.params);
});
app.all('/host', function (req, res) {
    console.log(req.path);
    console.log(req.hostname);
    res.send('host');
})
app.all('/status', function (req, res) {
   res.sendStatus(200);
});
app.all('*', function (req, res) {
    console.log(req.path);
    console.log(req.hostname);
    res.send('走丢的页面');
})

app.listen(8080);
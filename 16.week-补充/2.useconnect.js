var connect = require('./connectWithPath');

var app = connect();

app.use(function (req, res, next) {
    res.send = function (html) {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(html);
    }
    next();
});
//app.use(function (req, res, next) {
//    res.send('hello');
//})

app.get('/hello',function (req, res) {
    res.send('get hello');
});
app.post('/hello',function (req, res) {
    res.send('post hello');
});
app.all('/404',function (req, res) {
    res.send('404');
});
app.listen(8080);
var app = require('express')();
var session = require('express-session');
var FileStore = require('./fileStore')(session);

app.use(session({
    secret:'zzxx',
    resave:true,
    cookie:{
        maxAge:60*1000
    },
    saveUninitialized:true,
    store:new FileStore({dir:'./sessions'})
}));
app.get('/save', function (req, res) {
    req.session.name = 'zzxx';
    res.end('end');
});
app.get('/read', function (req, res) {
    res.end(req.session.name);
})

app.listen(80);
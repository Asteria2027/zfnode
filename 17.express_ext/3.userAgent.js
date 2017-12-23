
var express = require('express');
var app = express();
var path = require('path');
var userAgentParser = require('user-agent-parser');

var visit = { mobile:0,other:0 };

app.use(function (req, res, next) {
   req.agent = userAgentParser(req.headers['user-agent']||'');
    next();
});

app.get('/', function (req, res) {
    console.log('req.agent',req.agent);
    if(req.agent.device.type == 'mobile'){
        visit.mobile = visit.mobile+1;
    }else {
        visit.other = visit.other +1;
    }
    res.send(visit);
});

app.listen(8080);
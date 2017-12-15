var connect = require('./2.connect');
var app = connect();
require('./middle')(app);
require('./route')(app);
app.listen(8080);

// 中间件
// 路由控制
// 模板解析
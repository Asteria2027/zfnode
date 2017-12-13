var url = require('url');
var urlObj = url.parse('http://zzxx:1332255@www.baidu.com:80/mypath/sub?name=zzxx#top',true);
console.log(urlObj);

console.log(url.format(urlObj));
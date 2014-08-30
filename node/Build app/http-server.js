/**
 * Created by Administrator on 2014/8/28.
 *
    http.createServer 创建了一个http.Server 的实例，将一个函数作为HTTP 请求处理函数
    这个函数接受两个参数
                    请求对象(req)
                    响应对象(res)
   res 显式地写回了响应代码200
   listen 3000 端口

 */
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');
}).listen(3000);
console.log("HTTP server is listening at port 3000.");
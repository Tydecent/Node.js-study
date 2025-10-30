// require()是Node中加载模块的方式，这里加载了http模块，这个模块提供了创建HTTP服务器和客户端的功能
var http = require('http'); 


/**
 * createServer() 是 http 模块的一个方法，用于创建一个Web服务器
 * 它需要一个回调函数作为参数，这个函数会在每次有访问的时候执行
 * 
 * 回调函数的参数： request  response
 * request 叫做“请求对象”，包含了客户端请求的信息，比方说请求的网址、请求方法(GET/POST)、请求头等
 * response 叫做“响应对象”，是用于向客户端发送响应的工具，比方说设置状态码、设置响应头、发送响应内容等
**/
http.createServer(function (request, response) {
        /**
         * response就是上面的响应对象。
         * 这里writeHead()方法是设置HTTP响应头，参数：
         * HTTP状态码，这里是200，表示“成功”，除此之外，还有“404”，表示找不到页面、500表示服务器错误...
         * statusMessage:这里是“{'Content-Type': 'text/plain'}”，用来告知客户端返回类型，“text/plain”表示纯文本，如果是html,可以用“text/html”
        **/
        response.writeHead(200, {'Content-Type': 'text/plain'});    

        response.end('Hello World\n');  // end()表示“结束响应”，并发送数据给浏览器
}).listen(8888);    // listenb表示启动服务器监听，这里是监听8888端口

// 在终端打印服务器启动的信息
console.log('Server running at http://127.0.0.1:8888/');
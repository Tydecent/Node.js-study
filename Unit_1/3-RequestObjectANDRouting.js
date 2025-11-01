/**
 * date:2025-11-01
 * 请求对象(Request Object，在代码中常常写成req)是HTTP请求的抽象，包含了客户发送的所有信息。
 * 当我们创建了一个HTTP服务器时，回调函数会接收到请求对象和响应对象。
 * 
 * 路由(Route)是将一个HTTP请求映射到特定的处理方式。其结果是产生一个HTTP响应
 * 其核心任务是“这个URL来了，我应该执行哪段代码来处理并响应”
 */

const http = require('http');
const url = require('url');     // URL模块，由Node.js原生提供，用于方便地解析req.url

const server = http.createServer((req,res) => {
    console.log("=====收到请求=====");
    console.log("URL:",req.url);
    console.log("方法:",req.method)
    console.log("请求报文:",req.headers);

    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);   // 解析请求URL，获取路径名
    const method = req.method;                                          // 获取请求方法
    const pathname = parsedUrl.pathname;                                // URL的纯路径部分
    // 设置响应头
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 根据不同的URL请求，路由到不同的代码：
    if (pathname === '/' && method === 'GET') {
        res.statusCode = 200;
        res.end("<h1>首页</h1>");
    } else if (pathname === '/about') {
        res.statusCode = 200;
        res.end("<h1>关于我们</h1>");
    } else if (pathname === '/HuangChong' || pathname === 'locust') {
        res.statusCode = 200;
        res.end("好好的程序猿，使你的头发掉光<br>——杨子留");
    } else {
        res.statusCode = 404;
        res.end("<h1>404 No God Please No!</h1>");
    }
}).listen(8888);

console.log("服务器于 http://localhost:8888/ 上运行");
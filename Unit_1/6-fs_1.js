/**
 * fs是File System的缩写，是一个用于与文件系统交互的API，提供了许多用于文件操作的方法
 * 
 * fs模块中的大部分方法都有同步和异步两种版本。同步版本都有Sync后缀
 */
const fs = require('fs');       // 引入fs模块
const http = require('http');
const { debugPort } = require('process');

const PORT = 8888;

http.createServer((req,res) => {
    const logtext = `[${new Date().toISOString()}] ${req.ip} => ${req.method} ${req.url}`;
    console.log(logtext);
    fs.appendFile('server.log',logtext + `\n`,(err) =>{if (err) throw err;})    // 将日志写入日志文件

    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('Hello World!');
}).listen(PORT);

console.log("Server running at port" + PORT);

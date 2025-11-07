/**
 * Express是一个灵活、简洁的Node.js Web应用框架，提供了一系列强大的特性来创建各种 Web 应用。
 * 使用以下命令安装Express:
 * npm install express
 * 
 * 
 */
const express = require('express'); // 导入express模块
const app = express();              // 创建express应用
const PORT = 8888;

// 全局中间件
app.use((req,res,next) =>{
    console.log(`[${new Date().toISOString()}] ${req.ip} => ${req.method} ${req.url} `);
    next();
})

// 定义路由
app.get('/',(req,res) => {
    res.send('Hello World!');
})

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server running at port ` + PORT);
})
/**
 * date:2025-11-03
 * 处理请求数据
 * 在GET中，请求数据通常附加在URL后面，以?开头,用&间隔。
 * 例如: http://example.com/data?name=zhangsan&id=114514&passwd=1919810
 * 在以上信息中，有三个请求数据：name、id、passwd，其数据分别为zhuangsan、114514、1919810
 * 在下面代码中，url被存储在parsedUrl变量中，其searchParams方法被用于查询参数
 */
const http = require('http');

http.createServer((req,res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);       // 构造URL
    const query = parsedUrl.searchParams;   // 查询参数
    const pathname = parsedUrl.pathname;    // 路由

    // 输出访问日志
    console.log("=====收到请求=====");
    console.log("时间：" + new Date().toISOString())
    console.log("客户端IP：" + req.ip);
    console.log("URL：" + req.url);
    console.log("方法：" + req.method);

    var ans;    // 答案存储在ans变量

    // 路由选择
    if (pathname === '/add') {
        ans = Number(query.get('num1')) + Number(query.get('num2'));    // 执行加法操作，使用query.get选择参数
    } else if (pathname === '/sub') {
        ans = Number(query.get('num1')) - Number(query.get('num2'));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 No God please no!');
        return;
    }

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(ans.toString());    // 返回的必须要是字符串，所以使用toString()方法
}).listen(8888);

console.log("服务器运行在Port 8888");

/**
 * 在这里，我们使用两个参数和一次路由选择，选择`/add`表示加法，`/sub`表示减法
 * 然后有两个参数:num1和num2，表示两个操作数，最后返回结果。
 */
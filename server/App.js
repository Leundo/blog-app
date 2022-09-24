const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const app = express();

const HomeRouter = require('./routes/HomeRoute');
const LabRouter = require('./routes/LabRoute');


// 配置中间件
// 打印日志
app.use(logger('tiny'));
// 解析 json 格式的请求体数据
app.use(express.json());
// 解析 URL-encoded 格式的请求体数据
app.use(express.urlencoded({ extended: false }));
// 解析 cookie. 生产环境需要更换
const secret = "cookie-secret";
app.use(cookieParser(secret));
// 快速托管静态资源的内置中间件
app.use('/api/static', express.static(path.join(__dirname, 'public')));

app.use('/api/home', HomeRouter);
app.use('/api/lab', LabRouter);

app.listen(3020, () => {
    console.log("Server has been established.");
});

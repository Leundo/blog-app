const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const fs = require('fs');
const https = require('https');
const http = require('http');
const app = express();

// 代理
app.use('/api', createProxyMiddleware({ target: 'http://localhost:3020'}));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 证书
const privateCrt = fs.readFileSync(path.join(process.cwd(),'./https/localhost.crt'),'utf8');
const privateKey = fs.readFileSync(path.join(process.cwd(),'./https/localhost.key'),'utf8');

const HTTPS_OPTOIN = {
  key: privateKey,
  cert: privateCrt
};

const HTTPS_PORT = 443;
const HTTP_PORT = 80;

// HTTPS 服务
const httpsServer = https.createServer(HTTPS_OPTOIN, app);
httpsServer.listen(HTTPS_PORT, () => {
  console.log(`HTTPS Server is running on: https://localhost:${HTTPS_PORT}`);
});

// HTTP 重定向
http.createServer(function (req, res) {
  res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  res.end();
}).listen(HTTP_PORT);
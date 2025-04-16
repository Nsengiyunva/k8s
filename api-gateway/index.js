const express = require( "express"  )
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/auth', createProxyMiddleware({ target: 'http://auth-service', changeOrigin: true }));
app.use('/user', createProxyMiddleware({ target: 'http://user-service', changeOrigin: true }));

app.listen(8082, () => console.log('API Gateway running on port 8082'));
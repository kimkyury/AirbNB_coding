const { createProxyMiddleware } = require('http-proxy-middleware');
const port = process.env.PORT

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
        })
    );
};
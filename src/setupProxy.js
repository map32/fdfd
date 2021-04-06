const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
	
	app.use('/reallytradfood',createProxyMiddleware({
		pathRewrite: {
			'^/reallytradfood' : '/'
		},
		target: `https://tradifood.net/api/service/TradFoodInfoService`,
		changeOrigin:true,
		secure: false,
	}))
	
	app.use('/TradFoodInfoService',createProxyMiddleware({
		target: `http://apis.data.go.kr/B551553`,
		changeOrigin:true,
		secure: false,
		onProxyReq : function (proxyReq, req, res) {
		},
		onProxyRes : function (proxyRes, req, res) {
		  const param = proxyRes.headers['location'].split('/TradFoodInfoService')[1];
		  proxyRes.headers['location'] = '/reallytradfood' + param
		}
	}))
	
	app.use('/1430000',createProxyMiddleware({
		target: `http://apis.data.go.kr`,
		changeOrigin:true,
		secure: false,
	}))
	
	app.use('/FoodDictionaryService', createProxyMiddleware({
		target: 'http://openapi.jbfood.go.kr:8080/openapi/service',
		changeOrigin:true,
		secure: false,
	}))
}
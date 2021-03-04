const goods = require('./data/goods.json');
const ratings = require('./data/ratings.json');
const seller = require('./data/seller.json');

module.exports = {
    // baseUrl: '/', // 根路径
    publicPath: './',
    outputDir: "dist", // 构建输出目录
    assetsDir: 'assets', // 静态资源目录（js,css,img,fonts）
    lintOnSave: false, // 是否开启eslint保存检测，有效值：true || false || 'error'
    devServer: {
        open: true,
        host: "0.0.0.0",
        port: 7000,
        https: false,
        hotOnly: false,
        proxy: {
            //配置跨域
            '/api': {
                target: "http://localhost:5000/api/",
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before(app) {
            // https://localhost:7000/api/goods
            app.get("/api/goods", (req, res) => {
                res.json(goods)
            });
            app.get("/api/ratings", (req, res) => {
                res.json(ratings)
            });
            app.get("/api/seller", (req, res) => {
                res.json(seller)
            })
        }
    }
}
const path = require('path')
const data = require('./public/json/citylist.json')
const data2 = require('./public/json/moviedetail.json')
const citylist = data.city
module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/citylist', function (req, res) {
                    res.json({data: citylist, error: 0})
                })
                app.get('/api/moviedetail', function (req, res) {
                    res.json({data: data2, error: 0})
                })
            },
            proxy: {
                '/api': {
                    target: 'http://m.maoyan.com',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            }
        }
    },
    pluginOptions:{
        'style-resources-loader':{
            preProcessor:'less',
            patterns:[
                path.resolve(__dirname,'./public/less/_theme.less')
            ] //全局导入这个less
        }
    }
}



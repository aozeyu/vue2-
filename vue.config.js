const path = require('path')


module.exports ={
    pluginOptions:{
        'style-resources-loader':{
            preProcessors:'less',
            pattern:[
                path.resolve(__dirname,'./public/less/_theme.less')
            ] //全局导入这个less
        }
    }
}

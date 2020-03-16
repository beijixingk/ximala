const path = require('path')
module.exports = {
    chainWebpack: config => {
      // GraphQL Loader
      config.resolve.alias 
        .set('components',path.resolve(__dirname,'./src/components'))
        .set('pages',path.resolve(__dirname,'./src/pages'))
        .set('assets',path.resolve(__dirname,'./src/assets'))
        .set('utils',path.resolve(__dirname,'./src/utils'))
    },
    devServer: {
      proxy: {
        '/ajax': {
          target: 'https://m.ximalaya.com',
          changeOrigin: true,
          pathRewrite:{
            '^/ajax':''
          }
        },
        '/searchData':{
          target:'https://search.ximalaya.com',
          changeOrigin: true,
          pathRewrite:{
            '^/searchData':''
          }
        }
      }
    }
}



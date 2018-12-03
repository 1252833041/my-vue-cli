const _path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseVueLoaderConf = {
   
    transformToRequire: {
      video: 'src',
      source: 'src',
      img: 'src',
      image: 'xlink:href'
    }
  };

  const devVueLoaderConf = Object.assign({},baseVueLoaderConf,{
    loaders: {
        css: ['vue-style-loader', 'css-loader'],
        less: ['vue-style-loader', 'css-loader',  'less-loader']
      },
      cssSourceMap: true
  })

  const buildVueLoaderConf = Object.assign({}, baseVueLoaderConf, {
    loaders: {
      css: ExtractTextPlugin.extract({
        use: ['css-loader'],
        fallback: 'vue-style-loader'
      }),
      less: ExtractTextPlugin.extract({
        use: ['css-loader',  'less-loader'],
        fallback: 'vue-style-loader'
      })
    },
    cssSourceMap: false
  });

  module.exports={
    dev: {
        publicPath: '/',
        devtoolType: 'cheap-module-eval-source-map',
        vueloaderConf: devVueLoaderConf,
        host: 'localhost',
        port: '1234',
        proxyTable: {}
      },
      build: {
        publicPath: '/',
        devtoolType: 'source-map',
        vueloaderConf: buildVueLoaderConf,
        staticPath: 'static'
      }
  }
//工具函数集合
var utils = require('./utils')
var webpack = require('webpack')
//配置文件
var config = require('../config')
//webpack 配置合并插件
var merge = require('webpack-merge')
// webpack基本配置
var baseWebpackConfig = require('./webpack.base.conf')
//自动生成html并且注入到.html文件中的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
//webpack错误信息提示

var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
//将hot-reload热加载的客户端代码添加到webpack.base.conf的对应entry中，一起打包
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    //热重载在页面进行变更的时候只会重绘对应的页面模块，不会重绘整个页面
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    //将index作为入口，注入html代码后生成文件
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    //webpack错误信息提示
    new FriendlyErrorsPlugin()
  ]
})

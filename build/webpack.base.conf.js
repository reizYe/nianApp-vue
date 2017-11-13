//node自带的文件路径工具
var path = require('path')
//工具函数集合
var utils = require('./utils')
//配置文件
var config = require('../config')
//工具函数集合
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  
  output: {
    //编译输出的静态资源根路径
    path: config.build.assetsRoot,
    //编译输出的文件名
    filename: '[name].js',
    //正式发布环境下编译输出的上线路径的跟路径
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    //自动补全的扩展名
    extensions: ['.js', '.vue', '.json'],
    //路径别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        //审查js和vue文件
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // {
      //   test: /\.css$/,
      //   loader: "style!css"
      // },
      // {
      //   test: /\.css$/,
      //   // include: [
      //   //   /src/,//表示在src目录下的css需要编译  
      //   //   '/node_modules/element-ui/lib/'   //增加此项  
      //   // ],
      //   loader: 'style-loader!css-loader'
      // },
      // {
      //   test: /\\\\\\\\.(eot|woff|woff2|ttf)([\\\\\\\\?]?.*)$/,
      //   loader: "file"
      // },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

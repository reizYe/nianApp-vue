//版本检测，检测NPM NODE
require('./check-versions')()

//配置文件
var config = require('../config')
// node 环境无法判断当前是DEV或者PRD环境，默认使用 config/dev.env.js
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
//打开浏览器跳转到指定页面，一个插件
var opn = require('opn')
//使用nodejs自带的文件路径工具
var path = require('path')
//使用nodejs的框架 express

var express = require('express')
//使用webpack工具

var webpack = require('webpack')
//使用代理中间件

var proxyMiddleware = require('http-proxy-middleware')
//测试环境使用的配置和生产环境一样
//开发环境
var webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production') ?
  require('./webpack.prod.conf') :
  require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
//端口号为命令行输入的port参数或者配置文件中的默认值
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
//配置文件是否自动打开默认浏览器
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
//配置文件http代理配置
var proxyTable = config.dev.proxyTable
//启动express服务
var app = express()

var appdata = require('../data.json');
var home = appdata.home_data;
var menu = appdata.menu_data;
var searchmore = appdata.searchmore_data;
var searchnew = appdata.searchnew_data;
var messagefocus = appdata.messagefocus_data;
var search = appdata.search_data;
var menuactive = appdata.menuactive_data;


var apiroutes = express.Router();
apiroutes.get('/home', function (req, res) {
  res.json({
    errno: 0,
    data: home
  });
});
apiroutes.get('/menu', function (req, res) {
  res.json({
    errno: 0,
    data: menu
  });
});
apiroutes.get('/searchmore', function (req, res) {
  res.json({
    errno: 0,
    data: searchmore
  });
});
apiroutes.post('/searchnew', function (req, res) {
  res.json({
    errno: 0,
    data: searchnew
  });
});
apiroutes.get('/messagefocus', function (req, res) {
  res.json({
    errno: 0,
    data: messagefocus
  });
});
apiroutes.get('/search', function (req, res) {
  res.json({
    errno: 0,
    data: search
  });
});
apiroutes.get('/menuactive', function (req, res) {
  res.json({
    errno: 0,
    data: menuactive
  });
});
app.use('/api', apiroutes);

//启动webpack编译
var compiler = webpack(webpackConfig)

//将编译的文件暂存到内存
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  //公共路径和webpack的公共路径一样
  publicPath: webpackConfig.output.publicPath,
  //不打印
  quiet: true
})
//热重载插件
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
//当template 更改之后，刷新浏览器
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({
      action: 'reload'
    })
    cb()
  })
})

// proxy api requests
//将proxytable中的请求配置挂载到启动的express服务器上
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  //如果options 的数据类型为字符串，则表示只设置了URL
  //需要将URL设置为对象中的target的值
  if (typeof options === 'string') {
    options = {
      target: options
    }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
//使用connect-history-api-fallback匹配资源，如果不匹配就可以重定向到指定地址
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
//将暂存到内存中的webpack编译后的文件挂载到express服务器上
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
//将热重载挂到服务器上
app.use(hotMiddleware)

// serve pure static assets
//拼接static文件夹的静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})
//编译成功后打印网站信息
console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  //如果配置了自动打开浏览器，且不是测试环境，则自动打开浏览器并跳到我们的开发地址
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}

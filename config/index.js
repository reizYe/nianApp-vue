// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  //production 生产环境
  build: {
    //构建环境
    env: require('./prod.env'),
    //构建输出的index文件
    index: path.resolve(__dirname, '../dist/index.html'),
    //构建输出的静态资源路径
    assetsRoot: path.resolve(__dirname, '../dist'),
    //构建输出的二级目录
    assetsSubDirectory: 'static',
    //构建发布的根目录，可配置为资源服务器域名或CDN域名
    assetsPublicPath: '/',
    //是否开启csssourcemap
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    //默认关闭gzip，因为很多流行的静态资源主机，已经为所有静态资源开启
    productionGzip: false,
    //需要使用gzip压缩的文件扩展名
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    //运行build命令行加上一个参数，可以在构建完成后查看包分析报告，true为开启
    bundleAnalyzerReport: process.env.npm_config_report
  },
    //dev开发环境
  dev: {
    //构建环境
    env: require('./dev.env'),
    //端口号
    port: 8088,
    //是否自动打开浏览器
    autoOpenBrowser: true,
    //编译发布目录
    assetsSubDirectory: 'static',
    //编译发布的根目录，可配置为资源服务器域名或CDN域名
    assetsPublicPath: '/',
    //代理的接口，可以跨域
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}

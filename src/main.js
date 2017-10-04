// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Router from 'vue-router'
import '../src/assets/common/iconfont.css'
import '../src/assets/css/reset.css'
import home from './components/home/home.vue'
import menu from './components/menu/menu.vue'
import adds from './components/adds/adds.vue'
import message from './components/message/message.vue'
import search from './components/search/search.vue'
// Vue.config.productionTip = false
// import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
Vue.use(Router)
// Vue.use(Element)
/* eslint-disable no-new */
// let app = Vue.extend(App)
// let vuerouter = new Router()
// vuerouter.map({
//   '/basic': {
//     component: basic
//   }
// })
const routes = [
// 配置默认路由*
  { path: '*', component: home },
  { path: '/menu', component: menu },
  { path: '/adds', component: adds },
  { path: '/message', component: message },
  { path: '/search', component: search }
]
const router = new Router({
  routes
})
// const app = new Vue({
//   el: '#app',
//   components: {
//     'home': home
//   }
// })
// const app = new Vue({
//   router
// }).$mount('#app')

new Vue({
  el: '#app',  /* 定义作用范围就是index.html里的id为app的范围内 */
  router,    /* 引入路由 */
  template: '<App/>',   /* 给Vue实例初始一个App组件作为template 相当于默认组件 */
  components: { App }  /* 注册引入的组件App.vue */
})

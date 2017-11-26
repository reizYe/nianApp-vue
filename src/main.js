// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Router from 'vue-router'
// import '../src/assets/common/iconfont.css'
import '../src/assets/css/reset.css'
import home from './components/home/home.vue'
import collect from './components/home/collect.vue'
import daily from './components/home/daily.vue'
import money from './components/home/money.vue'
import setting from './components/home/setting.vue'
import menu from './components/menu/menu.vue'
import adds from './components/adds/adds.vue'
import message from './components/message/message.vue'
import search from './components/search/search.vue'
import menuactive from './components/menu/menuactive.vue'
import recommond from './components/search/recommond.vue'
import newlist from './components/search/newlist.vue'
import messagefocus from './components/message/messagefocus.vue'
import axios from 'axios'
Vue.config.productionTip = false
import Element from 'element-ui'
require('../src/assets/common/iconfont.css')
require('../src/assets/css/reset.css')
// import vuesource from 'vue-resource'
// import 'element-ui/lib/theme-default/index.css'
Vue.use(Router)
Vue.use(Element)
Vue.prototype.$axios = axios
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
  {
    path: '/home',
    component: home,
    children: [
      {
        name: 'curId', path: '/home/money/:id', component: money
      }
    ]
  },
  { path: '/menu', component: menu },
  { path: '/home/collect', component: collect },
  { path: '/home/daily', component: daily },
  { path: '/home/setting', component: setting },
  { path: '/adds', component: adds },
  { path: '/message', component: message },
  { path: '/search', component: search },
  { path: '/search/newlist', component: newlist },
  { path: '/search/recommond', component: recommond },
  { path: '/menu/menuactive', component: menuactive },
  { path: '/messagefocus', component: messagefocus }
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

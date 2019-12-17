// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/global.css'
Vue.config.productionTip = false
//axios安装
import axios from 'axios';
Vue.prototype.$axios = axios;
//vuex全局引用
import store from './store'
Vue.use(store)
//解决报错的vue-router报错的问题
import VueRouter from 'vue-router';
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

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
//引入jq
import $ from 'jquery'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

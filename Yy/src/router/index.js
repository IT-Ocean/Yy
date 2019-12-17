import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import reset from '@/components/reset'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '/',  name: 'login', component: login },
    { path: '/index',  name: 'index', component: index ,children:[
        {path:'/index/reset',name:'reset',component:reset},
        {path:'/index/user',name:'user',component:user},
      ]},
  ]
})

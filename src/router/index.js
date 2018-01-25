import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/list'
import History from '@/components/history'
import kefu from '@/components/kefu'
import shensu from '@/components/shensu'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/list',
    	name:'list',
    	component:List
    },
    {
    	path:'/history',
    	name:'history',
    	component:History
    },
    {
    	path:'/kefu',
    	name:'kefu',
    	component:kefu
    },
    {
    	path:'/user',
    	name:'User',
    	component:User
    },
    {
    	path:'/shensu',
    	name:'shensu',
    	component:shensu
    }
  ]
})

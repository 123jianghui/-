import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/list'
import History from '@/components/history'

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
    }
  ]
})

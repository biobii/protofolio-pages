import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Detail from '@/components/Detail'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work/:slug',
      name: 'Detail',
      component: Detail
    },
    {
      path: '*',
      name: 'Not Found',
      component: NotFound
    }
  ]
})

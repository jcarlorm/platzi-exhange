import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Index'
import About from '@/views/About/Index'
import ErrorPage from '@/views/Error/Index'
import CoinDetail from '@/views/CoinDetail/Index'

Vue.use(Router)

const routes = {
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: 'error',
      component: ErrorPage
    },
    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: CoinDetail
    }
  ]
}

export default new Router(routes)

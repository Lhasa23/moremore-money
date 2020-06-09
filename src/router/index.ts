import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path: '/',
      redirect: '/account'
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('@/views/Account.vue')
    },
    {
      path: '/labels',
      name: 'labels',
      component: () => import('@/views/Labels.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('@/views/Statistics.vue')
    },
    {
      path: '/edit-labels/:name',
      name: 'edit-labels',
      component: () => import('@/views/EditLabels.vue')
    },
    {
      path: '*',
      component: NotFound
    }
]

const router = new VueRouter({
  routes
})

export default router

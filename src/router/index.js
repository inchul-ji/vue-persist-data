import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../pages/Main.vue')
    },
    {
      path: '/product',
      component: () => import('../pages/Product.vue'),
    },
    {
      path: '/product/defaultInfo',
      component: () => import('../pages/ProdDefaultInfo.vue')
    },
    {
      path: '/product/priceInfo',
      component: () => import('../pages/ProdPriceInfo.vue')
    },
    {
      path: '/product/addInfo',
      component: () => import('../pages/ProdAddInfo.vue')
    },
    {
      path: '/product/final',
      component: () => import('../pages/FinalPage.vue')
    },
  ]
})

export default router;
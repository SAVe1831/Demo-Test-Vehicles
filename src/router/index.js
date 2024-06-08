import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/pages/Profile.vue')
    },
    {
        path: '/vechicles',
        name: 'vechicles',
        component: () => import('@/pages/Vechicles.vue')
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('@/pages/Setting.vue')
    }
    
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/basics', name: 'basics', component: () => import('@/views/BasicsView.vue') },
    { path: '/weather', name: 'weather', component: () => import('@/views/WeatherView.vue') },
  ],
})

export default router

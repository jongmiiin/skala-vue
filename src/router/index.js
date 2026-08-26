import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/basic', name: 'basic', component: () => import('@/views/BasicView.vue') },
    {
      path: '/composition',
      name: 'composition',
      component: () => import('@/views/CompositionView.vue'),
    },
    { path: '/component', name: 'component', component: () => import('@/views/ComponentView.vue') },
    { path: '/weather', name: 'weather', component: () => import('@/views/WeatherView.vue') },
  ],
})

export default router

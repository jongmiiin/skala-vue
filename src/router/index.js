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
    { path: '/library', name: 'library', component: () => import('@/views/LibraryView.vue') },
    {
      path: '/weather/task1',
      name: 'weather-task1',
      component: () => import('@/views/weather/WeatherTask1.vue'),
    },
    {
      path: '/weather/task2',
      name: 'weather-task2',
      component: () => import('@/views/weather/WeatherTask2.vue'),
    },
    {
      path: '/weather/task3',
      name: 'weather-task3',
      component: () => import('@/views/weather/WeatherTask3.vue'),
    },
  ],
})

export default router

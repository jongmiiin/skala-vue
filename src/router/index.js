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
    {
      path: '/weather/task4',
      name: 'weather-task4',
      component: () => import('@/views/weather/WeatherTask4.vue'),
      redirect: { name: 'weather-task4-home' },
      children: [
        {
          path: '',
          name: 'weather-task4-home',
          component: () => import('@/views/weather/WeatherTask4HomeView.vue'),
        },
        {
          path: ':cityId',
          name: 'weather-task4-detail',
          component: () => import('@/views/weather/WeatherTask4DetailView.vue'),
        },
        {
          path: 'about',
          name: 'weather-task4-about',
          component: () => import('@/views/weather/WeatherTask4AboutView.vue'),
        },
      ],
    },
    {
      path: '/weather/task5',
      name: 'weather-task5',
      component: () => import('@/views/weather/WeatherTask5.vue'),
      redirect: { name: 'weather-task5-home' },
      children: [
        {
          path: '',
          name: 'weather-task5-home',
          component: () => import('@/views/weather/WeatherTask5HomeView.vue'),
        },
        {
          path: ':cityId',
          name: 'weather-task5-detail',
          component: () => import('@/views/weather/WeatherTask5DetailView.vue'),
        },
        {
          path: 'about',
          name: 'weather-task5-about',
          component: () => import('@/views/weather/WeatherTask5AboutView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router

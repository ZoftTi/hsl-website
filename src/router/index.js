import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('../views/Education.vue')
  },
  {
    path: '/cooperation',
    name: 'Cooperation',
    component: () => import('../views/Cooperation.vue')
  },
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: () => import('../views/Dynamic.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/colleges',
    name: 'Colleges',
    component: () => import('../views/Cooperation/Colleges.vue')
  },
  {
    path: '/enterprise',
    name: 'Enterprise',
    component: () => import('../views/Cooperation/Enterprise.vue')
  },
  {
    path: '/:category/article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/component',
    name: 'component',
    component: () => import('../views/ComponentView.vue'),
    children: [{
      path: 'table',
      component: () => import('../views/TableView.vue'),
    }, {
      path: 'form',
      component: () => import('../views/FormView.vue'),
    },
    {
      path: 'container',
      component: () => import('../views/ContainerView.vue'),
    },]
  },
  {
    path: '/container',
    name: 'container',
    component: () => import('../views/ContainerView.vue'),

  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import('../views/NavView.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

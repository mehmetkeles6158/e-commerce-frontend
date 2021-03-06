import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import ProductsIndex from '../views/ProductsIndex.vue'
import ProductsNew from '../views/ProductsNew.vue'
import ProductsShow from '../views/ProductsShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'products-index',
    component: ProductsIndex
  },
  {
    path: '/products/new',
    name: 'products-new',
    component: ProductsNew
  },
  {
    path: '/products/:id',
    name: 'products-show',
    component: ProductsShow
  },
  {
    path: '/Signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

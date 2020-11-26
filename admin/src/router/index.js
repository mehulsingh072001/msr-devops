import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Analytics from '../views/Analytics.vue'
import Customers from '../views/Customers.vue'
import Blog from '../views/Blog.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/customers',
    name: 'customers',
    component: Customers,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: Analytics,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.isLoggedIn) {
        next({
            name: 'login'
        })
      } else {
        next()
      }
    }
    if (to.matched.some(record => record.meta.requiresAdmin)) {
      // this route requires auth, check if logged in
      // if not, redirect to home page.
      if (store.getters.isLoggedIn) {
        next({
            name: 'dashboard'
        })
      } else {
        next()
      }
    }  
     else {
      next() // make sure to always call next()!
    }
})


export default router

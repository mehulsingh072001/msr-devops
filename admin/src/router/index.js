import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Secure from '../components/Secure.vue'
import Register from '../components/Register.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/secure',
    name: 'secure',
    component: Secure,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  }
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

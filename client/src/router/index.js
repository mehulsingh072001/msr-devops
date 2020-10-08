import Router from 'vue-router';
import Vue from 'vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
}
)



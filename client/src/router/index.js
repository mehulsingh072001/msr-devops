import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
//import Info from '../views/Info.vue'
import Blog from '../views/Blog.vue'
import PostDetail from '../views/PostDetail.vue'

const routes = [
  {
    path: '/',
    name: 'blog',
    component: Blog
  },
  {
    path: '/post/:title',
    name: 'post_detail',
    component: PostDetail
  },
//  {
//    path: '/blog',
//    name: 'Blog',
//    component: Blog
//  },
//  {
//    path: '/private',
//    name: 'Info',
//    component: Info
//  },
//  {
//    path: '/about',
//    name: 'About',
//    // route level code-splitting
//    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import Vue from 'vue'
import auth from './modules/auth'
import posts from './modules/posts'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    posts
  }
})

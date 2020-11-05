import { createStore } from 'vuex'
import posts from './modules/posts'
import headForm from './modules/headForm'

export default createStore({
  modules: {
    posts,
    headForm
  }
})

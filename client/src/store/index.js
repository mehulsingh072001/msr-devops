import { createStore } from 'vuex'
import posts from './modules/posts'
import headForm from './modules/headForm'
import contact from './modules/contact'

export default createStore({
  modules: {
    posts,
    headForm,
    contact
  }
})

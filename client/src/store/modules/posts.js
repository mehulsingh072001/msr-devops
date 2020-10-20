import axios from 'axios'

const state = {
  posts: []
}

const getters = {
  allPosts: (state) => state.posts
}

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get('http://localhost:5000/api/blog');
    commit('setPosts', response.data);
  }
}

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
}

export default {
  state,
  getters,
  actions,
  mutations
}

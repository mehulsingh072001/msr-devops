import axios from 'axios'

const state = {
  posts: [],
}

const getters = {
  allPosts: (state) => state.posts
}

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get('http://192.168.43.227:5000/api/blog');
    commit('setPosts', response.data);
  },
  async fetchCats({ commit }, e) {
    const category = e.target.options[e.target.options.selectedIndex].innerText;
    const response = await axios.get(`http://192.168.43.227:5000/api/blog/${category}`);
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

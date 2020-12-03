import axios from 'axios'

const state = {
  posts: [],
}

const getters = {
  allPosts: (state) => state.posts,
  singlePosts: (state) => (state.posts)
}

const actions = {
  async fetchPosts({ commit }) {
    const response = await axios.get('http://192.168.43.161/api/blog');
    commit('setPosts', response.data);
  },
  async fetchPost({ commit }, id) {
    const response = await axios.get(`http://192.168.43.161/api/blog/post/${id}/`);
    commit('singlePosts', response.data);
  },
  async fetchCats({ commit }, e) {
    const category = e.target.options[e.target.options.selectedIndex].value;
    const response = await axios.get(`http://192.168.43.161/api/blog/${category}`);
    commit('setPosts', response.data);
  }
}

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  singlePosts: (state, posts) => (state.posts = posts)
}

export default {
  state,
  getters,
  actions,
  mutations
}

import axios from 'axios';

const state = {
  posts: [],
}
const actions = {
  async addPost({ commit }, title, content, category, image) {
    const response = await axios.post('http://localhost:5000/api/blog/', {title, content, category, image, completed: false})
    commit('newPost', response.data);
  },
}

const mutations = {
  addPost: (state, post) => state.posts.unshift(post)
};

export default {
  state,
  actions,
  mutations
}

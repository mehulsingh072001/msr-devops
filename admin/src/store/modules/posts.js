import axios from 'axios';

const state = {
  posts: [],
  image: []
}
const actions = {
  async addPost({ commit }, title, content, category) {
    const response = await axios.post('/api/blog', {title, content, category, completed: false})
    commit('newPost', response.data);
  },
  async addImage({ commit }, image){
    const response = await axios.post('/upload', {image, completed: false})
    commit('newImage', response.data);
  }
}

const mutations = {
  newPost: (state, post) => state.posts.unshift(post)
};

export default {
  state,
  actions,
  mutations
}

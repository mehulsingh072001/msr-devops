import axios from 'axios'

const state = {
  status: '',
  token: localStorage.getItem('token') || '',
  user: {}
}
const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status
}
const actions = {
  async addPost({ commit }, title, content, category, image) {
    const token = localStorage.getItem('token')
    const response = await axios.post('http://localhost:5000/api/blog/',  {headers: { "auth-token": token}}, {title, content, category, image, completed: false})
    commit('newPost',  response.data);
  },
  login({commit}, user){
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({url: 'http://192.168.43.161/api/user/login', data: user, method: 'POST'})
      .then(resp => {
        const token = resp.data
        console.log(`this is ${token}`)
        const user = resp.data.user
        localStorage.setItem('token', token)
        console.log(resp)
        commit('auth_success', token, user)
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error')
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },

  register({commit}, user){
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({url: 'http://192.168.43.161/api/user/register', data: user, method: 'POST' })
      .then(resp => {
        const token = resp.data.token
        const user = resp.data.user
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token, user)
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error', err)
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },

  logout({commit}){
    return new Promise((resolve) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    })
  }
}
const mutations = {
  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state, token, user){
    state.status = 'success'
    state.token = token
    state.user = user
  },
  auth_error(state){
    state.status = 'error'
  },
  logout(state){
    state.status = ''
    state.token = ''
  },
  addPost: (state, token, post) => {
    state.posts.unshift(post) 
    state.token = token
  }
}

export default{
  state, actions, mutations, getters
}

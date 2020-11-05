import axios from 'axios';

const state = {
  mail: []
}

const actions = {
  async fillForm({ commit }, {name, email}){
    const response = await axios.post('http://localhost:5000/api/info', {name, email, completed: false })
    commit('newFill', response.data)
  }
}

const mutations = {
  newFill: (state, mail) => state.mail.unshift(mail)
}

export default {
  state,
  actions, 
  mutations
}

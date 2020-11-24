import axios from 'axios';

const state = {
  appointment: []
}

const actions = {
  async fillForm({commit}, {name, email, message, phone, slot_date, slot_time}){
    const response = await axios.post('http://192.168.43.161/api/appointmentCreate', {name, email, message, phone, slot_date, slot_time})
    commit('newFill', response.data)
  }
}

const mutations = {
  newFill: (state, appointment) => state.appointment.unshift(appointment)
}

export default{
  state, 
  actions,
  mutations
}

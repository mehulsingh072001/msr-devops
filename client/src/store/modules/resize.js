const state ={
    width: 0,
}

const getters = {
  currentWidth: (state) => (state.width = window.innerWidth)
}
const actions = {
  resizeEvent({commit}){
    window.addEventListener('resize', this.handleResize);
    commit('newSize')
  },
}
const mutations = {
  newSize: (state) => (state.width = window.innerWidth) 
}

export default {
  state,
  getters,
  actions,
  mutations
}


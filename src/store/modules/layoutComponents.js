import * as types from '../mutation-types'

// initial state
const state = {
  domCount: 1
}

// getters
const getters = {
  domCount: state => state.domCount
}

// actions
const actions = {
  addDomCount ({ commit }) {
    commit(types.GET_DOM_COUNT)
  }
}

// mutations
const mutations = {
  [types.GET_DOM_COUNT] (state) {
    state.domCount++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

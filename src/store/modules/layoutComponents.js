import * as types from '../mutation-types'

// initial state
const state = {
  singleColumnCount: 1,
  doubleColumnCount: 1,
  triplexColumnCount: 1
}

// getters
const getters = {
  singleColumnCount: state => state.singleColumnCount,
  doubleColumnCount: state => state.doubleColumnCount,
  triplexColumnCount: state => state.triplexColumnCount
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
    state.singleColumnCount++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

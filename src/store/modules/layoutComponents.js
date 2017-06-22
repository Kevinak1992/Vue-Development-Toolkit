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
  addDomCount ({ commit }, dropDomId) {
    commit(types.GET_DOM_COUNT, { dropDomId })
  }
}

// mutations
const mutations = {
  [types.GET_DOM_COUNT] (state, { dropDomId }) {
    if (dropDomId === 'single-column') {
      state.singleColumnCount++
    } else if (dropDomId === 'double-column') {
      state.doubleColumnCount++
    } else if (dropDomId === 'triplex-column') {
      state.triplexColumnCount++
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

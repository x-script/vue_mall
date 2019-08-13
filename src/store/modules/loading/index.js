import * as type from './mutations_types'

export default {
  namespaced: true,
  state: {
    loadingState: false
  },
  getters: {
    loadingState(state) {
      return state.loadingState
    }
  }, 
  mutations: {
    [type.LOADING](state, boolean) {
      state.loadingState = boolean
    }
  },
  actions: {
    loading({conmit}, boolean) {
      conmit(type.LOADING, boolean)
    }
  }
}
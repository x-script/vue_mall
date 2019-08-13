import * as type from './mutations_types'
import { signin } from '@/api'

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    userData: JSON.parse(localStorage.getItem('userData')) || {}
  },
  getters: {
    token(state) {
      return state.token
    },
    user(state) {
      console.log('state', state);
      return state.userData
    }
  }, 
  mutations: {
    [type.SIGNIN](state, data) {
      let userData = data.data;

      state.token = userData.token;
      state.userData = userData;

      localStorage.setItem('token', userData.token)
      localStorage.setItem('userData', JSON.stringify(userData))
    }
  },
  actions: {
    async signin({conmit}, username, password) {
      let res = await signin({
        username: username,
        password: password
      })

      conmit(type.SIGNIN, res)
    }
  }
}
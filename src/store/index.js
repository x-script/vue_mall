import Vue from 'vue'
import Vuex from 'vuex'
import signin from './modules/signin'
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    signin, loading
  }
})
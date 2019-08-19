import Vue from 'vue'
import Vuex from 'vuex'



import mutations from './mutation'
import actions from './action'
import getters from './getter'
import state from './state'



Vue.use(Vuex)  //使用中间键

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  state
})
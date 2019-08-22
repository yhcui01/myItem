import Vue from 'vue'
import Vuex from 'vuex'



import mutations from './mutation'
import actions from './action'
import getters from './getter'


import home from './module/home'
import category from './module/category'
import general from './module/general'
Vue.use(Vuex)  //使用中间键

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules:{
    home,
    category,
    general

  }
})
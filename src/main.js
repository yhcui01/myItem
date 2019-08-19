import Vue from 'vue'
import App from './App.vue'


import store from './store/store'
import router from './router'
import Header from './componentsFrist/header'
Vue.config.productionTip = false
Vue.component('Header',Header)

new Vue({
  render: h => h(App),
  router,
  store  //配置vuex
  //
}).$mount('#app')

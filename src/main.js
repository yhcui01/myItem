import Vue from 'vue'
import App from './App.vue'



import router from './router'
import Header from './componentsFrist/header'
Vue.config.productionTip = false
Vue.component('Header',Header)

new Vue({
  render: h => h(App),
  router
  //
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'


import loading from '../static/images/20190115230642_augmr.gif'
import store from './store/store'
import router from './router'
import Header from './componentsFrist/header'
import '../validate'
Vue.config.productionTip = false
Vue.use(VueLazyload,{
  loading
})
Vue.component('Header',Header)
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store  //配置vuex
}).$mount('#app')

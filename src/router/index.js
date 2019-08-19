import Vue from 'vue'
import VueRouter from 'vue-router'



import routes from './routes'

//声明使用插件
Vue.use(VueRouter)

const router = new VueRouter({
  //mode 确定有没有  # hash
  mode:'history',
  routes
})
export default router
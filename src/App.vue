<template>
  <div id="app" ref='app'>
  
    <!-- 头部 -->

    <router-view></router-view>
    <Footer v-if="!$route.meta.noneFooter"/>
    
    <!-- 底部 -->
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState,mapMutations } from 'vuex'

import { reqToken } from  './api'
import Footer from './componentsFrist/footer'
import './mokeData/moke'
  export default {

components:{
      Footer,

    },
     mounted(){
        reqToken()
        this.$store.dispatch('testCb')
        this.$store.dispatch('getHomeData');
        this.$store.dispatch('getCartgory');
        this.$store.dispatch('getTabs');
        this.$store.commit('oneHeight',this.$refs.app.clientHeight)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    padding-top 2.2rem 
    background-color white
    width 100%
    height: 100%;
    box-sizing: border-box
 
</style>

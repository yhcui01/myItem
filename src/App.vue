<template>
  <div id="app">
    <Header/>
    <!-- 头部 -->

    <router-view></router-view>
    
    <!-- 底部 -->
    <Footer v-if="!$route.meta.noneFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
//import {  } from 'vuex'


import Footer from './componentsFrist/footer'
import './mokeData/moke'
  export default {

components:{
      Footer,

    },
    mounted(){
        this.$store.dispatch('getHomeData')
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

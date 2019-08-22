<template>
    <div>
    <div id="entity" ref="container"  >
          <Nav v-if="navList.length>0" :Data="navList"/>
          <!-- <Adress v-if="tabList.length > 0" :Data="tabList" /> -->
            
          <router-view></router-view>
    </div >
    </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
//在导航哪里获得所有参数 用params 传过来如果我 不在这里获取 在它本身获取  先 for 在if  报错！！！

import Nav from '../../componentsThirdly/nav'
import Adress from '../../componentsThirdly/adress'
  export default {
      computed:{
        ...mapState({
          navList:state=>state.general.navList,
  
      })
    },

    components:{
      Nav,
      Adress
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #entity
      width 100%
      padding 0.5rem
      box-sizing border-box
 
</style>

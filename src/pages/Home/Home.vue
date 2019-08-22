<template>
    <div class="content">
    <Header> </Header>
    <Nav  :Data="homeData.homeNav"/>
    <Tab :Data="homeData.homeTab"/>
    <Assure :Data="homeData.policyDescList"/>
    <Shop :Data="homeData.kingKongModule"/>
    <Three/>
    <Four/>
    <Ten/>
    <Recmmend/>
    <Advertising v-for="(e,i) in homeData.homeMinTab" :key="i" :Data="homeData.homeMinTab[i]" />
    <FooterNav />
    </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
//homeMinTab



import Ten from '../../componentsFrist/ten'
import Nav from '../../componentsFrist/nav'
import Assure from '../../componentsFrist/assure'
import Tab from '../../componentsFrist/tab' 
import Shop from '../../componentsFrist/shop'
import Three from '../../componentsFrist/threebox'
import Four from '../../componentsFrist/fourbox'
import Recmmend from '../../componentsFrist/recmmend'
import Advertising from '../../componentsFrist/advertsing'
import FooterNav from '../../componentsFrist/footerNav'
  export default {
    data(){
        return{
          counter :1
        }
    },
    computed:{
      ...mapState({
        homeData:state=> state.home.homeData
      })
    },
    mounted(){
    },
    components:{
      Nav,
      Assure,
      Tab,
      Shop,
      Three,
      Ten,
      Recmmend,
      Four ,
      Advertising, 
      FooterNav  
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>

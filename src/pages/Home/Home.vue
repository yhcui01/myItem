<template>
    <div class="content">
    <Nav/>
    <Tab/>
    <Assure/>
    <Shop/>
    <Three/>
    <Four/>
    <Ten/>
    <Recmmend/>
    <Advertising/>
    <FooterNav />
    </div>
</template>

<script type="text/ecmascript-6">
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

<template>
    <div id="entity"   >
          <Nav/>
          <Adress/>
    </div >
</template>

<script type="text/ecmascript-6">
import Nav from '../../componentsThirdly/nav'
import Adress from '../../componentsThirdly/adress'
  export default {
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

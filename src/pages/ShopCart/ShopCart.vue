<template>
    <div id="shopcart"  >
        <Nav/>
        <Cart/> 
    </div>
</template>

<script type="text/ecmascript-6">
import Nav from '../../componentsFourth/nav'
import Cart from '../../componentsFourth/cart'
  export default {
    components:{
      Nav,
      Cart
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  #shopcart
    width 100%
    height 100%
 
</style>

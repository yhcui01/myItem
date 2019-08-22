<template>
    <div id="shopcart"  >
      <Header>
      <span slot="left" @click="$router.replace('/home')">前往主页</span>
      <h3 slot="middle">物品储存地</h3>
      <img class="iconImg2" slot="right" src="../../../static/images/img/易.png" alt="">
    </Header>
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

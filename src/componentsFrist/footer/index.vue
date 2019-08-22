<template>
 <div id="footer">
    <div class="footer_tabber ">
        <span class="footer_item" :class="{active:$route.path.indexOf('/home') != -1 }"  @click="$router.push('/home')"> 
            <img src="../../../static/images/img/家.png" alt="">
            <span>首页</span>
        </span>
        <span class="footer_item" :class="{active:$route.path .indexOf('/category') != -1 }"  @click="$router.push('/category')"> 
            <img src="../../../static/images/img/分类.png" alt="">
            <span>分类</span>
        </span> 
        <span class="footer_item" :class="{active:$route.path .indexOf('/goods') != -1 }"  @click="$router.replace('/goods')"> 
            <img src="../../../static/images/img/照片.png" alt="">
            <span>实物</span>
        </span> 
        <span class="footer_item"  :class="{active:$route.path .indexOf('/shopcart') != -1 }"  @click="$router.replace('/shopcart')"> 
            <img src="../../../static/images/img/购物车-23.png" alt="">
            <span>购物车</span>
        </span> 
        <span class="footer_item" :class="{active:$route.path .indexOf('/mside') != -1 }" @click="$router.replace('/mside')"> 
            <img src="../../../static/images/img/个人中心.png">
            <span>个人</span>
        </span> 
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
    
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

   #footer
    position fixed
    bottom 0
    left 0
    z-index 51
    height 1.5rem
    width 100%
    padding 0.4rem
    background white
    .footer_tabber
      display flex
      justify-content space-around
      .footer_item
        display flex
        flex-direction column
        width 2rem
        height 1.5rem
        align-items center
        &.active
          background #ff4400
        span
          font-size 0.5rem

</style>

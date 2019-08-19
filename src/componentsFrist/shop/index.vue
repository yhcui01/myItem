<template>
  <div class="frist_shop">
        <ul class="shop_list">
            <li class="shop_item" v-for="(e,i) in Data.kingKongList" :key="i">
                <img :src="e.picUrl" alt="">
                <span>{{e.text}}</span>
            </li>



        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:['Data']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

   .frist_shop  //商品
    width 100%
    .shop_list
      display flex
      flex-wrap wrap
      width 100%
      border-bottom 0.3rem solid #ccc
      .shop_item
        height 4rem
        width 16.6666%
        padding  1.6%
        display flex
        flex-direction column
        align-items center
        img
          height 3.4rem
          width 3.4rem
        span
          font-size 0.5rem
          text-align center
          line-height 0.6rem
          text-align center
</style>

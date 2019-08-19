<template>
<div class="footer_nav">
                <div class="footer_nav_container">
                        <div class="footer_nav_inner">
                            <span class="left">不经历风雨</span>
                            <span>怎么见彩虹</span>
                        </div>
                        <p>
                            <span class="pading_text">网易公司版权所有 © 1997 - 2019</span>
                        </p>
                        <p>
                                <span>食品经营许可证：JY13301080111719</span>
                        </p>
                </div>
        </div>
</template>

<script type="text/ecmascript-6">
  export default {
          props:['counter'],
          mounted(){
          }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

   .footer_nav
     height 7.5rem
     background pink
     box-sizing border-box
     display flex
     justify-content center
     .footer_nav_container
       padding 1.2rem 1.5rem
       font-size 0.3rem
       .footer_nav_inner
         margin-bottom 1rem
         font-size 0.5rem
         display flex
         justify-content space-between
         span
          display inline-block
          width 3.5rem
          height 1rem
          border 1px solid white
          border-radius 4px
          text-align center
          line-height 1rem
          font-size 0.5rem
          font-weight 700
          margin-left 2%
       p
        .pading_text
            padding-left 0.55rem




</style>

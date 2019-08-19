<template>
<div class="frist_newperson" id="tree">
        <h3>XXXX</h3>
        <div class="category">
            <div class="left">
                <h3>新人专享红包</h3>
                <img src="https://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
            </div>
            <div class="right">
                <div>
                    <h3>xxx</h3>
                    <div class="img">
                        <img src="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?imageView&thumbnail=200x200&quality=75" alt="">
                    </div>
                </div>

            </div>
            <div class="right">
                <div>
                    <h3>xxx</h3>
                    <div class="img">
                        <img src="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?imageView&thumbnail=200x200&quality=75" alt="">
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .frist_newperson  //新手礼包  公用
    box-sizing border-box
    padding 0.5rem
    height 10rem
    width 100%
    border-bottom 0.3rem solid #eee
    h3
      text-align center
      font-size 1rem
      font-weight 500
      line-height 1rem
     .left
       height 8rem
       background #F9E9CF
       float left
       box-sizing border-box
       width 50%
       border-right 0.1rem solid white
       h3
          font-size 1rem
          font-weight 500
          line-height 1rem
       img
         margin 1rem auto
         height 5rem
         width 5rem
      .right
        padding 0.2rem
        height 4rem
        background #FBE2D3
        float left
        box-sizing border-box
        width 50%
        &:nth-chlid(2n)
          border-bottom  0.1rem solid white
        h3
          float left
          font-size 1rem
          font-weight 500
          line-height 1rem
        img
          float right
          top 3rem
          height 3.5rem
          width 3.5rem
    .brand_header
      overflow hidden
      .left_text
        float left
       .right_text
         float right
 
</style>

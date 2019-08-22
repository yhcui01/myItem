<template>
 <div class="frist_newperson" id="four">
        <div class="brand_header">
            <span class="left_text">品牌制造商直供</span>
            <span class="right_text"> 更多></span>
        </div>
        <div class="category">
            <div class="right">
                <div>
                    <h3>海外制造</h3>
                    <div class="img">
                        <img src="https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                    </div>
                </div>

            </div>
                        <div class="right">
                <div>
                    <h3>ck制造</h3>
                    <div class="img">
                        <img src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                    </div>
                </div>

            </div>
            <div class="right">
                <div>
                    <h3>秀丽制造</h3>
                    <div class="img">
                        <img src="https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1" alt="">
                    </div>
                </div>

            </div>
            <div class="right">
                <div>
                    <h3>Armani制造</h3>
                    <div class="img">
                        <img src="https://yanxuan.nosdn.127.net/c9e14b08576b6a5e2bc3ef46e0e05d08.png?imageView&thumbnail=343y260&enlarge=1" alt="">
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
      font-size 0.3rem
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
          font-size 0.6rem
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

<template>
        <div class="product_container">
            <div class="big_item">
                <img src="https://yanxuan.nosdn.127.net/15656881495985348.jpg" alt="">
            </div>
            <ul class="product_list">
                <li class="small_item">
                    <img src="https://yanxuan.nosdn.127.net/15656881495985348.jpg" alt="">
                    <p class="text_ellipsis">6666666666666666666666666666666</p>
                    <div class="prise">
                        <span class="red_prise">￥16</span>
                        <span class="delete_text">￥10</span>
                    </div>
                </li>
                <li class="small_item">
                    <img src="https://yanxuan.nosdn.127.net/15656881495985348.jpg" alt="">
                    <p class="text_ellipsis">6666666666666666666666666666666</p>
                    <div class="prise">
                        <span class="red_prise">￥16</span>
                        <span class="delete_text">￥10</span>
                    </div>
                </li>
                <li class="small_item">
                    <img src="https://yanxuan.nosdn.127.net/15656881495985348.jpg" alt="">
                    <p class="text_ellipsis">6666666666666666666666666666666</p>
                    <div class="prise">
                        <span class="red_prise">￥16</span>
                        <span class="delete_text">￥10</span>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
      .product_container
        .big_item
          background wheat
          width 100%
          height 6rem
          img
            height 100%
            width 100%
        .product_list
          justify-content: space-between
          background wheat
          display flex
          .small_item
              overflow hidden
              width 30%
              display flex
              flex-direction column
              align-items center
              img
               width 100%
               height 70%
              .text_ellipsis
                height 3rem
                font-size 0.3rem
                text-decoration none
                width 100%
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                text-align center
                box-sizing: border-box;
                margin: 0.1rem 0;
                padding: 0.2rem;
              .prise
                float left
                .red_prise
                  color red
                  font-size 0.8rem
                .delete_text
                  font-size 0.2rem
                  color #eee
                  text-decoration: line-through



 
</style>

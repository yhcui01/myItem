<template>
     <div class="first_tab">

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"> <img class="swiper_img"  src="https://yanxuan.nosdn.127.net/ce1d15526689060938a801161e724ebf.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
                <div class="swiper-slide"> <img class="swiper_img"  src="https://yanxuan.nosdn.127.net/ce1d15526689060938a801161e724ebf.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
                <div class="swiper-slide"> <img class="swiper_img" src="https://yanxuan.nosdn.127.net/ce1d15526689060938a801161e724ebf.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
        </div>
           <!-- <img src="https://yanxuan.nosdn.127.net/ce1d15526689060938a801161e724ebf.jpg?imageView&quality=75&thumbnail=750x0" alt="">-->


    </div>
</template>

<script type="text/ecmascript-6">
import Swiper from'swiper'
import 'swiper/dist/css/swiper.css'
  export default {
    mounted(){
      setTimeout(() => {
       new Swiper('.swiper-container', {
            loop: true, // 循环模式
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
 
      }, 100);
           }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .first_tab //轮播
    width 100%
    height 8rem
    overflow hidden
    .swiper_img
      height 100%
      width 100%
 
</style>

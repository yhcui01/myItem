<template>
<div class="frist_newperson" id="ten">
            <div class="brand_header">
                <span class="left_text">品牌xxxx</span>
                <span class="right_text"> 更多》</span>
            </div>
            <ul class="ten_top">
               <li class="ten_top_item">
                   <span>热销榜</span>
                   <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?imageView&quality=65&thumbnail=200x200"alt="">
               </li>
                <li class="ten_top_item">
                    <span>热销榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?imageView&quality=65&thumbnail=200x200"alt="">
                </li>
            </ul>
            <ul class="ten_middle">
                <li class="ten_small_item">
                    <span>居家生活榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
                </li>
                <li class="ten_small_item">
                    <span>居家生活榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
                </li>
                <li class="ten_small_item">
                    <span>居家生活榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
                </li>
                <li class="ten_small_item">
                    <span>居家生活榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
            </li>

            </ul>
            <ul class="ten_middle">
                <li class="ten_small_item">
                    <span>居家生活榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
                </li>
                <li class="ten_small_item">
                    <span>居家生活榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
                </li>
                <li class="ten_small_item">
                    <span>居家生活榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
                </li>
                <li class="ten_small_item">
                    <span>居家生活榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
                </li>

            </ul>

        </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../static/css/mixin.styl"
    #ten
      ul
        display flex
        justify-content space-around
        width 100%
        height 3rem
      .ten_top
        .ten_top_item
          box-sizing border-box
          background #a71d5d
          padding 0.3rem //公用0.5rem
          display flex
          align-items center
          width 48%
          img
            width 6rem
            height 4rem
          span
            font-size 0.7rem
            width 1.5rem
            white-space nowrap
            border-bottom 0.3rem solid green
      .ten_middle
          width 100%
          margin-top: 0.4rem
          li
            overflow hidden
            width 23%
            display flex
            flex-direction column
            justify-content center
            align-items center
            height 3rem
            box-sizing border-box
            background wheat
            span
              font-size 0.5rem
             img
              width 3.5rem
              height 2rem




</style>

<template>
        <div class="two_content_list" ref="list">
            <ul class="two_content_list_contaier">
            <li class="two_content_item active">
                推荐专区
            </li>
            <li class="two_content_item">推荐专区</li>
            <li class="two_content_item">推荐专区</li>
            <li class="two_content_item">推荐专区</li>
            <li class="two_content_item">推荐专区</li>
            <li class="two_content_item">推荐专区</li>
            <li class="two_content_item">推荐专区</li>
            <li class="two_content_item">推荐专区</li>
            <li class="two_content_item">推荐专区</li>
            <li class="two_content_item">推荐专区</li>
            <li class="two_content_item">推荐专区</li>
            <li class="two_content_item">推荐专区</li>
            </ul>
        </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
  export default {
    mounted(){
      let list = this.$refs.list
      let scroll = new Bscroll(list,{
        scrollY:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .two_content_list
      float left
      box-sizing border-box
      width 20%
      display flex
      flex-direction column
      height 50%
      overflow hidden
      .two_content_item
        font-size 0.6rem
        text-align center
        line-height 1.9rem
        height 1.6rem
        margin-bottom 0.2rem
        &.active
         color red
         border-left 0.2rem solid red
 
</style>

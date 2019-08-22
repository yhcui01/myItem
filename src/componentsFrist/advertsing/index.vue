<template>
<div class="first_advertising_content">
            <div class="frist_advertising">
                <img v-lazy="Data.bigImg" alt="">

            </div>
            <div class="frist_newperson recommend" id="_swiper1">
                <div class="recommend_bottom">
                    <div class="recommend_bottom_list_container" ref="list" >
                        <ul class="recommend_bottom_list">


                            <li class="recommend_bottom_item" v-for="(e,i) in Data.tabList" :key="i">
                                <div class="recommend_bottom_item_content">
                                    <img :src="e.url" alt="">
                                </div>
                                <div class="recommend_bottom_item_text">
                       <span>
                           {{e.text}}
                        </span>
                        
                                    <span class="red_prise" >
                                {{e.prise}}
                            </span>
                                </div>
                                <div class="red_prise_footer">
                                    <span v-if="e.redText">{{e.redText}}</span>
                                </div>
                            </li>
                            <!-- <li class="recommend_bottom_item">
                                <div class="recommend_bottom_item_content">
                                    <img src="https://yanxuan-item.nosdn.127.net/77aca51443b0e5e93c73621ffb70aae3.png?imageView&quality=65&thumbnail=330x330" alt="">
                                </div>
                                <div class="recommend_bottom_item_text">
                       <span>
                           风驰电掣 大运摩托
                            风驰电掣 大运摩托
                        </span>
                                    <span class="red_prise">
                                ￥199
                            </span>
                                </div>
                                <div class="red_prise_footer">
                                    <span>1件9折</span>
                                </div>
                            </li>
                            <li class="recommend_bottom_item">
                                <div class="recommend_bottom_item_content">
                                    <img src="https://yanxuan-item.nosdn.127.net/77aca51443b0e5e93c73621ffb70aae3.png?imageView&quality=65&thumbnail=330x330" alt="">
                                </div>
                                <div class="recommend_bottom_item_text">
                       <span>
                           风驰电掣 大运摩托
                            风驰电掣 大运摩托
                        </span>
                                    <span class="red_prise">
                                ￥199
                            </span>
                                </div>
                                <div class="red_prise_footer">
                                    <span>1件9折</span>
                                </div>
                            </li>
                            <li class="recommend_bottom_item">
                                <div class="recommend_bottom_item_content">
                                    <img src="https://yanxuan-item.nosdn.127.net/77aca51443b0e5e93c73621ffb70aae3.png?imageView&quality=65&thumbnail=330x330" alt="">
                                </div>
                                <div class="recommend_bottom_item_text">
                       <span>
                           风驰电掣 大运摩托
                            风驰电掣 大运摩托
                        </span>
                                    <span class="red_prise">
                                ￥199
                            </span>
                                </div>
                                <div class="red_prise_footer">
                                    <span>1件9折</span>
                                </div>
                            </li>
                            <li class="recommend_bottom_item">
                                <div class="recommend_bottom_item_content">
                                    <img src="https://yanxuan-item.nosdn.127.net/77aca51443b0e5e93c73621ffb70aae3.png?imageView&quality=65&thumbnail=330x330" alt="">
                                </div>
                                <div class="recommend_bottom_item_text">
                       <span>
                           风驰电掣 大运摩托
                            风驰电掣 大运摩托
                        </span>
                                    <span class="red_prise">
                                ￥199
                            </span>
                                </div>
                                <div class="red_prise_footer">
                                    <span>1件9折</span>
                                </div>
                            </li>
                            <li class="recommend_bottom_item">
                                <div class="recommend_bottom_item_content">
                                    <img src="https://yanxuan-item.nosdn.127.net/77aca51443b0e5e93c73621ffb70aae3.png?imageView&quality=65&thumbnail=330x330" alt="">
                                </div>
                                <div class="recommend_bottom_item_text">
                       <span>
                           风驰电掣 大运摩托
                            风驰电掣 大运摩托
                        </span>
                                    <span class="red_prise">
                                ￥199
                            </span>
                                </div>
                                <div class="red_prise_footer">
                                    <span>1件9折</span>
                                </div>
                            </li> -->
                        </ul>
                    </div>

                </div>
            </div>
        </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import 'swiper/dist/css/swiper.css'
  export default {
      props:['Data'],
      mounted(){        
         let list = this.$refs.list
            this.$nextTick(()=>{
              new Bscroll(list,{
              scrollX:true
              })
            })
      },
      watch:{
          Data(){
        let list = this.$refs.list
            this.$nextTick(()=>{
              new Bscroll(list,{
              scrollX:true
              })
            })
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../static/css/mixin.styl"
   .frist_advertising
      width 100%
      img
        width 100%
        height 100%
   #_swiper1
      height 7rem
      .recommend_bottom
        .recommend_bottom_list_container
           overflow: hidden
           width 100%
           .recommend_bottom_list
             width 200%
             .recommend_bottom_item
              width 13.9%
.recommend
  width 100%
  .recommend_top
    width 100%
    background darkkhaki
    height 4rem
    img
      display inline-block
      width 40%
      height 4rem
    .recommend_top_text
      height 100%
      display flex
      flex-direction column
      justify-content center
      width: 60%
      float right
      h4
        font-size 0.5rem
        font-weight 700
        white-space nowrap
        overflow:hidden;
        text-overflow:ellipsis
    .statement
      font-size 0.4rem
      color #eee
    .recommend_top_text_title
      height 0.5rem
      padding 0.1 rem
      background white
      text-align center
      line-height 0.3rem
      font-size 0.3rem
      width 2rem
      color red
      border 1px solid red
    .recommend_top_text_prise
      font-size 0.5rem
      color red
  .recommend_bottom
    height 5rem
    width 100%
    .recommend_bottom_list
      width 100%
      display  flex
      justify-content space-between
      margin-top 0.1rem
      .recommend_bottom_item
        width 30%
        display flex
        align-items center
        flex-direction column
        .recommend_bottom_item_content
          background wheat
          img
            width 100%
            height 3rem
        .recommend_bottom_item_text
          span
            font-size 0.3rem
            float left
          .red_prise
            color red
        .red_prise_footer
          width 100%
          height 1rem
          font-size 0.4rem
          span
            text-align center
            line-height 0.4rem
            color pink
            border 1px solid #000

 
</style>

<template>
<div class="frist_newperson" id="ten">
            <div class="brand_header">
                <span class="left_text">品牌xxxx</span>
                <span class="right_text"> 更多》</span>
            </div>
            <ul class="ten_top">
               <li class="ten_top_item">
                   <span>热销榜</span>
                   <img src="https://yanxuan.nosdn.127.net/6fd807743e8e25472aca8b6b0b8f3039.png?imageView&quality=65&thumbnail=200x200"alt="">
               </li>
                <li class="ten_top_item">
                    <span>热销榜</span>
                    <img src="https://yanxuan-item.nosdn.127.net/cd59ea89bb48cb8d88e30c39b75de6ad.png?imageView&quality=65&thumbnail=200x200"alt="">
                </li>
            </ul>
            <ul class="ten_middle">
                <li class="ten_small_item" v-for="(e,i) in  listTop || []" :key="i" >
                    <span>居家生活榜</span>
                    <img v-lazy="e" alt="">
                </li>


            </ul>
            <ul class="ten_middle">
                <li class="ten_small_item" v-for="(e,i) in  listBottom || []" :key="i">
                    <span>清洗大世界</span>
                    <img v-lazy="e" alt="">
                </li>

            </ul>

        </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
  export default {
      data(){
          return{
            //   listBottom:[],
            //   listTop:[]
          }
      },
        computed:{
          ...mapState({homeData:state=> state.home.homeData}),
          listTop(){
                if(this.homeData  && this.homeData.homeTab){
                    
                  return this.homeData.homeTab.slice(0,4) 
              }
                return []
          },
          listBottom(){
              if(this.homeData && this.homeData.homeTab){
                  return this.homeData.homeTab.slice(4,this.homeData.homeTab.length) 
              }
                return []
          }

  },
        mounted(){
            // this.listBottom = this.homeData.homeTab.slice(4,homeData.length) 
            // this.listTop = this.homeData.homeTab.slice(0,4) 
         
        }
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
          background pink
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

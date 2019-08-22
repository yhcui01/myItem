<template>
        <div class="two_content_right">
            <div>
                <img v-lazy="  url ? url :'https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196'" alt="">
            </div>
            <div class="product_list_container" ref='list' >
            <ul class="product_list" v-if ="currentArr" >

                <li class="product_item"  v-for="e in currentArr" :key = "e.id"  >
                    <!-- <h3>{{title}} </h3> -->
                    <img v-lazy="e.wapBannerUrl" alt="">
                    <span>{{e.name}}</span>
                </li>
               

            </ul>
            </div>
        </div>

</template>

<script type="text/ecmascript-6">
 import Bscroll from 'better-scroll'
 import { mapState } from 'vuex' 
  export default {
      data(){
          return {
          }
      },
    computed:{
        url(){
            return this.currentArr && this.currentArr[1] ? this.currentArr[0].bannerUrl : ''
        },
        ...mapState({currentArr:state=>{
            
        return state.category.currentArr
        
        }})    
      },
    mounted(){
        this.$nextTick(()=>{
                    let list = this.$refs.list
                    this.scrollY =  new Bscroll(list,{
                    scrollY:true
                         })
                         this.scrollY.refresh()    
        })
        this.$watch('currentArr',()=>{
                this.$nextTick(()=>{
                    if(!this.scrollY){
                        let list = this.$refs.list
                            this.scrollY =  new Bscroll(list,{
                            scrollY:true
                         })
                         this.scrollY.refresh()    
                    }
               
                })

        },{deep:true})
    },


    /**
     * 
     *     watch:{
      Data:{
        handler:(state,oldstate)=>{
          const list = this.$refs.list
        new Bscroll(list,{
          scrollY:true
        })
        },deep:true
      }
    }
     * 
     */
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
     .two_content_right
        overflow hidden
        float right
        width 80%
        height 100%
        .product_list_container
            height 70%
            overflow hidden
        img
          width 100%
          height 4rem
        .product_list
          display flex
          float left
          flex-wrap wrap
          .product_item
              display flex
              flex-direction column
              align-content center
              height 5rem
              width 30%
              font-size 0.3rem
              span
                 text-align center
                 line-height 0rem
                 color #9a6e3a
</style>

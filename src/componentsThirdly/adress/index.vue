<template>
    <div class=wrap ref="Height">
    <div class="product_container" ref= "list" v-for="(e,i) in Data  " :key="i">
            <div class="big_item">
                <img v-lazy="e.bigImg" alt="">
            </div>
            <ul class="product_list">
                <li class="small_item" v-for="(e,i) in e.tabList" :key = "i" >
                    <img v-lazy="e.url" alt="">
                    <p class="text_ellipsis">{{e.text}}</p>
                    <div class="prise">
                        <span class="red_prise">{{e.prise}}</span>
                        <span class="delete_text" v-if="e.oldPrise">{{e.oldPrise}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import { mapState } from 'vuex';

  export default {
    props:['Data'],
    data(){
        return{
            value:[],
        }
        },
        computed:{
          ...mapState({
              oneHeight:state=>state.general.oneHeight
          }),
          lazy(){
            //比例
            let wrap = document.querySelector('.wrap')
              return this.$refs.Height.clientHeight/this.oneHeight
          },
          scrollHeight(){
            //滚高
            return this.oneHeight/this.lazy
          },

        },
      mounted(){
        if(this.$route.path.indexOf("/goods/good") != -1){
        this.page = 0
        window.addEventListener('touchend',()=>{
          
          if( document.documentElement.scrollTop  > this.oneHeight-this.scrollHeight ){
              this.page++
              this.$store.dispatch('reqLazyPage',{page:this.page,size:4})
          }
        })
      }
        }
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
            margin-bottom 0.3rem
        .product_list
          justify-content: space-between
          background white
          display flex
          .small_item
              height: 5rem
              background pink
              overflow hidden
              width 30%
              display flex
              flex-direction column
              align-items center
              margin-bottom 1rem 
              img
               width 100%
               height 40%
              .text_ellipsis
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
                  font-size 0.5rem
                .delete_text
                  font-size 0.2rem
                  color #eee
                  text-decoration: line-through



 
</style>

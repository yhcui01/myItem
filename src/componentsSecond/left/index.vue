<template>
        <div class="two_content_list" ref="list">
            <ul class="two_content_list_contaier">
            <li class="two_content_item " :class="{active: i === index}" @click="activeIndex(i)" v-for="(e,i) in Data"  :key="i">
                {{e}}
            </li>
            </ul>
        </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'


  export default {
    props:['Data'],
    data(){
      return{
          index : 0
      }
    },
    mounted(){
      let list = this.$refs.list
      this.$store.dispatch('getIndexList',this.index)
      let scroll = new Bscroll(list,{
        scrollY:true,
        bounce: true, 
        pullUpLoad: true
      })
      scroll.on('pullingUp',()=>{
        scroll.finishPullUp()
      })
    },
    methods:{
      activeIndex(index){
          this.index = index
          this.$store.dispatch('getIndexList',index)
      }
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

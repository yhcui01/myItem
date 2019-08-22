<template>
 <header class="first_header">
        
        <slot name="left"><span @click="$router.back(1)">网易严选</span></slot>
      

        <slot name="middle">
          <input type="text" placeholder="搜索商品" @focus="openSearch('/search')"  v-model="searchValue">
          <img  class="img" src="../../../static/images/img/放大镜 (1).png" alt="">
          </slot>
           
        <slot name = "right">
          <button>搜索</button>
          </slot>  

    </header>
</template>

<script type="text/ecmascript-6">
import { searchCode } from '../../api'
  export default {
    data(){
      return {
          searchValue:'',
          list : [1,2,3,4]
      }
    },
          methods:{
      searchChange(){

      },
      openSearch(path){
        if(!(this.$route.path === path)){//!=
            this.$router.replace(path)
        }
      },
      
    },
    watch:{
        async searchValue(){
          let { list,searchValue } = this
          clearTimeout(this.setTimeoutId)
          this.setTimeoutId = setTimeout(async ()=>{
          list =  await searchCode(searchValue)
          this.$bus.$emit('searchMes',list)
          },200)
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .first_header //header
    position fixed
    top 0rem
    left 0rem
    display flex
    align-items: center;
    justify-content: center;
    z-index 51
    box-sizing border-box
    height 7%
    width 100%
    background-color pink
    padding 0.3rem
    span
      height 2rem
      width  20%
      font-size 60%
      line-height 2.1rem
    input
      width 50%
      outline none
      position relative
      height 1rem
      padding 0 0 0 12%
      border 1px solid #000

    button
      width 14%
      border 1px solid red
      height 1rem
      margin-left: 3%;
.img
  position absolute
  left 3.8rem
  top 0.65rem
h3
   width 50%
   height 1rem 
   padding 0 0 0 12%
   font-size 0.7rem 
.iconImg2
    width 5%   
    margin-left 3%
.iconImg3
    width 15%    
      </style>

<template>
 <header class="first_header">
        <span @click="$router.go(1)">网易严选</span>
        <input type="text" placeholder="搜索商品" @focus="$router.push('/search')" >
        <button>搜索</button>
        <img src="../../../static/images/img/放大镜 (1).png" alt="">
    </header>
</template>

<script type="text/ecmascript-6">
  export default {

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
      font-size 0.7rem
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
    img
      position absolute
      left 3.8rem
      top 0.65rem
      
      </style>

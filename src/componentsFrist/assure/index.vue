<template>
    <div class="first_assure">
        <span v-for="(e,i) in Data" :key="i">
            <img v-lazy="e.icon" alt="">{{e.desc}}
        </span>
        
    </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props:['Data'],
    mounted(){
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .first_assure //保障
    dispaly flex
    height 1.2rem
    width 100%
    background pink
    span
      white-space nowrap
      box-sizing border-box
      height 1rem
      width 33%
      font-size 0.6rem
      vertical-align middle
      line-height 0.6rem
      padding 0.3rem
      img
        width 0.6rem
        display inline-block
        vertical-align middle
 
</style>

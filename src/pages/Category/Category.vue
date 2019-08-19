<template>
    <!--.分类-->
    <div id="two_content"  >
      <Left/>
      <Right/>

    </div>


</template>

<script type="text/ecmascript-6">
import Left from '../../componentsSecond/left'
import Right from '../../componentsSecond/right'
  export default {
    components:{
      Left,Right
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #two_content
    box-sizing: border-box
    height: 100%
    padding-top 0.5rem
 
</style>

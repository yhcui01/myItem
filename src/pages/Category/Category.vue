<template>
    <!--.分类-->
    <div class="container">

     <Header>
        <span slot="left">分类列表</span>
     </Header>
    
    <div id="two_content"  >
      <Left v-if="list.length > 0" :Data = "list"/>
      <Right/>

    </div>
    </div>


</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'

import Left from '../../componentsSecond/left'
import Right from '../../componentsSecond/right'
  export default {
    computed:{
      ...mapState({
        list:state=> state.category.cartgoryLeft
      })
    }
    ,
    components:{
      Left,
      Right
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  height 100%
  #two_content
    box-sizing: border-box
    height: 100%
    padding-top 0.5rem
 
</style>

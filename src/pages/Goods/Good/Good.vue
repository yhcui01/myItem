<template>
  <div>
        <Header>
      <span slot="left" @click="$router.replace('/search')">详细搜索</span>
      <h3 slot="middle">点击分类选择商品~~</h3>
      <img class="iconImg2" slot="right" src="../../../../static/images/img/易.png" alt="">
    </Header>
          <Adress  v-if="page==1" :Data="$route.params.data"> </Adress>
          <Recmmend v-else-if="page ==2 || page == 4 "></Recmmend>
          <Threebox  v-else-if="page==3 || page == 5"> </Threebox>
           <Fourbox v-else></Fourbox>
  </div>
</template>

<script type="text/ecmascript-6">
import Adress from '../../../componentsThirdly/adress/index' 
import Threebox from '../../../componentsFrist/threebox'
import Ten from '../../../componentsFrist/ten'
import Fourbox from '../../../componentsFrist/fourbox'
import Recmmend from '../../../componentsFrist/recmmend'
  export default {
    data(){
      return {
      }
    },
    components:{
      Adress,
      Threebox,
      Fourbox,
      Recmmend
    },
    computed:{
      page(){
        return this.$route.params.id
      }
    },
    mounted(){
      console.log(this.$route)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>

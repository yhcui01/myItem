<template>
  <div>
        <Header>
      <span slot="left" @click="$router.replace('/search')">详细搜索</span>
      <h3 slot="middle">点击分类选择商品~~</h3>
      <img class="iconImg2" slot="right" src="../../../../static/images/img/易.png" alt="">
    </Header>
          <Adress  v-if="($route.params.page-0+5)%5==1" :Data="$route.params.data"> </Adress>
          <Recmmend v-else-if="true"></Recmmend>
          <Threebox  v-else-if="($route.params.page-0+5)%5 ==2"> </Threebox>
           <Fourbox v-else-if="($route.params.page-0+5)%5 ==4"></Fourbox>
  </div>
</template>

<script type="text/ecmascript-6">
import Adress from '../../../componentsThirdly/adress/index' 
import Threebox from '../../../componentsFrist/threebox'
import Ten from '../../../componentsFrist/ten'
import Fourbox from '../../../componentsFrist/fourbox'
import Recmmend from '../../../componentsFrist/recmmend'
  export default {
    components:{
      Adress,
      Threebox,
      Fourbox,
      Recmmend
    },
    mounted(){
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>

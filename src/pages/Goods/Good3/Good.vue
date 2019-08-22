<template>
  <div>
          <Adress  v-if="($route.params.page-0+5)%5==1" :Data="$route.params.data"> </Adress>
          <Recmmend v-else-if="($route.params.page-0+5)%5== 0"></Recmmend>
          <Ten v-else-if="($route.params.page-0+5)%5==3"></Ten>
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
      Ten,
      Fourbox,
      Recmmend
    },
    mounted(){
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>

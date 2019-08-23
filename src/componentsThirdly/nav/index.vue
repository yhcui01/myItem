<template>
        <div class="entity_nav" ref="list">
            <ul class="entity_nav_list" ref="listContainer">
                <li class="entity_nav_item "
                  @click="goto(i,tabList)"
                  :class="{active: i === index}" v-for="(e,i) in Data " :key="e.id">
                  {{e.tabName}}</li>
            </ul>
        </div>
</template>

<script type="text/ecmascript-6">
import Bsroll from 'better-scroll'
import { mapState } from 'vuex'
  export default {
    props:['Data'],
    data(){
      return {
        index:0
      }
    },
    computed:{
      ...mapState({
       // message:state=>state.
        tabList:state=>state.general.tabList
      })

    },
    mounted() {
        this.$nextTick(()=>{
          let list = this.$refs.list
          this.scroll =  new Bsroll(list,{
          scrollX:true
          })
        })
    },
    watch:{
    },
    methods:{
      goto(index,b){
          this.index = index
          let page = index+5
          let {tabList} = this
          //传不过去
          this.$router.replace({name:'good',params:{id:index,page:index,data:tabList}})
          // this.$router.replace({path:'/goods/good',query:{id:index,page:index,data:tabList}})
          // if(page%5===0){
          //      this.$router.replace({name:'good',params:{page:index,data:tabList}})
          //     }
          //     else if(page%5 ===1){
          //     this.$router.replace({name:'good2',params:{page:index,data:tabList}})
          //       //假
                
          //     }  else if(page%5 ===2){
          //        this.$router.replace({name:'good3',params:{page:index,data:tabList}})
          //        //假
          //     }  else if(page%5 ===3){
          //       //假
          //       this.$router.replace({name:'good4',params:{page:index,data:tabList}})
          //     }  else if(page%5 ===4){
          //       this.$router.replace({name:'good5',params:{page:index,data:tabList}})
          //       //直接进else  数据不同
          //     }
          //     else{
          //     }

      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
      .entity_nav
        overflow hidden
        height 1.1rem
        width 100%
        .entity_nav_list
          float left
          display flex
          .entity_nav_item
            width 4rem
            font-size 0.5rem
            text-align center
            line-height 0.5rem
            padding 0.2rem
            box-sizing border-box
            &.active
              border-bottom 1px solid red
              color red
 
</style>

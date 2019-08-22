<template>
  <div id="mpage"  >
    <Header>
      <span slot="left" @click="$router.replace('/home')">回到主页</span>
      <h3 slot="middle">{{ name ||"你好请登录,"}}</h3>
      <img class="iconImg2" slot="right" src="../../../static/images/img/易.png" alt="">
    </Header>
        <div class="type_area">
            <div class="mpage_log">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="btn_container">
                <button class="mpage_top btn" @click="$router.push({name:'login',path:'/login'})">邮箱登录</button>
                <button class="mpage_bottom btn" @click="$router.push({name:'login',path:'/login',params:{nonePhone:true}})">短线快捷登录</button>
            </div>
            <div class="contact">
                <ul class="contact_list">
                    <li class="contact_item">
                        微信
                    </li>
                    <li class="contact_item bd">
                        腾讯
                    </li>
                    <li class="contact_item">
                        新浪
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
  export default {
    computed:{
      ...mapState({
        name:state=>state.home.name
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../static/css/mixin.styl"
  #mpage
    height 100%
    .type_area
      .mpage_log
         width 100%
         height 55%
         display flex
         justify-content center
         align-items  center

         img
            width 8rem
            height 4rem
      .btn_container
          display flex
          flex-direction column
          margin-bottom: 9rem
          .mpage_top
            margin-bottom 0.5rem
      .contact
        width 100%
        .contact_list
          display flex
          justify-content center
          .contact_item
            width 20%
            font-size 1rem
            text-align center
            color: #ccc
            &.bd
              border 1px solid #ccc
              border-top none
              border-bottom none
</style>

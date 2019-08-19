<template>
    <div id="phone_login" >
        <div class="type_area">
            <div class="phone_login_header">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="phone_login_content">
                <div class="input_list">
                    <button class="get_code" v-if="nonePhone">获取验证码</button>
                    <input type="text" :placeholder="nonePhone ? '输入手机号码获取短信' : '请输入邮箱'"/>
                    <input type="text" :placeholder="nonePhone ? '输入短信验证码' : '输入密码'"/>
                </div>
                <div class="phone_login_text">
                    <span class="phone_login_left">登录遇到问题？</span>
                    <span class="phone_login_right" v-if="nonePhone" @click="nonePhone = false">使用密码登录</span>
                </div>
                <div class="phone_login_footer" >
                    <button class="btn" >登录</button>
                    <p @click="$router.push('/mside')">其他登录方式 &nbsp;></p>
                </div>

            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data(){
            return{
                nonePhone:false
            }
      },
      mounted(){
        let {nonePhone} = this.$route.params
        if(nonePhone){
            this.nonePhone = nonePhone
        }
            
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../static/css/mixin.styl"
  #phone_login
    height 100%
    .type_area
      .phone_login_header
        height 20%
        display flex
        justify-content center
        align-items center
        img
          width: 4.5rem;
          height: 2rem;
      .input_list
        position relative
        input

          width 100%
          height 2rem
          font-size 0.8rem
          border none
          border-bottom  1px solid #cccccc
        .get_code
            position absolute
            right 0
            bottom: 5%
            height 1.5rem
            width 4.5rem
            border 1px solid #000
            font-size 0.6remshopcart
            color #000
            text-align center
            line-height 0.2rem
            background white
      .phone_login_text
        display flex
        justify-content space-between
        height 2rem
        align-items center
        font-size 0.85rem
        .phone_login_left
          color #ccc
       .phone_login_footer
          height 5rem
          display flex
          flex-direction column
          justify-content space-between
          p
            text-align center
            font-size 0.8rem





 
</style>

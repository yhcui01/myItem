<template>
    <div id="phone_login" >
      <Header>
        <span slot="left" @click.prevent="$router.replace('/home')">回到主页</span>
        <h3 slot="middle">欢迎嘉宾长驻</h3>
        <img slot= "right" class='iconImg3' src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </Header>
        <div class="type_area">
            <div class="phone_login_header">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="phone_login_content">
              <form>
                <div class="input_list" v-show="nonePhone" >
                    <button class="get_code" v-if="nonePhone">获取验证码</button>
                    <input type="text" name='phone' v-model="phone"  :placeholder="'输入手机号码获取短信'"   v-validate="'required|module'"/>
                    <span     style="color: red;">{{errors.first('phone')}}</span>
                    <input type="text" name='keycode' v-model="keyCode" :placeholder="'输入短信验证码'" v-validate ="{required : true, min:6}"/>
                    <span  style="color: red;">{{errors.first('keycode')}}</span>
                </div> 
                    <div class="input_list" v-show ="!nonePhone">
                    <button class="get_code" v-if="nonePhone">获取验证码</button>
                    <input type="email" v-model="phone"  name="email"  :placeholder="'请输入邮箱'"   v-validate="'required|email'" />
                    <span  style="color: red;">{{errors.first('email')}}</span>
                    <input type="password"  v-model="password"  name='password' :placeholder="'输入密码'" v-validate =" {required : true , min:5}"/>
                    <span  style="color: red;">{{errors.first('password')}}</span>
             </div>
                <div class="phone_login_text">
                    <span class="phone_login_left">登录遇到问题？</span>
                    <span class="phone_login_right" v-if="nonePhone" @click="nonePhone = false">使用密码登录</span>
                </div>
                <div class="phone_login_footer" >
                    <button class="btn" @click.prevent="goLog">登录</button>
                    <p @click="$router.push('/mside')">其他登录方式 &nbsp;></p>
                
                </div>
                <input type="text" color="yellow" v-model ="captcha" >
                <img  @click = "keyCodeUpdate" ref="keyCodeImg" src="http://localhost:4000/captcha" alt="">
        </form>

            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">


import { reqLog } from '../../api'
  export default {
      data(){
        return{
            keyCode:"",
            phone:"",
            password:'',
            captcha:'',
            nonePhone:false
        }
      },
      mounted(){
        let {nonePhone} = this.$route.params
        if(nonePhone){
            this.nonePhone = nonePhone
        }
       
            
      },methods:{
       async goLog(){
           let formData = ['email','keycode']
          this.$validator.validateAll(formData)
          let {  phone,password,captcha,keyCode,nonePhone } = this 
          if(!nonePhone){
            let result = await reqLog({pwd:password,captcha,name:phone})
            this.$store.commit('updataName',result.data.name || "没有储存的信息")
            localStorage.setItem('tokenUser',result.data.token)
          }

        },
        keyCodeUpdate(){
           this.$refs.keyCodeImg.src = 'http://localhost:4000/captcha?'+Date.now()
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

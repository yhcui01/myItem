import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)


// 提示信息本地化
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    name: '用户名',
    phone: '手机号',
    keycode: '验证码',
    password:'密码'
  }
})
VeeValidate.Validator.extend('module', {
  getMessage: field =>'必须是11位的手机号 第一位必须是1',
  validate: value => {
    return /^1\d{10}$/.test(value)
  }
});
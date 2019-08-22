import ajax from './ajax'

const BASE = '/api'
const BASE2 = '/myapi'
//获取home 的数据
export const getHomeData =() => ajax('/homeData')
export const getTabs = ()=> ajax('/getTabs')
export const getCategory = ()=> ajax('/category')
///category

export const searchCode = keywordPrefix=>ajax(BASE+'/xhr/search/searchAutoComplete.json',{
  params:{
    keywordPrefix
  }
})
export const lazyPage = ({page,size}) =>ajax(BASE+'/topic/v1/find/recAuto.json',{
  params:{
    page,
    size
  }
})
export const reqLog = ({pwd,name,captcha}) => ajax.post(BASE2+'/login_pwd',{
  pwd,
  name,
  captcha

},)
export const reqToken = () => ajax(BASE2+'/auto_login',{
  headers:{needToken:true}
})
export default{
}
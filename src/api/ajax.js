import axios from 'axios'
import qs from 'qs'
import store from '../store/store'

axios.interceptors.request.use((config)=>{
  const { method , data ,headers}  = config

  if(method.toUpperCase() ==='POST' && data && typeof data ==="object"){
    config.data  = qs.stringify(data)
  }

  if(headers.needToken){
    config.headers.Authorization = localStorage.getItem('tokenUser')
  }
  return config
})



axios.interceptors.response.use(({data})=>{
  if(data.data.name){
    store.commit('updataName',data.data.name)
  }
    return data
},(error)=>{
return new Promise(()=>{})
})

export default axios
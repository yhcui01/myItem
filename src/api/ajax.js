import axios from 'axios'
import qs from 'qs'


axios.interceptors.request.use((config)=>{
  const { method , data}  = config
  if(method.toLocaleLowerCase() ==='POST' && data && typeof data ==="object"){
    config.data  = qs.stringify(data)
  }
  return config
})



axios.interceptors.response.use((response)=>{
    return response.data
},(error)=>{
console.log(error)
return new Promise(()=>{})
})

export default axios
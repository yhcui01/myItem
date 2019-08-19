
import { getHomeData } from '../../api'


//type
import { COMMIT_HOME_DATA } from '../mutation_type'
//state
const state ={
  homeData:{}
}

//actions
const actions ={
    async getHomeData({commit}){
        let result = await getHomeData()
        if(result.code ===0){
            commit(COMMIT_HOME_DATA,result)
        }
      }
}
//mutations
const mutations={
  [COMMIT_HOME_DATA](state,{data}){
    state.homeData = data
  }
}



//getter
const getters={

}
export default{
  state,
  mutations,
  actions,
  getters
}
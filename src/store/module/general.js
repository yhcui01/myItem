
import { getTabs,lazyPage } from '../../api'


//type
import { COMMIT_GENERAL_LIST,
         ADD_GENERAL_LIST  
} from '../mutation_type'
//state
const state ={
  navList:[],
  tabList:[],
  oneHeight:750
}

//actions
const actions ={
      async getTabs({commit},fn){
        let result =await getTabs()
        if(result.code-0 ===0 ){
          commit(COMMIT_GENERAL_LIST,result.data)
        }
        if (fn  &&  typeof fn ==="function"){
          fn() 
         }
      },
      async reqLazyPage({commit},data){
        let result = await lazyPage(data)
        if(result.code ==="200"){

          commit(ADD_GENERAL_LIST,result.data)
        }
      },
      testCb(...value){

          value[0].commit('test')
      }


}
//mutations
const mutations={
  oneHeight(state,data){
    state.oneHeight =data
  },
  [COMMIT_GENERAL_LIST](state,{nav,list}){
    state.navList = nav
    state.tabList = list
  },
  [ADD_GENERAL_LIST](state,result){
    let tabList =state.tabList
    for(let i = 0 ; i<result.result.length; i ++){
      tabList.push(tabList[i])
    }
  
  },
  test(...value){
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
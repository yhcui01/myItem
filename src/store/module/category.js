import { getCategory } from '../../api'


import {
  COMMIT_CARTGORY_LEFT,
  COMMIT_CARTGORY_RIGHT,
  RECEIVE_CARTGORY_LIST
}from '../mutation_type'
//state
const state ={
    cartgoryLeft:[],
    cartgoryRight:[],
    currentArr:[]

}

//actions
const actions ={
  async getCartgory({commit}){

   let result = await getCategory()
   if(result.code-0 ===0){
     commit(COMMIT_CARTGORY_LEFT,result)
     commit(COMMIT_CARTGORY_RIGHT,result)
   }
  
  },
  getIndexList({commit},index){
    commit(RECEIVE_CARTGORY_LIST,index)
  }
  
}
//mutations
const mutations={
  [COMMIT_CARTGORY_LEFT](state,{data}){
    let resultArr = []
    data.categoryL1List.forEach(element => {
      if(element.name.length <15){
        resultArr.push(element.name)
      }else{
        resultArr.push('推荐专区')
      }
    });
    state.cartgoryLeft = resultArr
  },
  [COMMIT_CARTGORY_RIGHT](state,{data}){
    let resultArr =[]
    data.categoryL1List.forEach((e,i)=>{
    resultArr.push(e.subCateList)
  })
   state.cartgoryRight = resultArr
},
  //根据下标获取对应的 分类数组
  [RECEIVE_CARTGORY_LIST](state,index){
    state.currentArr = state.cartgoryRight[index]
  }
}

//getter
const getters={

}
export default{
  getters,
  mutations,
  state,
  actions
}
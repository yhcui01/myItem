import ajax from './ajax'



//获取home 的数据
export const getHomeData =() => ajax('/homeData')
export const getCategoryList = ()=> ajax('/categoryList')
export const getCategory = ()=> ajax('/category')
///category


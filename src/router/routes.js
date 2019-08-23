
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Category from '../pages/Category/Category'
import Mside from '../pages/Mside/Mside'
import ShopCart from '../pages/ShopCart/ShopCart'
import Goods from '../pages/Goods/Goods'
import Search from '../pages/Search/Search'



//Goods
import Good  from '../pages/Goods/Good/Good'


export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/login',
    component:Login,
    name: 'login',
    meta:{
      noneFooter:true
    }

  },
  {
    path:"/category",
    component:Category
  },
  {
    path:'/mside',
    component:Mside
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/goods',
    component:Goods,
    children:[
      {
        path:'/goods/good/:id',
        component:Good,
        name:'good'
      },
      {
        path:'',
        redirect:'/goods/good/1'

      }
    ]
  },
  {
    path:'/search',
    component:Search,
    meta:{
      noneFooter:true
    }
  },
  {
    path:'/',
    redirect:'/home'
  },
  
  
]
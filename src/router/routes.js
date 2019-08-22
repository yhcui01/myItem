
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Category from '../pages/Category/Category'
import Mside from '../pages/Mside/Mside'
import ShopCart from '../pages/ShopCart/ShopCart'
import Goods from '../pages/Goods/Goods'
import Search from '../pages/Search/Search'



//Goods
import Good  from '../pages/Goods/Good/Good'
import Good2  from '../pages/Goods/Good2/Good'
import Good3  from '../pages/Goods/Good3/Good'
import Good4  from '../pages/Goods/Good4/Good'
import Good5  from '../pages/Goods/Good5/Good'

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
        path:'/goods/good',
        component:Good,
        name:'good'
      },
      {
        path:'/goods/good2',
        component:Good2,
        name:'good2'
      },
      {
        path:'/goods/good3',
        component:Good3,
        name:'good3'
      },
      {
        path:'/goods/good4',
        component:Good4,
        name:'good4'
      },
      {
        path:'/goods/good5',
        component:Good5,
        name:'good5'
      },
      {
        path:'/',
        redirect:'/goods/good'

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
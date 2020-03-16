import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'pages/index/Home'
import Index from 'pages/index/Layout'
import Search from 'pages/Search'
import Recommend from 'pages/nav/Recommend'
import Book from 'pages/nav/Book'
import Xiangsheng from 'pages/nav/Xiangsheng'
import Yinyue from 'pages/nav/Yinyue'
import Ertong from 'pages/nav/Ertong'
import Renwen from 'pages/nav/Renwen'
import Lishi from 'pages/nav/Lishi'
import Qinggan from 'pages/nav/Qinggan'
import Keji from 'pages/nav/Keji'

import Play from 'pages/detail/Play'
import Detail from 'pages/detail/Detail'
import Searchdetail from 'pages/detail/Searchdetail'
import Searchall from 'pages/detail/Searchall'
import Searchzhuan from 'pages/detail/Searchzhuan'
import Searchzhu from 'pages/detail/Searchzhu'
import Searchsheng from 'pages/detail/Searchsheng'
import Searchlisten from 'pages/detail/Searchlisten'
import Top from 'pages/top/Top'
import Free from 'pages/top/Free'
import Rise from 'pages/top/Rise'
import All from 'pages/top/All'
import All1 from 'pages/top/All1'
import Youshengshu from 'pages/top/Youshengshu'
import Xiangsheng2 from 'pages/top/Xiangsheng'

import Category from 'pages/category/Category'
import Demos from 'pages/category/Demos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index/home/recommend'
  },
  {
    path: '/top/free',
    redirect:'/top/free/all'
  },
  {
    path: '/top/rise',
    redirect:'/top/rise/all'
  },
  {
    path:'/index',
    name:'index',
    component:Index,
    children:[
      {
        path:'home',
        name:'home',
        component:Home,
        children:[
          {
            path:'recommend',
            name:'recommend',
            component:Recommend,
            
          },
          {
            path:'book',
            name:'youshengshu',
            component:Book
          },
          {
            path:'xiangsheng',
            name:'xiangsheng',
            component:Xiangsheng
          },
          {
            path:'yinyue',
            name:'yinyue',
            component:Yinyue
          },
          {
            path:'ertong',
            name:'ertong',
            component:Ertong
          },
          {
            path:'renwen',
            name:'renwen',
            component:Renwen
          },
          {
            path:'lishi',
            name:'lishi',
            component:Lishi
          },
          {
            path:'qinggan',
            name:'qinggan',
            component:Qinggan
          },
          {
            path:'keji',
            name:'keji',
            component:Keji
          },
        ]
      }
    ]
  },
  {
    path:'/search',
    name:'search',
    component:Search
  },
  {
    path:'/top',
    name:'top',
    component:Top,
    children:[
      {
        path:'free',
        name:'free',
        component:Free,
        children:[
          {
            path:'all',
            name:'all',
            component:All
          },
          {
            path:'youshengshu',
            name:'youshengshu',
            component:Youshengshu
          },
          {
            path:'xiangsheng',
            name:'xiangsheng',
            component:Xiangsheng2
          }
        ]
      },
      {
        path:'rise',
        name:'rise',
        component:Rise,
        children:[
          {
            path:'all',
            name:'all',
            component:All
          },
          {
            path:'all1',
            name:'all1',
            component:All1
          },
          {
            path:'youshengshu',
            name:'youshengshu',
            component:Youshengshu
          },
          {
            path:'xiangsheng',
            name:'xiangsheng',
            component:Xiangsheng2
          }
          
        ]
      }
    ]
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:Detail
  },
  {
    path:'/play/:id/:id',
    name:'play',
    component:Play
  },
  {
    path:'/searchdetail',
    name:'searchdetail',
    component:Searchdetail,
    children:[
      {
        path:'searchall',
        name:'searchall',
        component:Searchall
      },
      {
        path:'searchzhuan',
        name:'searchzhuan',
        component:Searchzhuan
      },
      {
        path:'searchsheng',
        name:'searchsheng',
        component:Searchsheng
      },
      {
        path:'searchzhu',
        name:'searchzhu',
        component:Searchzhu
      },
      {
        path:'searchlisten',
        name:'searchlisten',
        component:Searchlisten
      }
    ]
  },
  {
    path:'/category',
    name:'category',
    component:Category
  },
  {
    path:'/demos',
    name:'demos',
    component:Demos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

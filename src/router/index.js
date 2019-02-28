// 先引入需要的模块
import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/home/Main.vue'
import Detail from '../components/pages/Detail.vue'
import Login from '../components/pages/Login.vue'
import Shopcar from '../components/pages/Shopcar.vue'
import Res from '../components/pages/Res.vue'
import Mine from '../components/pages/Mine.vue'
import Minet from '../components/pages/Minet.vue'
import Product from '../components/pages/Product.vue'

Vue.use(Router)

let options = {
  mode: 'history',
  base: process.env.BASE_URL,
    routes :[
        {
            path: '/', 
            component: Main,
            name : 'Main'
          },
          {
            path: '/Main',
            component: Main,
            name : 'Main'
          },
          {
            path: '/Minet',
            component: Minet,
            //命名路由
            name : 'Minet'
          },
          {
            path: '/Res',
            component: Res,
            name : 'Res'
          },
          {
            path: '/Login',
            component: Login,
            name : 'Login'
          },
          {
            path: '/Shopcar',
            component: Shopcar,
            name : 'Shopcar'
          },
          {
            path: '/Detail/:id',
            component: Detail,
            name : 'Detail'
          },
          {
            path: '/Mine',
            component: Mine,
            name :'Mine'
          },
          {
            path: '/Product',
            component: Product,
            name :'Product'
          }
    ]
  
}
let router = new Router(options)
export default router

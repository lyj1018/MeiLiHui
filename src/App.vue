<template>
  <div id="app">
   
  
    <router-view></router-view>
   
   
  </div>
</template>

<script>
//引入组件
//import 定义变量的方式



import Main from './components/home/Main'
import Login from './components/pages/Login'
import Mine from './components/pages/Mine'
import Minet from './components/pages/Minet'
import Shopcar from './components/pages/Shopcar'
import Detail from './components/pages/Detail'

export default {
  name: 'App',
//局部注册header
    components:{
      
   
    }
}
</script>

<style lang = 'scss' scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */


</style>

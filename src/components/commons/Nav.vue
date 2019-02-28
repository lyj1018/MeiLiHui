<template lang = "html">
   <div class = "nav-box"  style = "overflow:scroll;">
     <div class = "box">
       <ul>
         <li class= "active"
          v-for = 'nav in navs'
          :key = 'nav.id'
         ><span>{{ nav.title }}</span></li>
       </ul>
     </div>
   </div>
</template>
<script>

export default {
  data() {
    return{
      navs:[
        {
          id:1,
          title:'推荐'
        },
        {
          id:2,
          title:'海外'
        },
        {
          id:3,
          title:'女士'
        },
        {
          id:4,
          title:'男士'
        },
        {
          id:5,
          title:'美妆'
        },
        {
          id:6,
          title:'家居'
        },
        {
          id:7,
          title:'婴童'
        },
        {
          id:8,
          title:'即将上线'
        }

      ]
    }
  }
}
</script>

<style scoped lang = "scss">
.nav-box{
  overflow: hidden;
  width: 7.5rem;
  height: 1.173333rem;
  margin: 0 auto;
  position: absolute;
  top:.7rem;
  .box{
      z-index:10;
      position:absolute;
      overflow: scroll;
      width:7.5rem;
      height: 1.173333rem;
      margin: 0 auto;
      padding-left: .2rem;
      box-sizing: border-box;
        ul{
        height: 1.1rem;
        font-size: .3rem;
        width: 8rem;
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -ms-flex-pack: justify;
        -webkit-box-pack: justify;
        justify-content: space-between;
        color:#fff;
          li{
            text-align: center;
            height: 1.1rem;
            line-height: 1.1rem;
            position: relative;
            box-sizing: border-box;
            float: left;
          }
        }






       
    }
}
  
</style>
  


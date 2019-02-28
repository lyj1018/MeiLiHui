<template>
    <div class = "header-box">
        <div class = "header homeTop ">
            <ul>
                <li>
                    <router-link to="/login" class = "login-btn">登录</router-link>
                </li>
                <li class = "search">

                   <a href= "">
                       <strong>
                           <i class="fa fa-search"></i> 
                           <span class = "iconfont mei-search">   
                           </span>
                           圣诞礼遇 时尚外套1折起
                       </strong>
                   </a>
                </li>
                <li>
                   <router-link to= "shopcar" class = "shopCarIcon">
                       <!-- <span id = "shopCar" class= ""></span> -->
                    </router-link> 
                </li>
            </ul>
        </div>
       
        
    </div> 
   
</template>
<script>

export default {
  methods: {
    
  }
}
</script>

<style scoped lang = 'scss'>
    .header-box{
        position:absolute;
        z-index: 10;
        left: 0;
        top: 0;
        width :100%;
            .homeTop{
               width: 100%;
               height: 1rem;
               margin: 0 auto; 
               
                   ul {
                       overflow: hidden;
                       height:100%;
                        li {
                            float:left;
                            height: 100%;
                            text-align: center;
                            line-height: 1.1rem;
                            position: relative;
                            padding:0;
                            margin:0;
                            display: flex;
                            align-items: center;
                                .login-btn{
                                    color: #fff;
                                    cursor: pointer;
                                }  
                        }
                            
                    }
                    
                
               
            }
    }
ul li:first-child{
        text-align: left;
        width : 1rem;
        height: .8rem;
        box-sizing: border-box;
        position: relative;
            .login-btn {
                line-height: .8rem;
                position: absolute;
                display: block;
                font-size: .3rem;
                margin:0 0 0 .2rem;
            }
    }

ul li:last-child{
    float: right;
    text-align: right;
    width: 1rem;
        .shopCarIcon{
            width: .48rem;
            height: .64rem;
            display: block;
            background:url(../../../public/img/index.png)50% no-repeat;
            background-size: .3rem .44rem;
            margin-left:.3rem;
        }
}


ul li.search {
    width :5.5rem;
    height:.68rem;
    a{
        width: 5.5rem;
        height: .68rem;
        overflow: hidden;
        line-height:.64rem;
        color: hsla(0,0%,100%,.6);
        background-color: hsla(0,0%,100%,.3);
        border:0;
        font-size: .24rem;
    }
    strong {
        max-width: 4.68rem;
        overflow: hidden;
        display: inline-block;
        vertical-align: top;
        font-weight: 400;
        font-size: .24rem;
    }
    .iconfont{
        padding-right: .2rem;
        font-size: .3rem;
        color:#fff;
    }
}
</style>



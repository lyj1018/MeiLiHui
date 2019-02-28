<template>
    <div class = "product-box">
       <div class = "mine-top">
            <div class ="mine-left">
                <router-link :to="{name:'Main'}" class = "back">
                    <i style = "font-size:.4rem;" class="fa fa-long-arrow-left"></i> 
                </router-link>
            </div>
            <div class = "title">
                <span>卖场</span>
            </div>
            <div class = "mine-right">
                <div class = "switch-menu">
                    <a href="" class = "show-menu">
                        <i class = "fa fa-ellipsis-h"></i>
                    </a>
                </div>
                <div class = "menu">
                    <div class = "arrow"></div>
                    <div class = "menu-list">
                        <a href=""><span>首页</span></a>
                        <a href=""><span>购物袋</span></a>
                        <a href=""><span>个人中心</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div class = "shop-main">
             <Listd></Listd>
        </div>
    
    </div>
    
</template>

<script>
import Listd from './Listd'
export default {
    name : 'Product',
    components: {
    Listd
  },
}
</script>

<style lang="scss" scoped>
.mine-top{
                z-index: 9999;
                width: 100%;
                height: 1.173333rem;
                position: relative;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                background-color: hsla(0,0%,100%,.95);
                    .mine-left,.mine-right{
                        width: 1.36rem;
                        height: 1.1rem;
                        position: relative;
                        z-index: 10;
                            .back,.show-menu,.switch-menu{
                                width: 100%;
                                height: 100%;
                                display: block;
                                position: relative;
                                    .fa-long-arrow-left{
                                        display: block;
                                        height: .38rem;
                                        position: absolute;
                                        top: .2rem;
                                        color: #222; 
                                        width: .5rem;
                                        left: .4rem;
                                        font-size: .3rem;
                                    }
                                    .fa-ellipsis-h{
                                        width: .56rem;
                                        right: .4rem;
                                        font-size: .5rem;
                                        display: block;
                                        height: .38rem;
                                        position: absolute;
                                        top: .2rem;
                                        color: #222;
                                    }
                            }
                    }
                    .title{
                        position: relative;
                        z-index: 10; 
                            span{
                                display: block;
                                width: 5rem;
                                height: .8rem;
                                font-size: .3rem;
                                font-weight: 600;
                                overflow: hidden;
                                line-height: .8rem;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                text-transform: uppercase;
                                text-align: center;
                            }  
                    }
            }

.menu{
        position:absolute;
        right:0;
        top:1.17rem;
        display:none;
            .arrow{
                width: 0;
                height: 0;
                border-left: .26rem solid transparent;
                border-right: .26rem solid transparent;
                border-bottom: .26rem solid hsla(0,0%,96%,.96);
                position: absolute;
                right: .42rem;
                top: -.26rem;
            }
            .menu-list{
                width: 2.5rem;
                background-color: hsla(0,0%,96%,.96);
                    a{
                        display:block
                    }
                    span{
                        width: 2.2rem;
                        margin: 0 auto;
                        padding: .48rem 0;
                        text-align: center;
                        color: #000;
                        font-size: .3rem;
                        border-bottom: .01rem solid #ccc;
                        display:block;
                    }
                    a:last-child{
                        border-bottom:none;
                    }
            }
    }
.shop-empty {
            h3{
                border-top:.01rem solid #e5e5e5;
                padding-bottom:.2rem;
                box-shadow: 0 -0.01rem 0 0 #e5e5e5;
                text-align: center;
                position: relative; 
                margin:0;
                span{
                    display: block;
                    width: 2.1rem;
                    height: .5rem;
                    overflow: hidden;
                    margin: -.1rem 0 0 -1rem;
                    text-align: center;
                    color: #000;
                    font-size: .3rem;
                    background-color: #fff;
                    position: absolute;
                    top: -.1rem;
                    left: 50%;   
                }
            }
            .pro-list{
                width: 7.5rem;
                margin: 0 auto;
                padding-bottom: 2rem;
                .product-items:nth-child(odd){
                    margin-right:.25rem;
                }
                .product-items{
                    width:3.2rem;
                    height:6rem;
                    margin-bottom:.2rem;
                    display:inline-block;
                    a,img{
                        color:#000;
                        display:block;
                        width:100%;
                    }
                    .pic{
                        width:3.2rem;
                        height:4rem;
                        position:relative;
                    }
                    img{
                        margin-bottom:.13rem;
                    }
                }
            }
            .product-icon{
                height: .44rem;
                    span{
                        display: inline-block;
                        margin-right: .05rem;
                        padding: 0 .04rem;
                        font-size: .2rem; 
                        position:absolute;
                    }
                    .span-l{
                        background: rgb(255, 255, 255);
                        color: rgb(0, 0, 0);
                        border: 0.01rem solid rgb(0, 0, 0);
                        left:1.6rem;
                    }
                    .span-f{
                        background: rgb(221, 40, 40);
                        color: rgb(255, 255, 255);
                        border: 0.01rem solid rgb(221, 40, 40);
                        
                    }
                    .tag{
                        zoom:1;
                    }
            }
            .product-info{
                padding-bottom:.06rem;
                    span{
                        display: block;
                        width: 100%;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden; 
                    }
                    .pro-brand{
                        line-height: .37rem;
                        text-transform: uppercase;
                        font-weight: 700;
                        font-size: .28rem;
                    }
                    .pro-name{
                        line-height: .32rem;
                        font-size: .25rem;
                    }
            }
            .pro-price{
                display: flex;
                    span{
                        color: #dd2828;
                        font-size: .15rem;
                        font-weight: 600;
                    }
                    del,em,span{
                        display: inline-block;
                        vertical-align: top;
                        line-height: .34rem;
                    }
                    del{
                        color:#ccc;
                        font-size:.15rem;
                    }
                    .discount{
                        color: #666;
                        font-size: .15rem;
                        position: relative;
                        top: -.05rem;
                        left:.5rem;
                    }
            }
        }
</style>



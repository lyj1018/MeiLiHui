<template>
    <div class = "detail-box">
        <div class = "detail-top">
            <div class ="detail-left">
                <router-link :to="{name:'Product'}" class = "back">
                    <i style = "font-size:.4rem;" class="fa fa-long-arrow-left"></i> 
                </router-link>
            </div>
            <div class = "title">
                <span class = "shopcar">HHDHCDHUHDSDU</span>
                <span class = "price">￥1,680</span>

            </div>
            <div class = "detail-right">
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
        <div class = "detail-main">
            <div class = "detail-swiper">
                <div class = "detail-swiper-img">
                    <div class = "detail-s-i">
                        <img :src="items.img7" alt="">
                    </div>
                </div>
            </div>
            <div class = "detail-info">
                <div class = "detail-pro-title">
                    <h1>{{ items.title}}</h1>
                </div>
                <div class = "detail-pro-price">
                    <div>
                        <div>
                            <div>
                                <del>{{ items.del2}}</del>
                                <strong>{{items.strong2}}</strong>
                                <div class = "detail-tags ">
                                    <span class = "new-labels te">
                                        <a href="" style= "background:rgb(255,255,255);color:rgb(0,0,0);border:0.01rem solid rgb(0,0,0);">{{items.price}}</a>
                                    </span>
                                </div>
                                <div class = "detail-tags ">
                                    <span class = "new-labels te1">
                                        <a href="" style= "background:rgb(255,255,255);color:rgb(0,0,0);border:0.01rem solid rgb(0,0,0);">{{items.price2}}</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "detail-time">
                <span>
                    <i class = "fa fa-clock-o"></i>
                    品牌直发 预计2018/12/25发货
                </span>
            </div>
            <div class = "detail-clock">
                <section>
                    <div>
                        <div class = "detail-clock-info">
                            <div class = "detail-countdown">
                                <div class = "detail-kill">
                                    <span class = "detail-kill-title">闪购</span>
                                    <div class = "detail-kill-txet">
                                        <div>
                                            <span>距结束</span>
                                            <span>03</span>
                                            <em>天</em>
                                            <span>12</span>
                                            <em>小时</em>
                                            <em>分</em>
                                            <span></span>
                                            <em>秒</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class = "detail-clock-info">
                            <div class = "detail-coupons">
                                <div class = "detail-click">
                                    <div class = "title">领券</div>
                                    <div class = "detail-click-summary">
                                        <span class = "detail-click-item">满999减150</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "detail-service">
                        <div class = "detail-service-label">
                            <div class = "detail-click">
                                <div class = "title">服务</div>
                                <div class ="labels">
                                    <span class = "labels-item">
                                        <em>全场满688包邮</em>
                                    </span>
                                    <span class = "labels-item">
                                        <em>正品保障</em>
                                    </span>
                                    <span class = "labels-item">
                                        <em>买手推荐</em>
                                    </span>
                                    <span class = "labels-item">
                                        <em>七天无理由退货</em>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <!-- <div class = "product-num">
                <h3>商品参数</h3>
                <div class = "product-num-info">
                    <div>
                        <ul class = "product-num-list">
                            <li>
                                <label >品牌属地</label>
                                <span>美国</span>
                            </li>
                            <li>
                                <label >产地</label>
                                <span>意大利</span>
                            </li>
                            <li>
                                <label >镜框颜色</label>
                                <span>黑色</span>
                            </li>
                            <li>
                                <label >种类</label>
                                <span>太阳眼镜</span>
                            </li>
                            <li>
                                <label >形状</label>
                                <span>蝶形</span>
                            </li>
                            <li>
                                <label >框型</label>
                                <span>全框</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> -->
            <!-- <div class = "size-info">
                <h3 class="size-block">尺码信息
                    <span class = "size-unit">单位：MM</span>
                    <span class = "size-pop">尺码指南</span>
                </h3>
                <div class = "size-content">
                    <div class = "size-name">
                        <ul>
                            <li>镜框宽度</li>
                            <li>镜架材料</li>
                        </ul>
                    </div>
                    <div class = "size-table">
                        <div class = "size-container">
                            <ul class = "size-items">
                                <li>镜框：140mm镜脚 145mm镜片 ：宽度58mm鼻间距：16mm</li>
                                <li>镜片：树脂  镜架：板材</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class = "pro-detail">
                <h3>商品详情</h3>
               <div class = "block-info">
                   <div class = "images">
                       <div class = "pic">
                           <img :src="items.img2" alt="">
                           <img :src="items.img3" alt="">
                          <img :src="items.img4" alt="" class = "space">
                          <img :src="items.img5" alt="" >
                          <img :src="items.img6" alt="" >
                       </div>
                   </div>
               </div>
            </div>
            <Listd></Listd>
        </div>
        <div class = "foot">
            <div class = "left-area">
                <div>
                    <a href="" class = "shop-car">
                        <span class = "icon">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAqCAYAAADf/ynVAAAABGdBTUEAALGPC/xhBQAAASFJREFUWAntWMENwjAMLAjYgRlgFbaCN0gwDjxgBybhjeBOqiurSpsYSMjDlk5Jk3N9upgIaJrvYoX0PXAHHi045xr3isccFY/AE3gNgHsnYAEUCYo6A0OC+usXcIuIo1O6+A3PG2DZgvMroDl0Lmuwb/Tx7fA8DVTk2hYQccxZB3g/W2JTSzE6FRIlxSaYaOcOspFj5CdOhPHIYkGO8JmbLXglSCH2VCzIET5zk4N2M7G6GOuRv4qtVtisZwuPdiz0sce48h5LTset1jEXJueaOrpjqU4Jr1rH+teFCB4aU68Inf9Jzui3A/3y4vNqj9KFWXvBHXPHrA5Y+d5j7pjVASvfe8wdszpg5XuPuWNWB6x8/lDo/i+wJufke/Nb3X0DzLtCqpq9klMAAAAASUVORK5CYII=" alt="">
                            <span></span>
                        </span>
                        <span class = "btn-text">购物袋</span>
                    </a>
                </div>
            </div>
            <div class = "submit-btn">
                <span class = "join-btn">加入购物车</span>
                <span class = "join-btn-t">立即购买</span>
            </div>
        </div>
    </div>
</template>

<script>
import Listd from './Listd'
export default {
     name:'Detail',
     props:['id'],
     data(){
         return{
             items:[],

         }
     },
     components: {
    Listd
  },
     created(){
         this.$http
         .get('/static/json/index.json')
         .then(
             res=>{
                 let id = this.$route.params.id
                 this.items=res.data[id-1]
             }
         )
         .catch(error => console.log(error))
     }

    
}
</script>
<style lang="scss" scoped>
    .detail-top{
                width:7.5rem;
                z-index: 9999;
                height: 1rem;
                position: fixed;
                display: flex;
                flex-direction: row;
                top:0;
                left:0;
                flex-wrap: nowrap;
                justify-content: space-between;
                background-color: hsla(0,0%,100%,.95);
                    .detail-left,.detail-right{
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
                            .back{
                                width:.8rem;
                            }
                    }
                    .title{
                        position: relative;
                        z-index: 10;
                        padding-top:.2rem; 
                        width: 5rem;
                            .shopcar{
                                display: block;
                                width: 5rem;
                                height: .5rem;
                                font-size: .3rem;
                                font-weight: 600;
                                overflow: hidden;
                                line-height: .5rem;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                text-transform: uppercase;
                                text-align: center;
                            }
                            .price{
                                color:#dd2828;
                                font-size:.2rem;
                                display: block;
                                width: 5rem;
                                height: .2rem;
                                padding: .026rem;
                                overflow: hidden;
                                line-height: .2rem;
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

.detail-main{
   padding:0 .5rem .6rem;
   position:relative;
   top:-0.7rem; 
    .detail-swiper{
        opacity: 1;
        width:6.7rem;
        height:8.8rem;
        padding:0 0 .32rem;
            .detail-swiper-img{
                box-shadow: 0 0.001rem 0.001rem 0.001rem;
                margin-left: auto;
                margin-right: auto;
                position: relative;
                overflow: hidden;
                z-index: 1;
                height:100%;
                    .detail-s-i{
                        position: relative;
                        width: 100%;
                        height: 100%;
                        z-index: 1;
                        display: flex;
                        transition-property: transform;
                        box-sizing: content-box;
                             img{
                                display:block;
                                width:6.5rem;
                                height:100%;
                                margin-top:1rem;
                               }
                    }
            }
    }
}
.detail-info{
    width:100%;
     height:1.5rem;
        .detail-pro-title{
                h1{
                    font-size:.32rem;
                    color:#000;
                    text-transform: uppercase;
                }
        }
        .detail-pro-price{
            position:relative;
           
            del{
                    display:block;
                    line-height:.25rem;
                    color:#ccc;
                    font-size:.25rem;
                }
                strong{
                    display:inline-block;
                    margin-right:.13rem;
                    color:#dd2828;
                    font-size: .28rem;
                    position:absolute;
                    margin-top:.1rem;
                }
                .te{
                    top:.32rem;
                    left:1.3rem;
                }
                .te1{
                    top:.32rem;
                    left:2.2rem;
                }
                .detail-tags{
                    display:inline-block;
                    vertical-align: text-bottom;
                        .new-labels{
                            display:inline-block;
                            height:.20rem;
                            line-height: .20rem;
                            font-size:.12rem;
                            position:absolute;
                            
                                a{
                                    display:inline-block;
                                    padding:.05rem;
                                }
                        }
                        
                }
        }
                
}
.detail-time{
    padding-bottom:.57rem;
    font-size:.32rem;
        span{
            color:#666;
                .detail-time-icon{
                    display:inline-block;
                    vertical-align: text-top;
                    margin-right:.13rem;
                    font-size:.37rem;
                }
        }
}
.detail-clock{
    padding: 0 0 .1rem;
    section{
        box-shadow: 0 0.01rem 0 0 #eee, 0 -0.01rem 0 0 #eee;
    }
    .detail-clock-info{
        box-shadow: 0 0.01rem 0 0 #eee;
        margin-left:.1rem;
        .detail-countdown{
            padding:.2rem;
            padding-left:0;
            color:#000;
            .detail-kill{
                font-size:.3rem;
                color:#666;
                .detail-kill-title{
                    float:left;
                }
                .detail-kill-txet{
                    float:left;
                    padding-left:.5rem;
                    color:#000;
                    font-weight: 700;
                } 
            }
        }
        .detail-coupons{
            padding: .5rem 0;
            font-size: .3rem;
            .detail-click{
                overflow: hidden;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAABGdBTUEAALGPC/xhBQAAAKJJREFUGBljmDVr1obZs2fLMOAATP////f/9+/fdaCiglWrVjGjq2OCCvAAFfV/+PDhJFChMbIimAKwGNA0YyA+CbR2AtA0HpAg48yZM/8j64CxGRkZnwAV56KYAJOE0UxMTP9ZYBwYDdT5F8ieIiAgUBMWFvYFRQFQ8iwQp6empp6FaYAp+AI0rpafn38yUBfIBDhgAerYCMQ5QF1P4KJIDABKuDtslB3wvQAAAABJRU5ErkJggg==) 100% no-repeat;
                background-size: .1rem .1rem;
            }
            .detail-click-summary{
                width: 4rem;
                float: left;
                padding-left: .5rem;
                .detail-click-item{
                    width: auto;
                    height: .3rem;
                    float: left;
                    margin-right: .1rem;
                    padding: 0 .09rem;
                    line-height: .3rem;
                    color: #fff;
                    font-size: .24rem;
                    background: -webkit-linear-gradient(left,#ec4b4b,#dd2828);
                    background: linear-gradient(left,#ec4b4b,#dd2828);
                    border-left: .01rem dotted #fff;
                    border-right: .01rem dotted #fff;
                }
            }
        }
    }
    .title{
        float:left;
        color:#666;
    }
}
.detail-service{
    box-shadow: 0 0.013333rem 0 0 #eee;
    .detail-service-label{
        padding: .56rem 0 .3rem;
        font-size: .3rem;
        .detail-click{
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAABGdBT…6FaYAp+AI0rpafn38yUBfIBDhgAerYCMQ5QF1P4KJIDABKuDtslB3wvQAAAABJRU5ErkJggg==) 100% no-repeat;
            background-size: .1rem .1rem;
        }
    }
}
.product-num{
    position: relative;
    h3{
        padding: .6rem 0 .5rem;
        color: #000;
        font-size: .48rem;
        font-weight: 700;
    }
    .product-num-info{
        position:relative;
        ul{
            padding:0 0 .4rem;
            li{
                width: 100%;
                padding: 0 0 .4rem;
            }
            label{
                width:2rem;
                color: #999;
                font-size: .3rem;  
            }
            span{
                width: 4rem;
                color: #000;
                font-size: .3rem;
            }
            li,label,span{
                 float:left;
            }
        }
    }
}
.size-info{
  border-bottom: .01rem solid #eee;
  padding-bottom: .2rem;
  position: relative;  
  h3{
    padding: .6rem 0 .5rem;
    color: #000;
    font-size: .48rem;
    font-weight: 700;  
  }
  .size-unit{
    color: #999;
    font-size: .28rem;
    font-weight: 400;
    margin-left: .1rem;
  }
  .size-pop{
    float: right;
    margin-top: .15rem;
    padding-right: .2rem;
    color: #666;
    font-size: .28rem;
    font-weight: 400;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAABGdBTUEAALGPC/xhBQAAAKJJREFUGBljmDVr1obZs2fLMOAATP////f/9+/fdaCiglWrVjGjq2OCCvAAFfV/+PDhJFChMbIimAKwGNA0YyA+CbR2AtA0HpAg48yZM/8j64CxGRkZnwAV56KYAJOE0UxMTP9ZYBwYDdT5F8ieIiAgUBMWFvYFRQFQ8iwQp6empp6FaYAp+AI0rpafn38yUBfIBDhgAerYCMQ5QF1P4KJIDABKuDtslB3wvQAAAABJRU5ErkJggg==) 100% no-repeat;
    background-size: .1rem .1rem; 
  }
}
.size-content{
   position: relative;
    margin-top: .4rem; 
    .size-name{
        width: 2rem;
        float: left;
        z-index: 100;
        position: relative;
        overflow: hidden;
        ul{
          box-shadow: 0.04rem 0 0.1rem 0.04rem hsla(0,0%,93%,.8);
          width: 2.4rem; 
          li{
            background: #f9f9f9;
            height: .8rem;
            width: 2.4rem;
            line-height: .8rem;
            font-size: .24rem;
            padding-left: .4rem;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          } 
        }
    }
    .size-table{
        z-index: 1;
        position: absolute;
        left: 2rem;
        width: 7rem;
        overflow: auto;
        .size-container{
            height: auto;
            position: relative;
            display: flex;
        }
        ul{
            overflow: scroll;
        }
        li{
            background: #f9f9f9; 
            min-width: .7rem;
            padding: 0 .1rem;
            font-size: .24rem;
            height: .8rem;
            line-height: .8rem;
            white-space: nowrap;
            display: block;
        }
    }
}
.pro-detail{
    position:relative;
    margin-top:2rem;
    h3{
        padding: .666667rem 0 .533333rem;
        color: #000;
        font-size: .48rem;
        font-weight: 700;  
    }
    .block-info{
        padding-bottom:.6rem;
        img{
            display:block;
            width:6.5rem;
            height:7rem;
        }
        .space{
            margin-bottom:.2rem;
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
                width: 6.8rem;
                margin: 0 auto;
                padding-bottom: 2rem;
                // .product-items:nth-child(odd){
                // }
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
.foot{
   z-index: 1000;
    position: fixed;
    bottom:0;
    left: 0;
    background: #fff;
    width: 7.5rem;
    height: 1.3rem;
    box-shadow: 0 -0.04rem 0.08rem 0 rgba(0,0,0,.05); 
    .left-area{
        width:1.5rem;
        float:left;
    }
    .shop-car{
        width: 2rem;
        height: 1.3rem;
        float: left;
        text-align: center;
        position: relative;
    }
    .btn-text{
            display: block;
            color: #666;
            font-size: .32rem;
        }
    .icon{
        display: block;
        width: .5rem;
        height: .45rem;
        margin: .24rem auto .06rem;
        position: relative; 
        img{
            z-index:10;
            width:.4rem;
            position:absolute;
            left:0;
        }
        
    }
}
.submit-btn{
    width: 6rem;
    height: 1.3rem;
    float: right;
    line-height: 1.3rem;
    font-size: .4rem;
    text-align: center;
    font-weight: 700;
    display: flex;
    justify-content: center; 
    span{
        display: block;
        position: relative;
        width:50%;
    }
    .join-btn::after{
        content: "";
        width: .013333rem;
        height: 1.306667rem;
        position: absolute;
        background-color: #e5e5e5;
        top: 0;
        right: 0;
    }
    .join-btn-t{
        color:#dd2828;
    }
}


</style>



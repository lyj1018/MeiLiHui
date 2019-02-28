<template>
    <div class = "shop-empty">
                <div class = "shop-list">
                    <h3><span>为你推荐</span></h3>
                     <div class = "pro-list">
                        <div class = "product-items"
                            v-for = 'list in lists'
                            :key = 'list.id'
                        >
                            <router-link :to= "{ name:'Detail',params:{id:list.id}}">
                                <div class ="pic">
                                   <img v-bind:src="list.img" alt="">
                                </div>
                               <div class = "product-icon">
                                    <div>
                                        <div class = "tag">
                                            <span class = "span-f">{{list.titleo}}</span>
                                            <span class = "span-l">{{list.titlet}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class = "product-info">
                                    <span class = "pro-brand">{{list.infoo}}</span>
                                    <span class = "pro-name">{{list.infot}}</span>
                                </div>
                                <div class = "pro-price">
                                    <div>
                                        <span class = "pro-price-f">{{list.priceo}}</span>
                                        <del class = "pro-price-del">{{list.pricet}}</del>
                                    </div>
                                    <div class = "discount">{{list.discount}}</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        
</template>

<script>
export default {
     name:'Shopcar',
    data(){
        return{
            lists:[
                {
                    id:1,
                    img:'https://cdn13.mei.com/product/V2T-401-00011/2caee052ccda06e22850bb5d66344b1e.jpg@300w_400h_2e_75q',
                    titleo:'欧洲直发',
                    titlet:'买手推荐',
                    infoo:'MARNI',
                    infot:'MARNI 红色牛皮女士斜挎包',
                    priceo:'￥14,371',
                    pricet:'￥17,900',
                    discount:'8.1折'
                },
                {
                    id:2,
                    img:'https://cdn13.mei.com/product/VAZ-112-00001/cbb8429dfaf546fee187e81117a5304e.jpg@300w_400h_2e_75q',
                    titleo:'欧洲直发',
                    titlet:'买手推荐',
                    infoo:'MARNI',
                    infot:'MARNI 红色牛皮女士斜挎包',
                    priceo:'￥14,371',
                    pricet:'￥17,900',
                    discount:'8.1折'
                },
                {
                    id:3,
                    img:'https://cdn15.mei.com/product/V1V-145-00015/0ddb1405d1e7d6b9e53cd243b5353c28.jpg@300w_400h_2e_75q',
                    titleo:'欧洲直发',
                    titlet:'买手推荐',
                    infoo:'MARNI',
                    infot:'MARNI 红色牛皮女士斜挎包',
                    priceo:'￥14,371',
                    pricet:'￥17,900',
                    discount:'8.1折'
                },
                {
                    id:3,
                    img:'https://cdn15.mei.com/product/V1V-145-00015/0ddb1405d1e7d6b9e53cd243b5353c28.jpg@300w_400h_2e_75q',
                    titleo:'欧洲直发',
                    titlet:'买手推荐',
                    infoo:'MARNI',
                    infot:'MARNI 红色牛皮女士斜挎包',
                    priceo:'￥14,371',
                    pricet:'￥17,900',
                    discount:'8.1折'
                },
                {
                    id:3,
                    img:'https://cdn15.mei.com/product/V1V-145-00015/0ddb1405d1e7d6b9e53cd243b5353c28.jpg@300w_400h_2e_75q',
                    titleo:'欧洲直发',
                    titlet:'买手推荐',
                    infoo:'MARNI',
                    infot:'MARNI 红色牛皮女士斜挎包',
                    priceo:'￥14,371',
                    pricet:'￥17,900',
                    discount:'8.1折'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .shopcar-box{
        overflow: hidden;
        overflow-y: auto;
        z-index: 999; 
            .shop-top{
                z-index: 9999;
                width: 100%;
                height: 1rem;
                position: relative;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                background-color: hsla(0,0%,100%,.95);
                    .shop-left,.shop-right{
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
    .shop-main{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: scroll;
        padding-top: 1rem;
        box-sizing: border-box;
            .empty{
                width: 100%;
                padding-top: 2rem;
                background: url(http://www.mei.com/static/img/shoppingcart-empty.2fb1458.png) top no-repeat;
                background-size: 2rem 2rem;
                    p{
                        text-align: center;
                        color: #999;
                        font-size: .3rem;
                            a{
                              border:.01rem solid #000;
                              display:block;
                              width:1.8rem;
                              height:.8rem;
                              margin:.2rem auto .8rem;
                              color:#000;
                              font-size: .3rem;
                              line-height: .8rem;
                              box-shadow: 0.01rem 0.01rem 0 0 #000, -0.01rem -0.01rem 0 0 #000;  
                            }  
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
                width: 7rem;
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




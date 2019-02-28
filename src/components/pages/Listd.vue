<template>
     <div class = "shop-main">
        <div class = "shop-empty">
            <div class = "shop-list">
                    <div class = "pro-list">
                    <div class = "product-items"
                        v-for = 'list in lists'
                        :key = 'list.id'
                    >
                        <router-link
                            :to= "{ name:'Detail',params:{id:list.id}}"
                        >
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
                        <!-- <a href="">
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
                        </a> -->
                    </div>                        
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name : 'Product',
    data(){
        return{
            lists:[
                {
                    id:9,
                    img:'https://cdn15.mei.com/product/GVS-405-00013/CB00034-1641701648668c.jpg?x-oss-process=image/resize,w_750/quality,q_50',
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
                    img:'https://cdn15.mei.com/product/FUB-401-00132/d31e06bb2599c9aca40cc09b549780ab0caeed8a6a607a83.jpg?x-oss-process=image/resize,w_750/quality,q_50',
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
                    img:'https://cdn14.mei.com/product/PE2-112-01632/f362efed9af83327d76aa21bda2e0a00.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                    titleo:'欧洲直发',
                    titlet:'买手推荐',
                    infoo:'MARNI',
                    infot:'MARNI 红色牛皮女士斜挎包',
                    priceo:'￥14,371',
                    pricet:'￥17,900',
                    discount:'8.1折'
                },
                {
                    id:4,
                    img:'https://cdn15.mei.com/product/PE2-112-01501/f362efed9af83327068f9e6b0544b965.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                    titleo:'欧洲直发',
                    titlet:'买手推荐',
                    infoo:'MARNI',
                    infot:'MARNI 红色牛皮女士斜挎包',
                    priceo:'￥14,371',
                    pricet:'￥17,900',
                    discount:'8.1折'
                },
                {
                    id:5,
                    img:'https://cdn12.mei.com/product/MS3-112-00903/dcd421a1ca43b507c01b03d86d58b98e.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                    titleo:'欧洲直发',
                    titlet:'买手推荐',
                    infoo:'MARNI',
                    infot:'MARNI 红色牛皮女士斜挎包',
                    priceo:'￥14,371',
                    pricet:'￥17,900',
                    discount:'8.1折'
                },
                {
                    id:6,
                    img:'https://cdn13.mei.com/product/MS3-101-00064/d871e3fd0152d9f17f7a0744628fe6cd.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                    titleo:'欧洲直发',
                    titlet:'买手推荐',
                    infoo:'MARNI',
                    infot:'MARNI 红色牛皮女士斜挎包',
                    priceo:'￥14,371',
                    pricet:'￥17,900',
                    discount:'8.1折'
                },
                {
                    id:7,
                    img:'https://cdn13.mei.com/product/JZU-409-01169/8b13c738e1967691113c815c3334ce49.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                    titleo:'欧洲直发',
                    titlet:'买手推荐',
                    infoo:'MARNI',
                    infot:'MARNI 红色牛皮女士斜挎包',
                    priceo:'￥14,371',
                    pricet:'￥17,900',
                    discount:'8.1折'
                },
                {
                    id:8,
                    img:'https://cdn14.mei.com/product/JZU-409-01232/8b13c738e196769150ec81ceb7224dc1.jpg?x-oss-process=image/resize,w_750/quality,q_50',
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

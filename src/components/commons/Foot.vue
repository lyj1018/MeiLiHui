<template>
    <div class = "foot-box">
        <a href="" class = "tel">400&nbsp;&nbsp;664&nbsp;&nbsp;6698</a>
        <nav>
            <a href="" class = "router-link">首页</a>
            <a href="" class = "external">客户端</a>
            <a href="" class = "external">登录</a>
            <a href="" class = "external">注册</a>
        </nav>
        <p class = "icp">浙ICP备16004860号-1</p>
   </div>
</template>
<script>

export default {
    
    
}
</script>

<style lang="scss" scoped>
    .foot-box{
        border-top: .013333rem solid #eee;
        width: 100%;
        margin: 0 auto;
        padding: .2rem 0 3rem;
        box-shadow: 0 -0.013333rem 0 0 #ccc;
            .tel{
                display: block;
                padding: .2rem 0 .24rem;
                text-align: center;
                font-size: .3rem;
                letter-spacing: .013333rem;
                color: #000;
            }
            .icp{
                padding: .2rem 0;
                text-align: center;
                font-size: .32rem;
                color: #666;
            }
    }
    nav{
        display: block;
        padding: .24rem 0 0;
        text-align: center;
        height:.3rem;
            a{
            display: inline-block;
            vertical-align: top;
            padding-left: .32rem;
            line-height: .32rem;
            color: #666;
            font-size: .32rem;
            }
            a:last-child:after{
                content: "";
            }
            a::after{
            content: "|";
            line-height: .266667rem;
            padding-left: .4rem;
            font-size: .266667rem;
            vertical-align: top;
            }
            
    }

</style>




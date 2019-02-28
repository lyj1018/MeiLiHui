<template>
    <div class = "mine-box">
        <div class = "mine-top">
            <div class ="mine-left">
                <a href="" class = "back">
                    <i style = "font-size:.4rem;" class="fa fa-long-arrow-left"></i> 
                </a>
            </div>
            <div class = "title">
                <span>个人中心</span>
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
        <div class = "main-top">
            <div class = "nav">
                <div class = "nav-link">
                    <div class = "nav-box">
                        <div class = "nav-item">
                            <a href="" class = "nav-list">
                                <span>头像</span>
                                <em></em>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "nav">
                <div class = "nav-link">
                    <div class = "nav-box">
                        <div class = "nav-item">
                            <a href="" class = "nav-list">
                                <span>昵称</span>
                                <em></em>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "nav">
                <div class = "nav-link">
                    <div class = "nav-box">
                        <div class = "nav-item">
                            <a href="" class = "nav-list">
                                <span>性别</span>
                                <em></em>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "nav">
                <div class = "nav-link">
                    <div class = "nav-box">
                        <div class = "nav-item">
                            <a href="" class = "nav-list">
                                <span>生日</span>
                                <em></em>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "nav">
                <div class = "nav-link">
                    <div class = "nav-box">
                        <div class = "nav-item">
                            <a href="" class = "nav-list">
                                <span>手机号码</span>
                                <em></em>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "nav">
                <div class = "nav-link">
                    <div class = "nav-box">
                        <div class = "nav-item">
                            <a href="" class = "nav-list">
                                <span>邮箱地址</span>
                                <em></em>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "nav">
                <div class = "nav-link">
                    <div class = "nav-box">
                        <div class = "nav-item">
                            <a href="" class = "nav-list">
                                <span>修改密码</span>
                                <em></em>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .mine-box{
        overflow: hidden;
        overflow-y: auto;
        z-index: 999; 
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
            
            .order{
                border-bottom: .01rem solid #000;
                width: 6.5rem;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                box-shadow: 0 0.01rem 0 0 #000;
                    .link{
                        display: block;
                        width: 50%;
                        height: 2rem;
                        color: #000;
                            span{
                                display: flex;
                                height: 1.3rem;
                                margin: .6rem 0;
                                text-align: center;
                                font-size: .3rem;
                                flex-direction: column;
                                justify-content: center;
                            }
                    }
                    .link:nth-child(odd){
                        border-right: .01rem solid #eee;
                        box-shadow: 0.01rem 0 0 0 #eee;
                    }
            }
            .nav-item::after{
                width: .10rem;
                height: .13rem;
                margin: -.06rem 0 0;
                content: "";
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAABGdBTUEAALGPC/xhBQAAAJtJREFUGBljSE9P35CbmyvDgAMw/f//3//Xr1/X09LSClatWsWMro4JJABUxAOk+vfu3XsyMzPTGFkRWAFMAKjQ+O/fvyeB1k7IysoCaWJgBBr9H6YAjX4C5OeimICmgIGRkfE/NgV/gRITWVhYNGfOnLmRBVkXUOIsExNT+vTp08/CxMEKgBJfgA6sdXZ2nhwWFvYXJgmmCQUUAH8IN76wIxebAAAAAElFTkSuQmCC) 0/100% 100% no-repeat;
                position: absolute;
                right:0;
                top: 50%;
            }
            .nav-item{
                border-bottom: .01rem solid rgba(0,0,0,.1);
                width: 6.5rem;
                margin: 0 auto;
                box-shadow: 0 0.01rem 0 0 rgba(0,0,0,.1);
                position: relative;
                    .nav-list{
                        display: block;
                        width: 6.5rem;
                        line-height: .6rem;
                        text-decoration: none;
                        padding:.2rem 0;
                            span{
                                font-size:.3rem;
                                color:#000;
                            }
                            em{
                                float: right;
                                padding: 0 .26rem 0 0;
                                font-size: .38rem;
                                font-style: normal;
                                color: #999;
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

</style>




<template lang="html">
  <div class="login-box">
    <div class = "login-mobile">
      <a href="" class = "close">X</a>
      <div class = "login-from">
        <h1>
          <router-link to="res">去注册</router-link>
          <!-- <span>注册即送2600元新人红包</span> -->
        </h1>
        <!-- <p class = "error">&nbsp;</p> -->
        <div class = "input-box">
          <div class = "input-item">
            <input type="text" placeholder = "账号" maxlength= "11">
          </div>
          <div class = "input-item">
            <input type="text" placeholder = "密码" maxlength= "20">
          </div>
        </div>
        <div class = "action">
          <div class= "sub">
            <div class = "default">
              <span>  </span>
            </div>
          </div>
        </div>
        <div class = "login-switch">
          <div>
            <!-- <a href="">通过验证码登录</a> -->
            <a href="" class = "psw">忘记密码</a>
          </div>
        </div>
      </div>
      <div class = "login-link">
        <p class = "login-items">
          <a href="" class= "tb">
            <span></span>
            <em>绑定淘宝</em>
          </a>
          <a href="" class= "zfb">
            <span></span>
          </a>
          <a href="" class= "wb">
            <span></span>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
  .login-box{
    overflow: hidden;
    overflow-y: auto;
    z-index: 999;
      .login-mobile{
        position: relative;
          .close{
            width: 1.2rem;
            height: 1.2rem;
            float: left;
            text-indent: -1000em;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAAhdJREFUWAnN2U1rwjAYB/Cm3kRh7DZ2m8Ozg53HEPapB2PsPNAPMI/ibQwUb+ryz0yJtU2el9ouIG3S5Hl+TS2mNcuOZTwe300mkytf72oLAyw+f46d0Wh0v9vtPtbr9WuXSOSGARaYYDPQouFwONy6BmM+h8Phy3w+/0G9reJx1vGInMaYZa/Xe8r7/f63ra88BB3ansky7mhZwWZQqepgz6CVmUzldsCukCkcXAWwbSQFdwZsC0nFVQIvjeTgaoGXQnJxUWDTSAkuCWwKKcWRgFqkBkcGSpFaHAvIRTaBYwOpyKZwImAKieNYbPhViUui+F0/+alDMGqpmqU8z2cWltnPg4+jXXSIgQBUIT0MWy3OxQgDSvaB3Gw2b/v9vpg1F9iYmV34TrULX7fkl8DCMbis5WJnr9wkqquAwSU+mT1IMKNNrMzFwADnniGAsrM2w42CfRTcyVqkCFiDwyPCdDAYTHFz/BH1SPYXJYIrngQpffwJpLYsICcxp28MSQZKEkrGlLEkoCaRZiywSaA2AZJoYkSBmsCAhUUaqxYoDRiiyvuSmJVASaAypq7OjX0G5Aaog8TaOTlOgJyBMQDlGDVXAaQOoCSn9qHkdEBKR2pSbr9UbpPqwE0o6R8z5Nvt9toGvfGBm1im+1jULVbdeO0croJggs1d4uML63fbuOri/bQ/ET+TwNnP82Kx+PLHsv/6N8QvF3UhvIkJO9cAAAAASUVORK5CYII=) 50% no-repeat;
            background-size: .5rem .5rem;
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            }
              .login-from{
                padding-top: 1rem;
                  h1{
                    padding-left: .9rem;
                    padding-bottom: .8rem;
                    color: #000;
                    font-size: .4rem;
                    font-weight: 100;
                      span{
                        display: block;
                        padding-top: .1rem;
                        color: #666;
                        font-size: .3rem;
                      }
                  }
                  .input-box{
                    width: 6rem;
                    margin: 0 auto .2rem;
                    box-shadow: 0 0.08rem 0.1rem rgba(0,0,0,.15), 0 -0.013333rem 0.133333rem;
                      .input-item{
                        width: 5.5rem;
                        height: 1.2rem;
                        margin: 0 auto;
                        position: relative;
                        border-bottom: .01rem solid #eee;
                          input{
                            width: 4.5rem;
                            padding: .6rem 0;
                            color: #ccc;
                            font-size: .3rem;
                            border: none;
                            background: transparent;
                            height:.02rem;
                            position:absolute;
                          }
                      }
                  }
                }
          }
    }
  .action{
      .sub{
        width: 6rem;
        height: 1.2rem;
        margin: 0 auto;
        box-shadow: 0 0.08rem 0.1rem;
          div{
            width: 6rem;
            height: 1.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            background: #ccc;
              span{
                width: .56rem;
                height: .56rem;
                font-size: 0;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJZJREFUeNrs2NEKwCAIBVAd/bf15S5hPe2xDC/cC8L2sh1sge1xd0GoR0BC6HGoqkpmzfSo3ee0zC7MTRBI+67jhb3cUgXS/+ko36jtYG931YklllhiiSUWH9virvAYamvqalI/xjPT4YwyAzfEzieSSCKJJJJITOTtoWQg/NHbAqYOztG9dYDY7aTWPolgDc6EpuQVYAAo4y/O+YeNZQAAAABJRU5ErkJggg==) 50% no-repeat;
                background-size: .56rem .56rem;
              }
          }
      }
  }
  .login-switch{
    margin:0 .7rem;
    // position: fixed;
    // top:7.5rem;
      a{
        display: inline-block;
        padding-right: .2rem;
        color: #666;
        font-size: .3rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAYAAACJxx+AAAAABGdBTUEAALGPC/xhBQAAAJtJREFUGBljSE9P35CbmyvDgAMw/f//3//Xr1/X09LSClatWsWMro4JJABUxAOk+vfu3XsyMzPTGFkRWAFMAKjQ+O/fvyeB1k7IysoCaWJgBBr9H6YAjX4C5OeimICmgIGRkfE/NgV/gRITWVhYNGfOnLmRBVkXUOIsExNT+vTp08/CxMEKgBJfgA6sdXZ2nhwWFvYXJgmmCQUUAH8IN76wIxebAAAAAElFTkSuQmCC) 100% no-repeat;
        background-size: .1rem .1rem;
        
        
      }
      .psw{
        margin-left:2rem;
      }
  }
  .login-link{
    // margin-top:2.8rem;
      p{
        text-align: center;
          a{
           
            display: inline-block;
            width: .9rem;
            height: .9rem;
            padding: .13rem .6rem .13rem .56rem;
            position: relative;
              span{
                display: block;
                width: 100%;
                height: 100%;
              }
              em{
                width: 1.68rem;
                height: .5rem;
                margin-left: -.84rem;
                text-align: center;
                line-height: .5rem;
                white-space: nowrap;
                color: #fff;
                font-size: .32rem;
                background: rgba(0,0,0,.5);
                position: absolute;
                left: 50%;
                bottom: -.6rem;
              }
              em::after{
                content: "";
                margin-left: -.106667rem;
                border-left: .133333rem solid transparent;
                border-right: .133333rem solid transparent;
                border-bottom: .213333rem solid rgba(0,0,0,.5);
                position: absolute;
                top: -.213333rem;
                left: 50%;
              }
          }
          .tb{
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNTA0NTJENEM4MUMxMUU3ODlEM0VCQjZERkYwQjNFRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNTA0NTJENUM4MUMxMUU3ODlEM0VCQjZERkYwQjNFRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2OTQ5MjdGQzgxQzExRTc4OUQzRUJCNkRGRjBCM0VFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2OTQ5MjgwQzgxQzExRTc4OUQzRUJCNkRGRjBCM0VFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4Xr94AAABWdJREFUeNrsW3uIV0UU3t+u62NLXU1NMx+5rkjqFpoFqRFakrJpiqlQWspGpoSI9meRIkTYw8LEKMEgpUUN8m2+0MpHtQk+SlQ0FzeTtczHrs/d7Rz8fjRNM3Pn3jv3bsIc+GDnzrkz934z97zmt5mGhoYcL/9IrqfAE+IJ8YR4QjwhnhBPiCfEE+IJ8YR4Qm5/aWLqzGQypu58Qm+M8TPhmkF3CaGIsImwmXCosV44MLtnBR000pwwj3CFbweuE94ntFToFxAuCLqM04SlhPGEvLQJMSFjYkyzQ1YTxmpu2UkYRqgTrr1AWKbRryA8FPAOTQmdCfcSWqHdjHCV8CehmnCccKMxdkiptNIqTJXu+d6gWyro8U4pIUwmvEfYTjhDqLeYkz/X/YS3CQ/H2SFhCXnH4uE+E/QHGfS+I/QnzCasVXxWcbCb8HgahMy3eJiPBf0dBr26CC9aQ6gknMOuMOnyznpX9qSuCRli8dBZ+zIq5iqfwG4rIwwgtFM8Tz/CGyBIN87iJAlhWWiYfLngzn8JScBN2I0ZMKBh5D7CQcPYzyZJCMvziD3qsDXZyr8ibM/pIcnYj90XR0oMBvhE9tmSIkSMMe5UrNZfET+T7TFJ+cow9qM2hEQJ3ZsJf9cSLkvR6xeE1pp7d2D31Gr6F8UkpMLQ90ASucwIwmEYOVnyYENUccBveKChCMQKFDqfEr6MScgpQ19x7FxGkpbISbrCz8+SLPibovES5CKIPIBtO0Whc56wjjA8IhFVWKiLBp3usWN7xXaWv8tlyG2y5L5K+EOKIIcKn9NBh8GXiKWYY4xBZ59LozrYYMG/JbQRdNsSPgAZE4XrbyVEhi0hv7okZCaSJ91kvPIdpB3VVvj7MUVkyu1LgClqvSHo6fCRBSE1rt0u+/k9hgn5G75b8VV2I5yVdLlc8LSgc9gi2LORMQE7Kc91HJKLAEwXZ2xR3LNCEZHKxjctQlonFZh1RLyhmvRFSZdrGF8LZExUjJcWIZ2TCMxYfseLvQxjK8ooqc1B2Gh4JCZrFTySiKBYqUkAbN8jz6Xb1cl8Rd7wrylSwCLLHdI9qR0iymKpXXc7nzK4IKRaap/5HxNS7zJ018kjUvuo1B7I9eqAMcqRJauEjy1eN2TbtXDrNnIlDUJek9pbpfaPMR+UU4EfhHZPGOlnEBt1CchhQhES16hOUNQx26OvCFFkjQIvRXS7ExT9M0K43fwkjWofpOyi7BVsShGKRwUKnI845x7FtWmW9163ObuJSgiH6GsU1bJyqVygk3MR561U2Ki+OO4IEqs5oxDCJGwg9JCuX5O2d4Nl1c1WMqjAd4i4S6qTIKQFDpX6K/qWS6tQZRhnZIg5+RObivLgJ4RChQ7nRne5ICSMUeVV3WQ4dOol6Rfiu9UdInF0+QTc7REH0eoceB9d/wqX6T9XxTYaJivX8L0+gTCdD69+Ulw/RnjOcN9cV4QUCNmqDrqK9hBkuC6IqBDKkfMU/d8ggdTdP9oFIZy67wp40HUWgVtUEthQr1QUn7NHqpdQ+C6BfavUjHM1a2PiErLa4qFtXN4gxChBY13ASn+IFdW57nyc77QSPNASw7if29hMG0LuICww1FN3hfRSnbC6fCzxFOHJnFs/W7hfKlTLwj+ZGJfz3zPfDMjeEFBLLXZFiHjqpVrhkTnJS6FUhK5CxHpIUatVoczWq4YtIeZim2brqQdSStlLY9ifsjBhRtSaaie42UkpEbIgJBH1MPS9w8ZdUX90l7YUw90+iISRf4B3D0oXN4FTKDMwthFOmgJRY37g/yvTfQnRE+IJ8YR4Qrx4QjwhnhBPiCfEE+IJ8YQ0svwtwAATRbwCo6lKegAAAABJRU5ErkJggg==) 50% no-repeat;
            background-size: auto;
            background-size: .7rem .7rem;
          }
          .zfb{
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNTA0NTJEOEM4MUMxMUU3ODlEM0VCQjZERkYwQjNFRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNTA0NTJEOUM4MUMxMUU3ODlEM0VCQjZERkYwQjNFRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM1MDQ1MkQ2QzgxQzExRTc4OUQzRUJCNkRGRjBCM0VFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM1MDQ1MkQ3QzgxQzExRTc4OUQzRUJCNkRGRjBCM0VFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6+13JgAAA5xJREFUeNrsmluITVEYx88xmjERZlBTIiGXjAdeDolpeFBySwmTxjzIA5GElAeKiCeSEuKBh3FKcueBFKHcdVBTymVcYozhYBhz5viv+g673drXtdbZx5nvq9/L2WevvfZ/feu7rHPi2Ww2xvbPerAELAgLwoKwICwIC8KCsCAsCAvCgrAgRWCi23XCkO0DGfFoG+8L4Z2j8JDaQvZM3jIsCAvCgqhYT4V7x4NxIe7r5/B5L7A45FxSRKRpd5skdUbFlv857Ra0xd08IR6Pu93bhwhq18BoyecttA3D2DfCt4eYiCGBJmGxTofPM/msVjnLsCD5jyE56w1eBHhmBSiRbW3wKcA4p8CKsJnVRAz5qxsYGME4VwvVQ8RqzzLkwXUOxdovMAikdXtIFOchQeyeQyF2tpjOQ/zaGDDR4drJ7phl6lzqmDOF2NzlrIpWU+zp3xa+gGYqtjIBxxRxqd7h2kXQamwZQsSQUrAQXABtPhovEQCfgiRYByaDMo9pLXUZb5LRdw4oiIj4HzR0pz/BJbAKDJWk3ycO91027gQ+BRFb67jB9v0u2ARGggUu35tiWhC/dchR0GC7LOLDTfCWVrw/ISrRwWCsQ0XqZe2g3KEQm6FLEJUY0mBbpcdgto/nltN+XwlOUBGl4kU1eYmbHoKIl3pjmdROhVQtjgjng2PgawhBroPV5H2RCbLIMqFDGpNbX7AWPA8hTBe4DTaCUfkWpJEmkaaXMFEYzgOvFbaSSOk7QIIylFFBmuihRwxWpEto1XVkKxHgD1CzWWZCkFzhtdWQGDNBh6FUnqaeZ5n9WEFFkBYa/LABMRJ0Jit7mc9UDSdj8n8KBKWTgvIGEXdUBElZXLFEoxhT6XTMqYqdZvnuCLAffNfkOU0qguyxDLRGkxjLqb+RTbaDUrPMKsFm8E5RkGcqgiQsA4kVmq7YFZ/26G/m+BinlOLCg5CCpFR7mUbbpNf76FbtK7vdo1JtDVmW15LIQeLMI1VBqiQF1EuwiyYkq0+GUTpNkoiuK0ZxQsVEU7jXZwV8X0e3Oxy88nD3ZqI9QOTf7dDImayA7+g6D6mgJk1HpD8PJhgs9kQFPBdckTz7ls4DohgF1nMhqsuP1A+ZFEJm1eAg+EHzuKHjPERmQyiG1NCZ6gCqCLvoPLWNSv+Hwk2pMMrEorNKSvnVeOf6UD9UdUfjH7tZEBaEBWFBWBAWhAVhQVgQFoQFYUGKwP4IMACWRquaqvmkSgAAAABJRU5ErkJggg==) 50% no-repeat;
            background-size: .7rem .7rem;
          }
          .wb{
            background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNjk0OTI3OUM4MUMxMUU3ODlEM0VCQjZERkYwQjNFRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNjk0OTI3QUM4MUMxMUU3ODlEM0VCQjZERkYwQjNFRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2OTQ5Mjc3QzgxQzExRTc4OUQzRUJCNkRGRjBCM0VFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2OTQ5Mjc4QzgxQzExRTc4OUQzRUJCNkRGRjBCM0VFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8jd7vwAABP1JREFUeNrsW2mITlEYns82YwlDtrE31omSvWSJlET5o4iSCdmLZPvBH2u2/BEpkRKKKISxZ2rsYzAxTZjBjHVkG7vP+9YznE53ee/97r3f0Hnrycy9Z33ue97tjFg8Hk8x8ldqGAoMIYYQQ4ghxBBiCDGEGEIMIYYQQ4gh5N+XWpJGsVgs2evMJiwgtCDUxLo5TX9OKCOUEnIJFwlFdoOIMntu5IYkyyhsXorbhKmEOr72+g8QMsEjIVW4Q+j1PxLCx+OAT1I+E4Z7ISQm2XA1sCEsrQn1cBQaENoQOhMGEEYS6tv0+0Tozbblf7EhEkkjTCSU2GjKueqkIeza+xMG4ovyl3xGOA2vEKSwBm0izLR415/2ei2ZGtIOiytzOOP7pa6fZA6hHHbhLeEKYREhQ/9+hMMWc21JllFtRdhF+C40fLOF4+606f+GMFRry1r4WGt3NRmEzCe89+gJcj2M3xhGNQM24zbGqCS01dou0+apiJIQtvoHfbrG0gSN6XmMs1N7N0Cb51dUhHQh3PNJBuO1Nl4zwkLCBcIjwjto0UKE7br0xDjl2vN0bZ6PURAyEguOJwC2NVmEQdCybw5tL9gY4SK8b6Z5HLXvi7AJ4WDnQ4Jk+MFyi7Xk4V2mZtzVfgWSvfpN/9sTjsN2RC2TLZ5VKlFplXTQ2hQGlv5bWPoThJaCthwz5BOuYUEViCG+4Iw3BbkDYQTTBWNmWjz7CeP8QnnWTWtzVbQ7H0fmlItK81faRxhNqO2B6BhsEidyXx3Gf2WjsZ21Z0u0fj3DsCFTXIhYCw1KVDo5EL9HOMYYpc+BMNL/xnCRVos8BiMWtMzj+EGba5THWgqH/KlhELLCgogfhMVQdzvhCHIu8pZc5CBHkYBlCDala2WJEqOUwz6tJNQNxDwICalvox3ZDvM3JOx2yWn46x9CrdRJdgkrZGlRETJWGA+o0Wuhh9iiGAUgO2kijHkWR0XIVm3imw5XGJlwrU4Lvw9PpD477qIlhwWEnIyKkHxt4mEO854RLLyqznlXe97JpR4iqbgnRIg0Um2u/PzcodLFwdAI5feXhPHwUKw5O6rWpv37p6rlsIYvgnXWjOSiSrPgORYbUVNuVWbAo6QgCWTP0pWwjXCD0MPDTWKaYJ0PoyLkh/Lze5f6qVv+UIgj183i3S2HsYcI1pmXKCHSI1Mg7FNgoSH60Rtn0zcXdRW74rEkIDuZcCgoNKobFMOV7zLkFc3Q5cAdrkfyZWUMKy2OjyqrBAY1L5C9Cgnpq03e0WHeLIcQ3wpPCf0cxusBg+o2zuAoCWG5rEx+xGXu7ki3JXGDU5TaAYS5jbMusNPggZDhWqI1TZDOsxtdjUDuGa4GLhHWoOKW4qIZxQIyTkhtYRjp/2YtD5kVUlUsG3bFjQwO7BoFai89EpKKoEy/fQsq9R8CbyOxPTleay9hFZk58z2rLY6Dro02sYWkJDkdR0lqiLf7KX+GedldFwnfdIvmN/GV2Q0+QB21Auc8HZlrJjxLP0S3qcI9cflwKcoBvkKMMGqqqnBZoCyCqwe+q9nkxV5EeWSstGW+0D16xUfCXuQ/0QShAV5210F4zYnbkwRv8tiVTkqx/6ug0AgJ8w9m+FqgD5AFT5QBtY8riWIZtIvzoOsIAF+H4ctFezX/K9NftmsIMYQYMYQYQgwhhhBDiCHEEGIIMYQYQqqx/BZgAGgV3Xx8HLuVAAAAAElFTkSuQmCC)50% no-repeat;
            background-size: .7rem .7rem;
          }
      }
  }
</style>


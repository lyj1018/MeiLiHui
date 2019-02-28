<template lang="html">
    <div class = "content">
        <div class = "item">
            <div class = "event-item"
                v-for = "list in lists"
                :key= 'list.id'
            >
                <router-link to='product'>
                <img v-bind:src = "list.img" alt = "dolce & gabban 都市奢华鞋履专场 ">
                    <div class = "event-info">
                        <div class = "event-icon">
                        <span>{{ list.sea}}</span>
                        </div>
                        <div class = "event-base">
                        <span class= "event-brand">{{list.brand}}</span>
                        <span class = "event-name">{{list.name}}</span>
                        <span class = "event-discount">{{list.discount}}</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        </div>
</template>

<script>
export default {
  name: 'List',
  data(){
      return{
          lists:[
              {
                  id:1,
                  img:'https://cdn14.mei.com/category/20181218/938d2fed24d6c4a2f4508974ee23e0fcd72eb86efc6c943a.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                  sea:'海外直发',
                  brand:'岁末清仓专场折上6折',
                  name:'穿衣指南【跨境】',
                  discount:'4.1折'
              },
              {
                  id:2,
                  img:'https://cdn14.mei.com/category/20181218/938d2fed24d6c4a27a256d329f760449ce6dc3676f54cd06.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                  sea:'海外直发',
                  brand:'岁末清仓专场折上6折',
                  name:'穿衣指南【跨境】',
                  discount:'4.1折'
              },
              {
                  id:3,
                  img:'https://cdn14.mei.com/category/20181218/938d2fed24d6c4a2d44c1bf1101ee6d3e15d3cf3671d4998.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                  sea:'海外直发',
                  brand:'岁末清仓专场折上6折',
                  name:'穿衣指南【跨境】',
                  discount:'4.1折'
              },
              {
                  id:4,
                  img:'https://cdn14.mei.com/category/20181218/938d2fed24d6c4a28ed05b7bb9e200b278124244265805bc.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                  sea:'海外直发',
                  brand:'岁末清仓专场折上6折',
                  name:'穿衣指南【跨境】',
                  discount:'4.1折'
              },
              {
                  id:5,
                  img:'https://cdn14.mei.com/category/20181218/938d2fed24d6c4a2f4508974ee23e0fcd72eb86efc6c943a.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                  sea:'海外直发',
                  brand:'岁末清仓专场折上6折',
                  name:'穿衣指南【跨境】',
                  discount:'4.1折'
              },
              {
                  id:6,
                  img:'https://cdn14.mei.com/category/20181218/938d2fed24d6c4a2f4508974ee23e0fcd72eb86efc6c943a.jpg?x-oss-process=image/resize,w_750/quality,q_50',
                  sea:'海外直发',
                  brand:'岁末清仓专场折上6折',
                  name:'穿衣指南【跨境】',
                  discount:'4.1折'
              }
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
    .content{
        margin-top :.5rem;
        width :100%;
          .event-item{
            width: 100%;
            height: 4rem;
            overflow: hidden;
            margin: 0 auto .266667rem;
            position: relative;
              a{
                color:#fff;
                display:block;
                width :100%;
                height: 100%;
              }
              img{
                display: block;
                width: 100%;
                height: 100%;
              }
              .event-info{
                width: 9.2rem;
                height: 2.76rem;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-content: flex-end;
                align-items: flex-end;
                position: absolute;
                left: 0;
                bottom: 0;
                background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.55));
                  .event-icon{
                    height: .3rem;
                    overflow: hidden;
                    margin-bottom: .1rem;
                    width: 100%;
                    height: auto;
                    padding-left: .2rem;
                    text-align: left;
                      span{
                        display: inline-block;
                        height: .3rem;
                        padding: 0 .04rem;
                        line-height: .3rem;
                        color: #000;
                        font-size: .2rem;
                        background-color: #fff;
                      }
                  }
              }
          }
    }
.event-base{
    padding-bottom:.1rem;
    width: 100%;
    height: auto;
    padding-left: .2rem;
    text-align: left;
      span{
        display: block;
        margin-bottom: .1rem;
      }
      .event-brand{
        text-transform: uppercase;
        line-height: .4rem;
        font-size: .4rem;
      }
      .event-name, .event-discount{
        height: .3rem;
        line-height: .3rem;
        font-size: .3rem;
      }
  }
</style>

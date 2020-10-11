<template>
  <div class="order-box1">
  <personal-centerorder-header :title="'个人中心'" :small="'请谨防钓鱼链接或诈骗电话，了解更多>'"></personal-centerorder-header>
  <div class="more clearfix">
    <ul class="filter-list">
      <li v-for="(item,index) in orderText" :key="index" @click="goto(item.type)">
        <a href="#">{{item.name}}</a>
      </li>
    </ul>
   <div class="header-search">
        <div class="wraper">
          <input type="text" name="keyword" />
          <a href="#"></a>
        </div>
      </div>
  </div>
  <div class="box-bd">
<ul class="order-list">
    <li class="uc-order-item" v-for="(item,index) in list " :key="index">
      <div class="order-detail">
        <div class="order-summary">
          <span>等待付款</span>
        </div>
        <div class="order-detail-table">
          <div class="theaer">
            <div class="theaer-left">
            <p>{{item.createTime}}<span>|</span>
            {{item. userName}}<span>|</span>
            {{ '订单号 '+item.orderId}}<span>|</span>
            {{ '在线支付 '}}
            </p>
          </div>
          <div class="theaer-right">
            <p>应付进而: <span class="num">{{'599.00'}}元</span></p>
          </div>
          </div>
          <div class="order-tbody">
            <div class="order-items">
              <ul class="goods-list">
                <li v-for="(item1,index1) in item.chlidClass" :key="index1">
                  <img v-lazy="item1.imgUrl" alt="" srcset="">
                  <div>
                    <p>{{item1.goodName}}</p>
                    <p>{{item1.specificationName}}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="order-actions">
              <a :href="'/#/order/pay?orderId='+item.orderId" v-if="item.orderType==1"  class="btn btn-none">立即付款</a><br>
              <a href="/#/order/list" class="btn btn-none">订单详情</a><br>
              <a href="#" class="btn btn-none">联系客服</a><br>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
  </div>
  </div>
</template>
<script>
import personalCenterorderHeader from "./../../../components/content/personalCenterorder/personalCenterorderHeader"
import {GetPersonal} from "./../../../network/order"
export default {
  name: "coupon",
  data(){
    return{
      orderText:[{name:'全部有效订单',type:null},{name:'待支付',type:1},{name:'待收货',type:2}],
      list:{},
      page:1,
      big:1,
      type:1,
    }
  },
   components: {
personalCenterorderHeader
  },
  mounted () {
    this.go();
  },
  methods: {
    goto(index){
       GetPersonal(1,1,index).then(res=>{
this.list=res;
      })
    }
    ,
    go(){
      GetPersonal(this.page,this.big,this.type).then(res=>{
this.list=res;
      })
    }
  }
 
};
</script>
<style lang="scss" scoped>
@import "./../../../assets/scss/config.scss";
@import "./../../../assets/scss/mixin.scss";
.order-box1{
 .clearfix{
&::before{
  content: '';
  display: table;
}
&::after{
  clear: both;
}
}
.filter-list{
float: left;
    margin: 0;
    padding: 18px 0;
    list-style-type: none;
    font-size: 16px;
    line-height: 1.25;
    li{
          float: left;
    padding: 0 20px;
    border-left: 1px solid #e0e0e0;
    color: #757575;
    &:first-child{
       border-left: 0;
    }
    a{
      color:#757575;
    }
    }
}
 .header-search {
   float: right;
    width: 264px;
    margin-top: 8px;
    .wraper {
      height: 42px;
      border: 1px solid #e0e0e0;
      // display: flex;
      // align-items: center;
      @include flex(start, center);
      input {
        border: none;
        border-right: 1px solid #e0e0e0;
        width: 214px;
        height: 42px;
        padding-left: 14px;
        box-sizing: border-box;
      }  
       a {
        //背景图片样式
        @include bgImg(
          18px,
          18px,
          "/imgs/icon-search.png"
        );

        margin-left: 17px;
      }
 }}
 .order-list{
   .uc-order-item{
     margin-bottom: 20px;
     .order-detail{
 border: 1px solid #e0e0e0;
    .order-summary{
      background:#fffaf7;
      padding: 25px 30px 1px;
          color: #ff6700;
          span{
            display: inline-block;
            font-size: 18px;
          }
    }
    .order-detail-table{
          padding: 25px 30px;
          background:#fffaf7;
        .theaer{
          display: flex;
          justify-content: space-between; 
           font-weight: 400;
    text-align: left;
    color: #757575;
          p{
                margin: 0;
                .num{
                      height: 18px;
    margin:0 5px;
    font-size: 28px;
    font-weight: 200;
    line-height: 1;
    color: #333;
                }
          }
        }
        .order-tbody{
            display: flex;

          .order-items{
            padding: 10px 30px;
            flex:1;
            .goods-list{
              li{
                img{
                  width: 40px;
                  
                }
                div{
                  display: inline-block;
                }
              }
              margin: 0;
    padding: 10px 0;
    list-style-type: none;
    li{
      position: relative;
    height: 44px;
    margin: 10px 0;
    padding: 18px 18px 18px 100px;
    line-height: 22px;
    color: #333;
    }
            }
            
          }
          .order-actions{
              padding: 20px 30px 0;
    text-align: right;
    .btn{
    margin: 0 0 10px 0;
    }
            }
        }
    }
     }
   
   }

 }
}
</style>
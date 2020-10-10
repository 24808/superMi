<template>
  <div class="cart">
    <order-header :title="'我的购物车'">
      <template slot="tip">
        <span>温馨提示：唱片是否购买成员，一最终解释权</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <li class="col-1">
              <span
                class="checkbox"
                :class="{ checked: allChecked }"
                
              ></span
              >全选
            </li>
            <li class="col-3">商品名称</li>
            <li class="col-1">单价</li>
            <li class="col-2">数量</li>
            <li class="col-1">小计</li>
            <li class="col-1">操作</li>
          </ul>
          <ul class="cart-item-list">
            <li class="cart-item" v-for="(item, index) in list" :key="index">
              <div class="item-check">
                <span
                  class="checkbox"
                  :class="{ checked: item.ischeck }"
                  @click="updateCart(item)"
                ></span>
              </div>
              <div class="item-name">
                <img v-lazy="item.productMainImage" alt="" />
                <span>{{ item.goodName + "," + item.specificationName }}</span>
              </div>
              <div class="item-price">{{ item.price  }}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="updateCart(item, '-')">-</a>
                  <span>{{ item.amount  }}</span>
                  <a href="javascript:;" @click="updateCart(item, '+')">+</a>
                </div>
              </div>
              <div class="item-total">{{ item.price * item.amount }}</div>
              <div class="item-del" @click="delProduct(item)"></div>
            </li>
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/#/index">继续购物</a>
            共<span>{{ list.length }}</span
            >件商品，已选择<span>{{ count }}</span
            >件
          </div>
          <div class="total fr">
            合计：<span>{{ qian }}</span
            >元
            <a href="javascript:;" class="btn" @click="order">去结算</a>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from "./../../../components/content/order/orderHeader";
import NavFooter from "./../../../components/content/homeNav/NavFooter";
import {
  getCartList,
  UnSelectAll,
  SelectAll,
  updateCart,
  delProduct,
  jianCart,fanCart,ShiooingCarDelect,ceshi,
  GetSettlementsList
} from "./../../../network/cart";
export default {
  name: "cart",
  components: { OrderHeader, NavFooter },
  data() {
    return {
      list: [], //商品列表,
      allChecked: false, //是否全选
      cartTotalPrice: 0, //金额
      checkedNum: 0, //商品数量
      qian:0,//钱
      count:0,//几件商品
    };
  },
  mounted() {
    this.getCartList();
  },
  methods: {
    order() {
      let isCheck = this.list.every((item) => !item.ischeck);
      if (isCheck) {
        // alert("请选择一件商品");
        this.$message.warning("请选择一件商品");
      } else {
        this.$router.push("/order/confirm");
        return
        GetSettlementsList(this.list).then(res=>{
          alert(res);
          // this.$router.push("/order/confirm");
        })
        // this.$router.push("/order/confirm");

      }
    },
    //删除
    delProduct(item) {
      ShiooingCarDelect(item.goodId).then((res) => {
         this.list=res;
        this.max();
      });
    },
    // 更新购物车数量和单选状态
     updateCart(item, type) {
      // let quantity = item.quantity,
      //   selected = item.productSelected;
      if (type == "+") {
        jianCart(item.goodId,1).then(res=>{
          this.list=res;
        this.max();

        });
      
        quantity = quantity++;
      } else if (type == "-") {
 if (item.amount == 1) {

          this.$message.warning("商品至少表刘一件");
          // alert("商品至少表刘一件");
          return;
        }
             jianCart(item.goodId,0).then(res=>{
          this.list=res;
      this.max();

        });
       
      } else {
        //单选
         fanCart(item.goodId).then(res=>{
          this.list=res;
          this.max();

        });
      }
      // updateCart(item.productId, quantity, selected).then((res) => {
      //   this.renderData(res);
      // });
    },
    //全选和反选
    toggleAll() {
      if (this.allChecked) {
        UnSelectAll().then((res) => {
          this.renderData(res);
        });
      } else {
        SelectAll().then((res) => {
          this.renderData(res);
        });
      }
    },
    //合计(){}
    max(){
      let qian=0;

let arr= this.list.filter(x=>{
  return x.ischeck
});
this.count=arr.length

arr.map(y=>{
  qian+=(y.price*y.amount)
})
// alert(qian)
this.qian=qian
    },
    //抽取s
    renderData(res) {
      //购物车数据
      this.list = res.cartProductVoList || [];
      //是否全选
      this.allChecked = res.selectedAll;
      //  金额
      this.cartTotalPrice = res.cartTotalPrice;
      //商品数量
      this.checkedNum = this.list.filter((item) => item.productSelected).length;
    },
    getCartList() {
      getCartList().then((res) => {
        // this.renderData(res);
        this.list=res;
        this.max();
      });
    },
  },
};
</script>
<style scoped lang="scss">
.cart {
  .wrapper {
    background-color: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 114px;
    .cart-box {
      background-color: #fff;
      font-size: 14px;
      color: #999999;
      text-align: center;
      .checkbox {
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px solid #e5e5e5;
        vertical-align: middle;
        margin-right: 17px;
        cursor: pointer;
        &.checked {
          background: url("/imgs/icon-gou.png") #ff6600 no-repeat center;
          background-size: 16px 12px;
          border: none;
        }
      }
      .cart-item-head {
        display: flex;
        height: 79px;
        line-height: 79px;
        .col-1 {
          flex: 1;
        }
        .col-2 {
          flex: 2;
        }
        .col-3 {
          flex: 3;
        }
      }
      .cart-item-list {
        .cart-item {
          display: flex;
          align-items: center;
          height: 125px;
          border-top: 1px solid #e5e5e5;
          font-size: 16px;
          .item-check {
            flex: 1;
          }
          .item-name {
            flex: 3;
            font-size: 18px;
            color: #333333;
            display: flex;
            align-items: center;
            img {
              width: 80px;
              height: 80px;
              vertical-align: middle;
            }
            span {
              margin-left: 30px;
            }
          }
          .item-price {
            flex: 1;
            color: #333333;
          }
          .item-num {
            flex: 2;
            .num-box {
              display: inline-block;
              width: 150px;
              height: 40px;
              line-height: 40px;
              border: 1px solid #e5e5e5;
              font-size: 14px;
              a {
                display: inline-block;
                width: 50px;
                color: #333333;
              }
              span {
                display: inline-block;
                width: 50px;
                color: #333333;
              }
            }
          }
          .item-total {
            flex: 1;
            color: #ff6600;
          }
          .item-del {
            flex: 1;
            width: 14px;
            height: 12px;
            background: url("/imgs/icon-close.png") no-repeat center;
            background-size: contain;
            cursor: pointer;
          }
        }
      }
    }
    .order-wrap {
      font-size: 14px;
      color: #666666;
      margin-top: 20px;
      height: 50px;
      line-height: 50px;
      .cart-tip {
        margin-left: 29px;
        a {
          color: #666666;
          margin-right: 37px;
        }
        span {
          color: #ff6600;
          margin: 0 5px;
        }
      }
      .total {
        font-size: 14px;
        color: #ff6600;
        span {
          font-size: 24px;
        }
        a {
          width: 202px;
          height: 50px;
          line-height: 50px;
          font-size: 18px;
          margin-left: 37px;
        }
      }
    }
  }
}
</style>

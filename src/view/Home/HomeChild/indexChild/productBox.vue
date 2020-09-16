<template>
  <div class="product-boxBig">
    <div class="container">
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
            </a>
          </div>

          <div class="list-box">
            <div class="list" v-for="(item, index) in phoneList" :key="index">
              <div v-for="(arr, index1) in item" :key="index1">
                <!-- <a :href="'/#/product/'+arr.id"> -->
                <a href="#0">
                  <div class="item">
                    <span v-if="index1 % 2 == 0" class="new-pro">新品</span>
                    <span v-else class="kill-pro">爆款</span>
                    <div class="item-img">
                      <img v-lazy="arr.mainImage" alt />
                    </div>
                    <div class="item-info">
                      <h3>{{ arr.name }}</h3>
                      <p>{{ arr.subtitle }}</p>
                      <p class="price" @click="addCart(item.id)">{{ arr.price | currency }}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //  @submit自定义事件，接收子组件的事件 -->

    <Modalstate
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalTyoe="middle"
      :showModal="showModal"
      @submit="goToCart"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </Modalstate>
  </div>
</template>
<script>
//请求
import { getProductsList,getgood } from "./../../../../network/home";
//模态框逐渐
import Modalstate from "./../../../../components/common/Modalstate";
export default {
  name: "productBox",
  components: {
    Modalstate,
  },
  data() {
    return {
      adsList: [
        { id: 33, img: "/imgs/item-box-4.jpg" },
        { id: 48, img: "/imgs/item-box-4.jpg" },
        { id: 45, img: "/imgs/item-box-4.jpg" },
        { id: 47, img: "/imgs/item-box-4.jpg" },
      ],
      phoneList: [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
      ],
      showModal: false,
    };
  },
  mounted() {
    this.intit();
  },
  filters: {
    currency(val) {
      if (!val) return "$0.00元";
      return "￥" + val.toFixed(2) + "元";
    },
  },
  methods: {
    goToCart() {
      //路由跳转
      this.$router.push("/login");
    },
    intit() {
      getProductsList().then((res) => {
        res.list = res.list.slice(6, 14);
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
      });
    },
    addCart(id) {
      this.showModal = true;

       getgood(id).then((res) => {
        this.showModal = true;
      })
      .catch((res) => {
        // alert(res); 
        this.$router.push("/#/login")
        // this.showModal = true;
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "./../../../../assets/scss/base.scss";
@import "./../../../../assets/scss/config.scss";
@import "./../../../../assets/scss/mixin.scss";
.banner {
  margin-bottom: 20px;
  padding-top: 20px;
}
.product-box {
  // background: $colorJ;
  padding: 30px 0 50px;
  h2 {
    font-size: $fontF;
    height: 21px;
    color: $colorB;
    line-height: 21px;
    margin-bottom: 20px;
  }
  .wrapper {
    display: flex;
    .banner-left {
      margin-right: 16px;
      img {
        width: 224px;
        height: 619px;
      }
    }
    .list-box {
      flex: 1;
      .list {
        @include flex(space-around);
        margin-bottom: 14px;
        &:last-child {
          margin-bottom: 0px;
        }
        .item {
          flex: 1;
          height: 302px;
          width: 236px;
          background: $colorG;
          text-align: center;
          span {
            display: inline-block;
            width: 67px;
            height: 24px;
            font-size: 14px;
            line-height: 24px;
            color: $colorG;
            margin-top: 5px;
            &.new-pro {
              background: #7ecf68;
            }
            &.kill-pro {
              background: #e82626;
            }
          }
          .item-img {
            img {
              height: 195px;
              width: 100%;
            }
          }
          .item-info {
            h3 {
              font-size: $fontJ;
              color: $colorB;
              line-height: $fontJ;
              font-weight: bold;
            }
            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price {
              color: #f20a0a;
              font-weight: bold;
              font-style: $fontJ;
              cursor: pointer;
              &:after {
                content: "";
                vertical-align: middle;
                @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

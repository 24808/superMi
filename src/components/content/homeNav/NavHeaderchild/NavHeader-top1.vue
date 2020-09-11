<template>
  <div class="nav-topbar">
    <div class="container">
      <div class="topbar-menu">
        <a href="#">小米商城</a>
        <a href="#">MIUI</a>
        <a href="#">云服务</a>
        <a href="#">协议规则</a>
      </div>
      <div class="topbar-user">
        <a href="#" v-if="username">{{ username }}</a>
        <a href="#" v-if="!username" @click="login">登录</a>
        <a href="#" v-if="username">我的订单</a>
        <a href="#" class="my-cart" @click="goToCart">
          <span class="icon-cart"></span>购物车
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavHeader-top1",
  props: {
    username: String,
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../../../../assets/scss/mixin.scss";
@import "./../../../../assets/scss/base.scss";
//sass可以嵌套
.nav-topbar {
  height: 39px;
  line-height: 39px;
  background: #333333;
  color: #b0b0b0;
  .container {
    @include flex();
    // display: flex;
    // //俩边对其
    // justify-content: space-between;
    // //水平居中
    // align-items: center;
    //定义a标签
    a {
      color: #b0b0b0;
      display: inline-block;
      margin-right: 17px;
    }
    .my-cart {
      width: 110px;
      background: #ff6600;
      text-align: center;
      color: #fff;
      .icon-cart {
        //背景图片样式
        @include bgImg(
          16px,
          12px,
          "./../../../../../public/imgs/icon-cart-checked.png"
        );

        margin-right: 4px;
      }
    }
  }
}
</style>

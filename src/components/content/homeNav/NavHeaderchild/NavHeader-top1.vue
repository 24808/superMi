<template>
  <div class="nav-topbar">
    <div class="container">
      <div class="topbar-menu">
        <a href="javascript:;">小米商城</a>
        <a href="javascript:;">MIUI</a>
        <a href="javascript:;">云服务</a>
        <a href="javascript:;">协议规则</a>
      </div>
      <div class="topbar-user">
        <a href="javascript:;" v-if="username">{{ username }}</a>
        <a href="javascript:;" v-if="!username" @click="login">登录</a>
        <a href="javascript:;" v-if="username" @click="logout">退出登录</a>
        <a href="/#/order/list" v-if="username">我的订单</a>
        <a href="javascript:;" class="my-cart" @click="goToCart">
          <span class="icon-cart"></span>购物车({{ cartCount }})
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { logout, getCartCount } from "./../../../../network/login";
export default {
  name: "NavHeader-top1",
  props: {
    username: "",
    cartCount: "",
  },
  mounted() {
    // this.getCartCount();

    if (this.$route.params && this.$route.params.from == "login") {
      this.getCartCount();
    }
  },
  methods: {
    getCartCount() {
      getCartCount().then((res = 0) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },
    goToCart() {
      this.$router.push("/cart");
    },
    login() {
      this.$router.push("/login");
    },
    logout() {
      logout().then((res) => {
        this.$message({
          showClose: true,
          message: "退出登录成功",
          center: true,
          type: "success",
        });
      });
      //清除cookie
      this.$cookie.set("userId", "", { expires: "-1" });
      //清空vuex的数据
      this.$store.dispatch("saveUserName", "");
      this.$store.dispatch("saveCartCount", "0");
      this.$router.push("/index");
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
      margin-right: 0;

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

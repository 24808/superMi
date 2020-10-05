<template>
  <div class="accountHeader">
    <div class="container">
      <div class="n-logo-area ">
        <div class="fl-1">
          <img src="/imgs/logo-mi.png" alt="" />
          <span>小米账号</span>
        </div>
        <div class="fl-2">
          <a href="javascript:;" @click="logout">退出</a>
        </div>
      </div>
      <div class="n-account-area-box">
        <div class="n-account-area">
          <div class="na-info">
            <p>{{ "账号:" + name }}</p>
          </div>
          <div class="na-img-area"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { logout, getCartCount } from "./../../../network/login";
export default {
  name: "accountHeader",
  props: {
    name: "",
  },
  methods: {
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
@import "./../../../assets/scss/mixin.scss";
.container {
  width: 960px;
  .n-logo-area {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    height: 31px;
    line-height: 31px;
    .fl-1 {
      img {
        width: 36px;
        height: 36px;
        vertical-align: middle;
      }
      span {
        color: #ff6600;
        font-size: 18px;
        font-weight: bold;
        padding-left: 10px;
      }
    }
    .fl-2 {
      a {
        font-size: 14px;
        color: #ababab;
      }
    }
  }
  .n-account-area-box {
    .n-account-area {
      z-index: 2;
      position: absolute;
      right: 35px;
      top: 114px;
      .na-img-area {
        width: 80px;
        height: 80px;
        border: 2px solid #e3e3e3;
        border-radius: 50%;
        z-index: 5;
        @include bgImg(
          80px,
          80px,
          "https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-avator-bg.png"
        );
      }
      .na-info {
        width: 120px;
        text-align: right;
        padding-top: 32px;
        margin-right: 15px;
        float: left;
        p {
          &:first-child {
            color: #333;
            font-weight: bold;
            font-size: 14px;
            line-height: 1.5;
            overflow: hidden;
          }
          &:last-child {
            font-size: 14px;
            color: #666;
            line-height: 1.2;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="wrap container" id="wrap">
    <account-header :name="username"></account-header>
    <div class="n-main-nav">
      <ul class="c_b">
        <li>账号安全</li>
        <li>个人信息</li>
        <li>绑定授权</li>
        <li>小米服务</li>
        <li>设备管理</li>
      </ul>
    </div>
    <div class="n-frame">
      <!-- <ul class="device-detail-area"></ul> -->
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>
<script>
import accountHeader from "./../../components/content/account/accountHeader";
export default {
  name: "account",
  components: {
    accountHeader,
  },
  data() {
    return {
      value2: 40,
    };
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
};
</script>
><style lang="scss">
@import "./../../assets/scss/base.scss";
#wrap {
  width: 960px;
}
.container {
  width: 960px;

  .n-main-nav {
    position: relative;
    overflow: hidden;
    height: 44px;
    .c_b {
      display: flex;
      width: 73%;
      li {
        flex: 1;
        text-align: center;
        height: 44px;
        color: #333;
        display: block;
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
        height: 20px;
      }
    }
  }
  .n-frame {
    background: #fff;
    padding: 34px 34px 0;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    min-height: 400px;
  }
}
</style>

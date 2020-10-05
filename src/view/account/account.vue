<template>
  <div class="wrap container">
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
  </div>
</template>
<script>
import accountHeader from "./../../components/content/account/accountHeader";
export default {
  name: "account",
  components: {
    accountHeader,
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
};
</script>
><style lang="scss" scoped>
@import "./../../assets/scss/base.scss";
.container {
  width: 960px;
  .n-main-nav {
    position: relative;
    overflow: hidden;
    .c_b {
    }
  }
}
</style>

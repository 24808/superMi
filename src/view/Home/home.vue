<template>
  <div>
    我是首页
    <nav-header></nav-header>
    <!-- 子路由的出口 -->
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavHeader from "./../../components/content/homeNav/NavHeader";
import NavFooter from "./../../components/content/homeNav/NavFooter";
export default {
  name: "home",
  components: {
    NavHeader,
    NavFooter,
  },
};
</script>
<style scoped></style>

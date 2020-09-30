<template>
  <div>
    <nav-header></nav-header>
    <!-- 子路由的出口 -->
    <router-view :key="$route.fullPath"></router-view>
    <nav-footer></nav-footer>
    <home-tool-bar></home-tool-bar>
  </div>
</template>
<script>
import NavHeader from "./../../components/content/homeNav/NavHeader";
import NavFooter from "./../../components/content/homeNav/NavFooter";
import homeToolBar from "./../../components/common/home-tool-bar";

export default {
  name: "home",
  components: {
    NavHeader,
    NavFooter,
    homeToolBar,
  },
};
</script>
<style scoped></style>

<template>
  <div>
    我是首页
    <order-header></order-header>
    <!-- 子路由的出口 -->
    <router-view></router-view>
    <order-footer></order-footer>
  </div>
</template>
<script>
import OrderHeader from "./../../components/content/order/orderHeader";
import OrderFooter from "./../../components/content/homeNav/NavFooter";
export default {
  name: "home",
  components: {
    OrderHeader,
    OrderFooter,
  },
};
</script>
<style scoped></style>

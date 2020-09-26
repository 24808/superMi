<template>
  <div>
    <order-header :title="title">
      <template slot="tip">
        <span>{{ tip }}</span>
      </template>
    </order-header>
    <!-- 子路由的出口 -->
    <router-view></router-view>
    <service-bar></service-bar>
    <order-footer></order-footer>
  </div>
</template>
<script>
import OrderHeader from "./../../components/content/order/orderHeader";
import OrderFooter from "./../../components/content/homeNav/NavFooter";
import ServiceBar from "./../../components/content/homeNav/ServiceBar";
export default {
  name: "home",
  data() {
    return {
      title: "",
      tip: "",
    };
  },
  components: {
    OrderHeader,
    OrderFooter,
    ServiceBar,
  },
  mounted() {
    // 当前路由的路径
    let path = this.$route.path;
    if (path == "/order/confirm") {
      this.title = "订单确认";
      this.tip = "请认真填写收获地址";
    } else if ("/order/pay") {
      this.title = "订单支付";
      this.tip = "请进犯条鱼链接或咋骗电话，了解跟过";
    } else if ("/order/list") {
      this.title = "订单列表";
      this.tip = "请进犯条鱼链接或咋骗电话，了解跟过";
    } else if ("/order/alipay") {
      this.title = "订单列表";
      this.tip = "请进犯条鱼链接或咋骗电话，了解跟过";
    }
    // if()
  },
};
</script>
<style scoped></style>

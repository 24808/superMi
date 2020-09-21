<template>
  <div>
    <order-header :title="'我的购物车'">
      <template slot="tip">
        <span>温馨提示：唱片是否购买成员，一最终解释权</span>
      </template>
    </order-header>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from "./../../../components/content/order/orderHeader";
import NavFooter from "./../../../components/content/homeNav/NavFooter";
export default {
  name: "cart",
  components: { OrderHeader, NavFooter },
};
</script>
<style scoped></style>

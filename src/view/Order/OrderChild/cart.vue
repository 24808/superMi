<template>
  <div>
    <order-header></order-header>我是cart
    <order-footer></order-footer>
  </div>
</template>
<script>
import OrderHeader from "./../../../components/content/order/orderHeader";
import OrderFooter from "./../../../components/content/order/orderFooter";
export default {
  name: "cart",
  components: { OrderHeader, OrderFooter },
};
</script>
<style scoped></style>

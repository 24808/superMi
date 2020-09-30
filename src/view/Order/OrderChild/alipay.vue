<template>
  <div class="ali-pay">
    <loading v-if="toloading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import { gopay, getOrderDetail } from "./../../../network/pay";
import Loading from "./../../../components/content/Loading";
export default {
  name: "alipay",
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: "",
      toloading: true,
    };
  },
  components: { Loading },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      gopay(this.orderId, 1).then((res) => {
        this.content = res.content;
        setTimeout(() => {
          //获取表单
          document.forms[0].submit();
        }, 100);
      });
    },
  },
};
</script>
<style scoped></style>

<template>
  <div>
    <productParam :title="'小米10'">
      <!-- //插槽 -->
      <template v-slot:buy>
      </template>
    </productParam>
    <service-bar></service-bar>
  </div>
</template>
<script>
import productParam from "./../../../components/content/productChild/productParam";
import ServiceBar from "./../../../components/content/homeNav/ServiceBar";
// import productParam from "./../../../components/content/";
export default {
  name: "detail",
  components: {
    productParam,ServiceBar
  },
};
</script>
<style scoped></style>

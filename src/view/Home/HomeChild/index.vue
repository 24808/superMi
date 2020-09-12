<template>
  <div class="index">
    <div class="container">
      <swiper-box></swiper-box>
      <product-box></product-box>
      <banner></banner>
      <ads-box></ads-box>
    </div>

    <service-bar></service-bar>
  </div>
</template>
<script>
import swiperBox from "./indexChild/swiperBox";
import productBox from "./indexChild/productBox";
import banner from "./indexChild/banner";
import adsBox from "./indexChild/adsBox";
import ServiceBar from "./../../../components/content/homeNav/ServiceBar";
export default {
  name: "index",
  components: { ServiceBar, swiperBox, productBox, banner, adsBox },
};
</script>
<style scoped>
@import "./../../../assets/scss/base.scss";
</style>

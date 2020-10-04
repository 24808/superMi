<template>
  <div class="index">
    <div class="container">
      <swiper-box></swiper-box>
      <ads-box></ads-box>
      <home-Flashsale></home-Flashsale>
      <!-- <banner></banner> -->
    </div>
    <div class="bg-wrtie">
      <product-box></product-box>
      <service-bar></service-bar>
    </div>
  </div>
</template>
<script>
import swiperBox from "./indexChild/swiperBox";
import productBox from "./indexChild/productBox";
import homeFlashsale from "./indexChild/homeFlashsale";
import adsBox from "./indexChild/adsBox";
import ServiceBar from "./../../../components/content/homeNav/ServiceBar";

export default {
  name: "index",
  components: { ServiceBar, swiperBox, productBox, adsBox, homeFlashsale },
  data() {
    return {
      adsList: [
        { id: 33, img: "/imgs/item-box-4.jpg" },
        { id: 48, img: "/imgs/item-box-4.jpg" },
        { id: 45, img: "/imgs/item-box-4.jpg" },
        { id: 47, img: "/imgs/item-box-4.jpg" },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
@import "./../../../assets/scss/base.scss";
.banner {
  margin-bottom: 50px;
}
.bg-wrtie {
  background: #e5e5e5;
}
</style>

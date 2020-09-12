<template>
  <div class="ads-box1">
    <a
      :href="'/#/product' + item.id"
      v-for="(item, index) in adsList"
      :key="index"
    >
      <img :src="item.img" alt="" />
      <!-- <img src="/imgs/ads/ads-1.png" alt="" /> -->
    </a>
  </div>
</template>
<script>
export default {
  name: "adsBox",
  data() {
    return {
      adsList: [
        // { id: 33, img: "./../../../../../public/imgs/banner-1.png" },
        {
          id: 33,
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0c05274f2fbb55fbccb89622f798907.jpg?w=632&h=340",
        },
        {
          id: 48,
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0c05274f2fbb55fbccb89622f798907.jpg?w=632&h=340",
        },
        {
          id: 45,
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3ca70ef337bf7c6d93aef6b59917bf6b.jpg?w=632&h=340",
        },
        {
          id: 47,
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./../../../../assets/scss/mixin.scss";
@import "./../../../../assets/scss/base.scss";
.ads-box1 {
  @include flex();
  a {
    width: 296px;
    height: 167px;
    margin: 14px 0 31px;
  }
}
</style>

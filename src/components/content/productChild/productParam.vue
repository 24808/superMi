<template>
  <div class="nav-bar" ref="productTop" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">{{title}}</div>
      <div class="pro-param">
        <a href="#0">概述</a>
        <span>|</span>
        <a href="#0">参数</a>
        <span>|</span>
        <a href="#0">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productParam",
  props:{
    title:String
  },
  data() {
    return {
      
      //距离顶部的高度
      offsetTop: 0,
      //自己的高度
      offsetHeight: 0,
      //是否需要定位
      isFixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    this.offsetTop = this.$refs.productTop.offsetTop;
    this.offsetHeight = this.$refs.productTop.offsetHeight;
  },
  methods: {
    initHeight() {
      //距离顶部的高度
      let scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      console.log(scrollTop);
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
  },
  //组件销毁时触发的事件
  destroyed() {
    //第三个参数是冒泡
    window.removeEventListener("scroll", this.initHeight, false);
  },
};
</script>

<style lang="scss" scoped>
@import "./../../../assets/scss/base.scss";
@import "./../../../assets/scss/config.scss";
@import "./../../../assets/scss/mixin.scss";

//.btn {
//  line-height: 3px;
// vertical-align: middle;
//}

.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  box-shadow: 0 5px 5px $colorE;
  // z-index: 11;
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    top: 0px;
    background: #fff;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      font-size: $fontJ;
      color: $colorC;
      font-weight: bold;
      a {
        color: $colorC;
      }
      span {
        margin-right: 10px;
      }
    }
  }
}
</style>
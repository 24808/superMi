<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index" class></a>
      </div>
      <div class="title">
        <h2>
          {{ title }}
          <slot name="tip"></slot>
          <!-- <span>温馨提示：唱片是否购买成员，一最终解释权</span> -->
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{ username }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "orderHeader",
  props: {
    title: String,
  },
  computed: {
    // 解构vuex
    ...mapState(["username"], ["cartCount"]),
  },
};
</script>
<style scoped lang="scss">
.order-header {
  height: 112px;
  padding: 30px 0;
  box-sizing: border-box;
  border-bottom: 2px solid #ff6600;
  .header-logo {
    float: left;
  }

  .title,
  .username {
    display: inline-block;
    height: 55px;
    line-height: 55px;
  }
  .title {
    float: left;

    margin-left: 54px;
    h2 {
      color: #333;
      font-size: 28px;
    }
    span {
      font-size: 14px;
      margin-left: 17px;
      color: #999;
      font-weight: 300;
    }
  }
  .username {
    float: right;
    a {
      color: #666;
      font-size: 14px;
    }
  }
}
</style>

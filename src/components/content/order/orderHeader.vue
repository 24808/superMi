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
        <a href="javascript:;">jack</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "orderHeader",
  props: {
    title: String,
  },
};
</script>
<style scoped lang="scss">
.order-header {
  height: 112px;
  padding: 30px 0;
  box-sizing: border-box;
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
    font-size: 28px;
    float: left;
    color: #333;
    margin-left: 54px;

    span {
      font-size: 14px;
      margin-left: 17px;
      color: #999;
      font-weight: bold;
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

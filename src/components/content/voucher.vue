<template>
  <div class="voucher" v-show="show">
    <div class="mask" @click="$emit('exit')"></div>

    <div class="normal-ecard-dailog">
      <ul class="tab-switch">
        <li :class="{ coloryellow: count == 1 }" @click="count = 1">
          选择优惠卷
        </li>
        <li :class="{ coloryellow: count == 2 }" @click="count = 2">
          输入优惠卷码
        </li>
      </ul>
      <div class="tab-content code-content">
        <div class="tab-container">
          <div class="coupon-empty">您暂时没有可用的优惠券</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "voucher",
  data() {
    return {
      count: 1,
      coloryellow: "coloryellow",
    };
  },
  props: {
    show: false,
  },
  methods: {},
};
</script>
<style scoped lang="scss">
@import "./../../assets/scss/mixin.scss";
@import "./../../assets/scss/config.scss";
.voucher {
  border: 0px solid;
  @include position(relative);
  z-index: 10;
  transition: all 0.5s;
  .mask {
    // position: absolute;
    @include position(fixed);
    background-color: $colorI;
    opacity: 0.5;
  }
  .normal-ecard-dailog {
    padding: 20px 40px;
    border: 1px solid #e0e0e0;
    background: #fff;
    z-index: 11;
    @include position(absolute, 60%, 28%, 585px, auto);
    transform: translate(-50%, -50%);
    .tab-switch {
      display: flex;
      justify-content: space-between;
      height: 18px;
      padding: 10px 0;
      margin-bottom: 20px;
      overflow: hidden;

      li {
        &.coloryellow {
          color: #ff6600;
        }

        margin-left: -2px;
        flex: 1;
        border-left: 2px solid #eee;
        text-align: center;
        line-height: 1;
        font-size: 18px;
        color: #757575;
        cursor: pointer;
      }
    }
    .tab-content {
      height: 200px;
      overflow: hidden;
      text-align: center;
      .coupon-empty {
        padding-top: 80px;
        color: #b0b0b0;
        text-align: center;
        font-size: 18px;
      }
    }
  }
}
</style>

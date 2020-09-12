<template>
  <div class="service">
    <div class="container">
      <ul>
        <li v-for="(item, index) in serviceList" :key="index">
          <span :class="item.class"></span>{{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceBar",
  data() {
    return {
      serviceList: [
        { class: "icon-setting", text: "预约维修服务" },
        { class: "icon-7day", text: "7天无理由退货" },
        { class: "icon-15day", text: "15天免费换货" },
        { class: "icon-post", text: "满150元包邮" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./../../../assets/scss/config.scss";
@import "./../../../assets/scss/base.scss";
@import "./../../../assets/scss/mixin.scss";
.service {
  padding: 33px 0;
  color: $colorC;
  font-style: $fontI;
  // text-align: center;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: centers;
    li {
      border-right: 1px solid $colorH;
      span {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 8px;
      }
      .icon-setting {
        @include bgImg(
          20px,
          20px,
          "./../../../../public/imgs/icon-setting.png"
        );
      }
      .icon-7day {
        @include bgImg(20px, 20px, "./../../../../public/imgs/icon-7day.png");
      }
      .icon-15day {
        @include bgImg(20px, 20px, "./../../../../public/imgs/icon-15day.png");
      }
      .icon-post {
        @include bgImg(20px, 20px, "./../../../../public/imgs/icon-post.png");
      }
    }
  }
}
</style>

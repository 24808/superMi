<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="./../../../../public/imgs/logo-footer.png" alt="" />
      <p>小米商场</p>
    </div>
    <div class="footer-link">
      <a href="https://github.com/24808/superMi" target="_blank">24808的主页</a
      ><span>|</span>
      <a href="https://github.com/24808/Mobile-phone-store" target="_blank"
        >vue全栈课程</a
      ><span>|</span>
      <a href="https://github.com/24808/superMi" target="_blank"
        >react全家桶课程</a
      ><span>|</span>
      <a
        href="https://github.com/24808/Mobile-phone-store                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     "
        target="_blank"
        >微信小程序开发</a
      ><span>|</span>
      <a href="https://github.com/24808/superMi" target="_blank">CoptRight</a>
    </div>
    <div class="copyright">
      © <span class="domain">mi.com</span> 京ICP证110507号 京ICP备10046444号
      京公网安备11010802020134号 京网文[2020]0276-042号
    </div>
  </div>
</template>
<script>
export default {
  name: "NavFooter",
};
</script>
<style scoped lang="scss">
@import "./../../../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background: $colorB;
  color: $colorD;
  font-size: $fontI;
  text-align: center;
  .footer-logo {
    margin: 46px 0 31px 0;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: $colorD;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 10px;
  }
  .copyright {
    .domain {
      color: $colorA;
    }
  }
}
</style>

<template>
  <div class="nav-header">
    <div class="container">
      <div class="header-logo">
        <a href="/#/index" class></a>
      </div>
      <div class="header-menu">
        <div class="item-menu">
          <span>小米手机</span>
          <div class="children"></div>
        </div>
        <div class="item-menu">
          <span>RedMi红米</span>
          <div class="children"></div>
        </div>
        <div class="item-menu">
          <span>小米电视</span>
          <div class="children"></div>
        </div>
      </div>

      <div class="header-search">
        <div class="wraper">
          <input type="text" name="keyword" />
          <a href="#"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavHeader-top2",
};
</script>
<style  lang="scss" scoped>
@import "./../../../../assets/scss/base.scss";
//混合函数
@import "./../../../../assets/scss/mixin.scss";
//sass可以嵌套
.container {
  height: 112px;
  //混合函数的使用
  @include flex();

  .header-logo {
    display: inline-block;
    width: 55px;
    height: 55px;
    background-color: #f60;
    a {
      display: inline-block;
      width: 110px;
      height: 55px;
      // scss伪类写法
      &:before {
        content: "";
        //背景图片样式
        @include bgImg(55px, 55px, "./../../../../../public/imgs/mi-logo.png");
        transition: 0.4s;
      }
      &:after {
        //占位
        content: "";
        //背景图片样式
        @include bgImg(55px, 55px, "./../../../../../public/imgs/mi-home.png");

        background-size: 55px;
      }
      &:hover::before {
        //只改变图片位置
        // transform: translateX(-100%);
        margin-left: -55px;
        transition: 0.4s;
      }
    }
  }
  .header-menu {
    display: inline-block;
    flex: 1;
    padding-left: 209px;
    .item-menu {
      display: inline-block;
      color: #333333;
      font-family: bold;
      font-size: 16px;
      line-height: 112px;
      margin-right: 20px;
      span {
        //小手
        cursor: pointer;
      }
      &:hover {
      }
    }
  }
  .header-search {
    width: 319px;
    .wraper {
      height: 50px;
      border: 1px solid #e0e0e0;
      // display: flex;
      // align-items: center;
      @include flex(start, center);
      input {
        border: none;
        border-right: 1px solid #e0e0e0;
        width: 264px;
        height: 50px;
        padding-left: 14px;
        box-sizing: border-box;
      }
      a {
        //背景图片样式
        @include bgImg(
          18px,
          18px,
          "./../../../../../public/imgs/icon-search.png"
        );

        margin-left: 17px;
      }
    }
  }
}
</style>

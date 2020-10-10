<template>
  <div class="nav-header">
    <div class="container">
      <div class="header-logo">
        <a href="/#/index" class></a>
      </div>
      <div class="header-menu">
        <div class="item-menu" v-for="(item1,index1) in phoneList" :key="index1">
          <span>{{item1.name}}</span>
          <div class="children">
            <ul>
              <li
                class="product"
                v-for="(item, index) in item1.getGoodList"
                :key="index"
              >
                <a :href="'/#/product/' + item.goodId" target="_blank">
                  <div class="pro-img">
                    <img v-lazy="item.imgUrl" alt />
                  </div>
                  <div class="pro-name">{{ item.goodName }}</div>
                  <div class="pro-price">{{ item.floorPrice | currency }}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="item-menu">
          <span>RedMi红米</span>
          <div class="children">
            <ul>
              <li class="product">
                <a href="#" target="_blank">
                  <div class="pro-img">
                    <img
                      v-lazy="
                        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/31d0dc82068abcaa46464b4baa9fbbdf.jpg?thumb=1&w=160&h=110&f=webp&q=90'
                      "
                      alt
                    />
                  </div>
                  <div class="pro-name">查看全部</div>
                  <div class="pro-price">查看全部</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="item-menu">
          <span>小米电视</span>
          <div class="children">
            <ul>
              <li class="product">
                <a href="#" target="_blank">
                  <div class="pro-img">
                    <img
                      v-lazy="
                        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/932b583c6eccd8aabfa0771f8a854940.jpg?thumb=1&w=160&h=110&f=webp&q=90'
                      "
                      alt
                    />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">5299起</div>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div class="header-search">
        <div class="wraper">
          <input type="text" name="keyword" v-model="seachvalue" />
          <a :href="'/#/seach/' + seachvalue"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavHeader-top2",
  data() {
    return {
      seachvalue: "",
    };
  },
  filters: {
    currency(val) {
      if (!val) return "$" + "0.00" + "元";
      return "$" + val.toFixed(2) + "元";
    },
  },
  props: {
    phoneList: Array,
  },
};
</script>
<style lang="scss" scoped>
//变量
@import "./../../../../assets/scss/config.scss";

@import "./../../../../assets/scss/base.scss";
//混合函数
@import "./../../../../assets/scss/mixin.scss";
//sass可以嵌套
.container {
  height: 112px;
  position: relative;
  //混合函数的使用
  @include flex();

  // .header-logo {
  //   display: inline-block;
  //   width: 55px;
  //   height: 55px;
  //   background-color: #f60;
  //   a {
  //     display: inline-block;
  //     width: 110px;
  //     height: 55px;
  //     // scss伪类写法
  //     &:before {
  //       content: "";
  //       //背景图片样式
  //       @include bgImg(55px, 55px, "./../../../../../public/imgs/mi-logo.png");
  //       transition: 0.4s;
  //     }
  //     &:after {
  //       //占位
  //       content: "";
  //       //背景图片样式
  //       @include bgImg(55px, 55px, "./../../../../../public/imgs/mi-home.png");

  //       background-size: 55px;
  //     }
  //     &:hover::before {
  //       //只改变图片位置
  //       // transform: translateX(-100%);
  //       margin-left: -55px;
  //       transition: 0.4s;
  //     }
  //   }
  // }
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
        color: $colorA;
        .children {
          height: 220px;
          //默认高度为0
          height: 1;
          //默认透明度为0
          opacity: 1;
          background: #fff;
        }
      }
      .children {
        transition: all 0.5s;
        position: absolute;
        top: 112px;
        // height: 220px;
        //默认高度为0
        height: 0;
        z-index: 9;
        //默认透明度为0
        opacity: 0;
        overflow: hidden;
        left: 0;
        width: 1226px;
        border-top: 1px solid #e5e5e5;
        box-shadow: 0px 7px 10px 0px rgba(0, 0, 0, 0.11);
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .product {
          // flex: 1;
          padding: 0 20px;
          height: 220px;
          font-size: 12px;
          line-height: 12px;
          text-align: center;
          position: relative;
          a {
            display: inline-block;
          }
          img {
            height: 111px;
            width: auto;
            margin-top: 26px;
          }
          .pro-img {
            height: 137px;
          }
          .pro-name {
            font-weight: bold;
            margin-top: 19px;
            margin-bottom: 8px;
            color: $colorB;
          }
          .pro-price {
            color: $colorA;
          }
          //分割线
          &::before {
            content: "";
            position: absolute;
            top: 28px;
            right: 0;
            border-left: 1px solid $colorF;
            height: 100px;
            width: 1px;
          }
          &:last-child::before {
            display: none;
          }
        }
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

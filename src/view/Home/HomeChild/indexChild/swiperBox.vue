<template>
  <div class="swiper-box">
    <div class="nav-menu">
      <ul class="menu-wrap">
        <li class="menu-item" v-for="(item1, index1) in getmenu" :key="index1">
          <a href="javascript:;">{{ item1.name }}</a>
          <div :class="'children'">
            <ul v-for="(item, index) in item1.child" :key="index">
              <li v-for="(sub, indexsub) in item.goodList" :key="indexsub">
                <a href="javascript:;' + sub.num" @click="gotoclick(sub)">
                  <img :src="sub ? sub.imgUrl : '/imgs/item-box-1.png'" alt />
                  <span>{{
                    sub ? sub.name : "小米10Pro1111111111111111"
                  }}</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in slideList" :key="index">
        <a :href="'/#/product/' + item.id">
          <img v-lazy="item.img" alt />
          <!-- <img src="./../../../../../public/imgs/slider/slide-1.jpg" alt="" /> -->
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import { GetCagegoryHomes } from "./../../../../network/home";
// import  sss from "./../../../../assets/scss/mixin.scss"
export default {
  name: "swiperBox",
  components: { swiper, swiperSlide },
  methods: {
    gotoclick(item){
      if(item.num.indexOf("C") == 0){
          
          this.$router.push("/seach/"+item.name);
      }else{
        this.$router.push("/product/"+item.num);
      }
    }
    ,
    GetCagegoryHomes() {
      GetCagegoryHomes().then((res) => {
        this.getmenu = res;
      });
    },
  },
  mounted() {
    this.GetCagegoryHomes();

  },
  data() {
    return {
      getmenu: {},
      // getmenu: [
      // {
      //   text: "手机 电话卡",
      //   menuList: [
      //     [
      //       {
      //         id: 30,
      //         img: "/imgs/item-box-1.png",
      //         name: "小米cc9Pro",
      //       },
      //       {
      //         id: 31,
      //         img: "/imgs/item-box-2.png",
      //         name: "小米8青春版",
      //       },
      //       {
      //         id: 32,
      //         img: "/imgs/item-box-3.jpg",
      //         name: "Redmi K30 Pro",
      //       },
      //       {
      //         id: 33,
      //         img: "/imgs/item-box-4.jpg",
      //         name: "移动5G专区",
      //       },
      //     ],
      //     [0, 0, 0, 0],
      //     [0, 0, 0, 0],
      //     [0, 0, 0, 0],
      //     [0, 0, 0, 0],
      //   ],
      // },
      // {
      //   text: "电视 盒子",
      // },
      // {
      //   text: "笔记本 平板",
      // },
      // {
      //   text: "智能 路由器",
      // },
      // {
      //   text: "出行 穿戴",
      // },
      // {
      //   text: "电源 配件",
      // },
      // {
      //   text: "生活 箱包",
      // },
      // {
      //   text: "生活 箱包",
      // },
      // {
      //   text: "生活 箱包",
      // },
      // ],

      swiperOptions: {
        spaceBetween: 30,
        centeredSlides: true,
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        loop: true,

        autoplay: { delay: 3000 },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
      },

      slideList: [
        {
          id: "G1001",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "G1002",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "G1003",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "G1004",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "G1005",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./../../../../assets/scss/mixin.scss";
@import "./../../../../assets/scss/config.scss";

.swiper-box {
  height: 476px;

  .swiper-container {
    height: 476px;
    // height: 300px;
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-button-prev {
      left: 274px;
    }
  }
  .nav-menu {
    position: absolute;
    width: 264px;
    height: 476px;
    z-index: 2;
    background: #55585a7a;
    // left: 0;
    // top: 0;
    padding: 20px 0;
    box-sizing: border-box;
    .menu-wrap {
      height: 100%;
      display: flex;
      // align-items: center;
      justify-content: space-between;
      flex-direction: column;
      .menu-item {
        flex: 1;
        // height: 50px;
        // line-height: 50px;
        display: flex;

        align-items: center;
        a {
          // display: block;

          font-size: $fontI;
          color: $colorG;
          padding-left: 30px;
          position: relative;
          &:after {
            content: " ";
            position: absolute;
            left: 230px;
            top: 0px;
            vertical-align: middle;
            @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
          }
        }
        &:hover {
          background: $colorA;
          .children {
            display: block;
          }
        }
        .children {
          display: none;
          // display: block;
          overflow: hidden;

          width: 962px;
          height: 476px;
          background: $colorG;
          position: absolute;
          top: 0;
          left: 264px;
          border: 1px solid $colorH;
          // display: flex;
          flex-direction: column;
          justify-content: space-between;
          // align-items: center;
          ul {
            // flex: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
            li {
              // height: 75px;
              // visibility: hidden;
              // line-height: 75px;
              flex: 1;
              // overflow: hidden;
              padding: 20px;
              a {
                img {
                  // float: left;
                }
                span {
                  overflow: hidden;
                  width: 83px;
                  height: 13px;
                  display: inline-block;
                }
              }
            }
            img {
              width: 42px;
              height: 35px;
              vertical-align: middle;
              margin-right: 15px;
            }
            a {
              color: $colorB;
              font-size: 14px;
              line-height: 14px;

              span {
                overflow: hidden;
                width: 133px;
              }
            }
          }
        }
      }
    }
  }
}

////////////////@at-root
</style>

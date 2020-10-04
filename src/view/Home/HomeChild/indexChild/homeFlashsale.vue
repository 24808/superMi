<template>
  <div class="home-flashsale">
    <div class="box-hd">
      <h2 class="title">小米闪购</h2>
    </div>
    <div class="box-bd">
      <div class="row">
        <div class="flashsale-countdown">
          <div class="round">10:00场</div>
          <i class="el-icon-message-solid"></i>
          <div class="desc">距离结束还有</div>
          <div class="countdown">
            <span>{{ hh }}</span
            ><i>:</i> <span>{{ mm }}</span
            ><i>:</i> <span>{{ ss }}</span>
          </div>
        </div>
        <div class="flashsale-list">
          <swiper :options="swiperOption">
            <swiper-slide>
              <a href="/#/seckill">
                <div class="content">
                  <div class="thumb">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76480468caef08ff3e5c1fe9ed24b0e7.png?thumb=1&w=200&h=200&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <h3>小米是pro组织部</h3>
                  <p class="desc">你在干什么</p>
                  <p class="price">999元<del>100元</del></p>
                </div>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="/#/seckill">
                <div class="content">
                  <div class="thumb">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76480468caef08ff3e5c1fe9ed24b0e7.png?thumb=1&w=200&h=200&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <h3>小米是pro组织部</h3>
                  <p class="desc">你在干什么</p>
                  <p class="price">999元<del>100元</del></p>
                </div>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="/#/seckill">
                <div class="content">
                  <div class="thumb">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76480468caef08ff3e5c1fe9ed24b0e7.png?thumb=1&w=200&h=200&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <h3>小米是pro组织部</h3>
                  <p class="desc">你在干什么</p>
                  <p class="price">999元<del>100元</del></p>
                </div>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="/#/seckill">
                <div class="content">
                  <div class="thumb">
                    <img
                      src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76480468caef08ff3e5c1fe9ed24b0e7.png?thumb=1&w=200&h=200&f=webp&q=90"
                      alt=""
                    />
                  </div>
                  <h3>小米是pro组织部</h3>
                  <p class="desc">你在干什么</p>
                  <p class="price">999元<del>100元</del></p>
                </div>
              </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-scrollbar" slot="scrollbar"></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  name: "adsBox",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      hh: "00",
      mm: "00",
      ss: "00",
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: true, //等同于以下设置
        loop: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
          clickable: true,
        },
      },
    };
  },
  mounted() {
    this.Djs_time();
  },
  methods: {
    Djs_time() {
      setInterval(() => {
        var Deadline = new Date("2020-10-5 22:18:0").getTime(); //后台时间
        var presentTime = new Date().getTime();
        var rightTime = Deadline - presentTime;
        if (rightTime > 0) {
          // var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
          this.hh = Math.floor(rightTime / 1000 / 60 / 60);
          this.mm = Math.floor((rightTime / 1000 / 60) % 60);
          this.ss = Math.floor((rightTime / 1000) % 60);
          // this.CountDown = dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
          // this.ifCountDown = 0;
        } else {
          // this.CountDown = "已到截止申请时间";
          // this.status_type = 7;
          // this.status_message1 = "预约已结束";
          // this.ifCountDown = 1;
          //又拉取一次请求
          presentTime += 1000;
        }
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../../../../assets/scss/mixin.scss";
@import "./../../../../assets/scss/base.scss";
.box-hd {
  height: 58px;
  .title {
    margin: 0;
    font-size: 22px;
    font-weight: 200;
    line-height: 58px;
    color: #333;
  }
}
.box-bd {
  .row {
    display: flex;
    .flashsale-countdown {
      height: 340px;
      padding-top: 39px;
      box-sizing: border-box;
      text-align: center;
      margin-bottom: 20px;

      border-top-width: 1px;
      border-top-style: solid;
      background: #f1eded;
      width: 234px;
      i {
        font-size: 34px;
        margin: 50px 0;
        color: #ff6600;
      }
      .desc {
        color: rgba(0, 0, 0, 0.54);
        font-size: 15px;
      }
      .round {
        font-size: 21px;
        color: #ef3a3b;
        padding-top: 15px;
      }
      .countdown {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          width: 46px;
          height: 46px;
          color: #fff;
          background: #605751;
          font-size: 24px;
          line-height: 46px;
        }
        i {
          width: 15px;
          height: 46px;
          line-height: 46px;
          color: #605751;
          font-size: 28px;
          font-style: normal;
        }
      }
    }
    .flashsale-list {
      width: 976px;
      margin-left: 14px;
      min-height: 340px;
      // background: #333;
      height: 340px;
      // padding-top: 39px;
      box-sizing: border-box;
      text-align: center;
      margin-bottom: 20px;
      // img {
      //   width: 234px;
      //   margin-right: 14px;
      // }
      a {
        display: inline-block;
        height: 300px;
        padding-top: 39px;
        position: relative;
        width: 234px;
        color: #757575;
        .content {
          .thumb {
            display: block;
            width: 160px;
            margin: 0 auto 22px;
            img {
              width: 160px;
              height: 160px;
            }
          }
          .title {
            // margin: 0 20px 3px;
            // text-align: center;
            font-size: 14px;
            font-weight: 400;
            color: #212121;
            overflow: hidden;
          }
          .desc {
            height: 18px;
            margin: 0 20px 12px;
            font-size: 12px;
            color: #b0b0b0;
            overflow: hidden;
          }
          .price {
            margin: 0;
            color: #ff6709;
            font-size: 16px;
            del {
              color: #b0b0b0;
            }
          }
        }
      }
    }
  }
}
</style>

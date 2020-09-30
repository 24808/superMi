<template>
  <div class="home-tool-bar">
    <ul class="top-tab">
      <li v-for="(item, index) in list" :key="index">
        <a href="#">
          <div @mouseenter="Toshow(index)" @mouseleave="falseshow">
            <img v-if="count == index" :src="item.falseimg" alt="" />
            <img v-else :src="item.img" alt="" />
          </div>
          <span :class="{ action: show }">{{ item.name }}</span>
        </a>
      </li>
    </ul>
    <a href="#" @click="top0" v-if="showTop" class="scolltop">
      <div @mouseenter="istopshow = true" @mouseleave="istopshow = false">
        <img
          v-if="istopshow"
          src="//i1.mifile.cn/f/i/2018/home/totop_hover.png"
          alt=""
        />
        <img v-else src="//i1.mifile.cn/f/i/2018/home/totop.png" alt="" />
      </div>
      <span :class="{ action: istopshow }">回到顶部</span>
    </a>
  </div>
</template>
<script>
export default {
  name: "homeToolBar",
  data() {
    return {
      showTop: false,
      show: false,
      action: "action",
      istopshow: false,
      count: {},
      // T: null, //定时器
      list: [
        {
          name: "个人中心",
          img:
            "https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png",
          falseimg:
            "https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png",
        },
        {
          name: "售后服务",
          img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png",
          falseimg:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png",
        },
        {
          name: "人工客服",
          falseimg:
            "https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png",
          img:
            "https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png",
        },
        {
          name: "个人中心",
          img:
            "https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png",
          falseimg:
            "https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    //鼠标经过
    Toshow(index) {
      this.show = true;
      this.count = index;
    },
    //鼠标理出
    falseshow() {
      this.show = false;
      this.count = {};
    },
    handleScroll() {
      if (document.documentElement.scrollTop > 600) {
        this.showTop = true;
      } else {
        this.showTop = false;
      }
    },
    top0() {
      window.scrollTo(0, 0);
      // this.T = setInterval(() => {
      //   var ostop =
      //     document.documentElement.scrollTop || document.body.scrollTop;
      //   console.log(window.document.documentElement.scrollTop);

      //   var speed = Math.floor(-ostop / 6);
      //   let spd = ostop + speed;
      //   window.scrollTo(spd, 0);
      //   if (ostop <= 0) {
      //     clearInterval(this.T);
      //   }
      // }, 30);
    },
  },
};
</script>
<style lang="scss" scoped>
.home-tool-bar {
  ul {
  }
  position: fixed;
  bottom: 180px;
  right: 0px;
  z-index: 99;

  a {
    &.scolltop {
      position: absolute;
      bottom: -100px;
      transition: 0.3s;
    }
    &:hover {
      .action {
        color: #ff6600;
      }
    }
    position: relative;
    display: block;
    width: 82px;
    height: 90px;
    margin-top: -1px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;

    img {
      height: 30px;
      width: 30px;
      margin: 30px 30px 0 30px;
      transition: 0.3s;
    }
    span {
      margin-top: 20px;
      transition: 0.3s;
      color: #757575;
      color: 20px;
    }
  }
}
</style>

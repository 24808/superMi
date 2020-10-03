<template>
  <div class="seckill">
    <div class="seckill-head">
      <!-- <h1>小米秒杀</h1> -->
    </div>
    <div class="seckill-body">
      <div class="container">
        <div class="seckill-banner">
          <ul>
            <li v-show="false">{{ CountDown }}</li>
            <li
              v-for="(item, index) in categoryList"
              :key="index"
              :class="{ active: categoryshow == index }"
              @click="down(index)"
            >
              <a href="javascript:void(0);">
                <!-- <em>{{ item }} </em> -->
                <span>
                  <em>{{ Djs_timeListtwo(item) }} </em>

                  <div>{{ Djs_timeList(item) }}</div>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="seckill-con"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "seckill",
  components: {},
  filters: {},
  data() {
    return {
      categoryList: [
        "2020-10-3 15:18:09",
        "2021-10-3 15:18:09",
        "2020-10-3 22:18:09",
        "2020-10-2 15:18:09",
      ],
      CountDown: "", //辅助倒计时用于刷新
      list: ["1", "2", "3", "4"], //要张氏的数据
      overlist: [], //所有数据
      active: "active",
      categoryshow: {}, //选中状态
    };
  },
  mounted() {
    // const now = new Date();
    // setInterval
    // categoryList.forEach(item => {
    //   var hours=item.substring(item.IndexOf("/")+1);//服务器传过来的事件
    //   if(date .getHours()>hours||date .getHours()<(hours+2)){
    //   };
    // });
    //调用页面所有的方法
    // setInterval(this.Djs_timeList, 1000); //倒计时列表，多个
    // setInterval(this.Djs_timeListtwo, 1000); //抢购中
    this.initList();
  },
  methods: {
    down(index) {
      this.list = this.overlist[index];
      this.categoryshow = index;
    },
    initList() {
      this.Djs_time(); //获取数据后调用单个的倒计时
      setTimeout(this.Djs_timeList, 1000); //抢购中
    },
    Djs_time: function() {
      setInterval(() => {
        var presentTime = new Date().getTime();
        this.CountDown = presentTime;
      }, 1000);
    },
    Djs_timeList: function(itemEnd) {
      var endItem = new Date(itemEnd).getTime(); //获取列表传的截止时间
      var nowItem = new Date().getTime(); //获取当前时间
      var rightTime = endItem - nowItem; //截止时间减去当前时间
      if (rightTime > 0) {
        //判断剩余倒计时时间如果大于0就执行倒计时否则就结束
        var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
        var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
        var mm = Math.floor((rightTime / 1000 / 60) % 60);
        var ss = Math.floor((rightTime / 1000) % 60);
        var showTime =
          "距结束:" + dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
      } else {
        var showTime = "秒杀已结束";
      }
      return showTime;
    },
    Djs_timeListtwo: function(itemEnd) {
      var endItem = new Date(itemEnd).getTime(); //获取列表传的截止时间
      var nowItem = new Date().getTime(); //获取当前时间
      var rightTime = endItem - nowItem; //截止时间减去当前时间
      if (rightTime > 2 * 60 * 60 * 1000) {
        var showTime = "未开始";
      } else if (rightTime > 0) {
        var showTime = "抢购中";
      } else {
        var showTime = "秒杀已结束";
      }
      return showTime;
    },
  },
};
</script>
<style scoped lang="scss">
.seckill {
  background: #f5f5f5;
  .seckill-head {
    background: #f5f5f5
      url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cba013aa492551729f3a42e1668b9d9.jpg")
      50% 0 no-repeat;
    height: 170px;
  }
  .seckill-body {
    .seckill-banner {
      position: relative;
      ul {
        display: flex;
        li {
          flex: 1;
          cursor: pointer;
          line-height: 68px;
          height: 68px;
          text-align: center;
          background: #414141;
          &.active {
            background: #f1393a;
          }
          a {
            color: #fff;
            em {
              display: inline-block;
              margin-left: 30px;
              font-style: normal;
              font-size: 18px;
              vertical-align: middle;
            }
            span {
              display: inline-block;
              margin-left: 15px;
              text-align: left;
              line-height: 1;
              vertical-align: middle;
              em {
                line-height: 20px;
                display: inline-block;
                margin-left: 0;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

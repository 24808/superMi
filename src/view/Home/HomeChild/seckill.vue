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
                  <em>{{ Djs_timeListtwo(item.endTime) }} </em>

                  <div>{{ Djs_timeList(item.endTime ) }}</div>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="seckill-con">
          <ul class="clearfix">
            <li v-for="(item,index) in list.chlidGood" :key="index">
              <div class="item-box" >
                <span class="img-con">
                  <img v-lazy="item.imgUrl" alt="" />
                </span>
                <span class="pro-con">
                  <span class="name">{{item.goodName}}</span>
                  <span class="desc">{{item.hardName}}</span>
                  <span class="price">{{item.floorPrice}}<del>{{item.floorPrice-item.discounts}}元</del></span>
                  <a v-if="Date.parse(new Date(list.startTiem))< Date.parse(new Date())" href="#" class="btn btn-red" @click="tiao(item.goodId)">立即抢购</a>
                  <!-- v-else{} -->
                  <a v-else href="javascript:;" class="btn btn-green">提醒我</a>
                  <span class="person">已有32人设置提醒</span>
                </span>
              </div>
            </li>
        
       
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {GetBuyingLists} from "./../../../network/kill"
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
  computed:{
 currency(val) {
      let date1_s=new Date(val)
      let date2_s=new Date()
      return  Date.parse(date1_s)> Date.parse(date2_s)
    },
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
    //路由跳转
    tiao(index) {
      this.$router.push("/detail/"+index);
    },
    //切换
    down(index) {
      this.list = this.categoryList[index];
      this.categoryshow = index;
    },
    initList() {
    
      GetBuyingLists().then(res=>{
        // alert(res)
        //初始数据
        this.categoryshow=0
        this.list=res[0];
//所有数据
        this.categoryList=res
          this.Djs_time(); //获取数据后调用单个的倒计时
      setTimeout(this.Djs_timeList, 1000); //抢购中
      })
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
    .seckill-con {
      .clearfix {
        flex-wrap: wrap;
        display: flex;
        margin-left: -13px;
        margin-top: 20px;
        li {
          background: #fff;
          width: 400px;
          height: 190px;
          margin-left: 13px;
          margin-bottom: 13px;
          // box-sizing: border-box;
          transition: 0.2s;
          // flex-basis: 30%;
          position: relative;
          .item-box {
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            &:hover {
              transform: translateY(-1px);
              transition-property: all; /*所有属性都获得效果*/
              transition-duration: 0.2s; /*规定完成过渡效果需要花费的时间*/
              transition-timing-function: linear; /*规定以相同速度开始至结束的过渡效果*/
              transition-delay: 0s; /* 定义过渡效果何时开始*/
              // transform: translateY(-10px);
              box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
            }
            .img-con {
              width: 190px;
              height: 190px;
              background-color: #e9e9e9;
              border: 0 none;
              img{
                width: 190px;
              }
            }
            .pro-con {
              // margin-left: 210px;
              width: 180px;
              height: 160px;
              padding-top: 30px;
              span {
                display: block;
                color: rgba(0, 0, 0, 0.54);
                overflow: hidden;
                font-size: 16px;
              }
              .name {
                height: 16px;
                line-height: 16px;
                color: #333;
              }
              .desc {
                margin-top: 7px;
                font-size: 12px;
                line-height: 15px;
              }
              .price {
                color: red;
                margin-top: 10px;
                del {
                  margin-left: 20px;
                  font-size: 12px;
                  line-height: 12px;
                  color: rgba(0, 0, 0, 0.54);
                }
              }
              a {
                width: 120px;
                margin-top: 10px;
                &.btn-red {
                  border: red;
                  background: red;
                }
                &.btn-red {
                  background: #83c44e;
                  border: #83c44e;
                }
              }
              .person {
                font-size: 12px;
                line-height: 12px;
                color: rgba(0, 0, 0, 0.54);
                margin-top: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

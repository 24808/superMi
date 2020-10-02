<template>
  <div class="seach" ref="seach">
    <div class="container">
      <div class="seach-result">
        <a href="javascript:;">全部结果</a>
        <span>></span>
        <a href="javascript:;">全部结果</a>
        <span>></span>
        <a href="javascript:;">{{ "小米是" }}</a>
        <span>></span>
      </div>
    </div>
    <div class="classification">
      <div class="bg-clolor">
        <div class="container">
          <div class="seach-classification">
            <span>分类:</span>
            <li
              @click="actionShow = null"
              :class="{ action: actionShow == null }"
            >
              全部
            </li>
            <li
              v-for="(item, index) in classification"
              :key="index"
              @click="show(index)"
              :class="{ action: actionShow == index }"
            >
              {{ item }}1
            </li>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="order">
          <ul>
            <li v-for="(item, index) in orderlist" :key="index">
              <a
                href="javascript:;"
                @click="ordershow(index)"
                :class="{ action: boderbyShow == index }"
                >{{ item }}</a
              >
            </li>
          </ul>
          <ul>
            <li>
              收货地>

              <div class="adrss"><a href="javascript:;"> 北京 北京市</a></div>
            </li>
            <li>
              <el-button
                type="success"
                icon="el-icon-check"
                circle
                class="gou"
                size="mini"
                @click="gotoshow(1)"
                :class="[goushow == 1 && goushowfalse ? '' : isgoushow]"
              ></el-button>
              <a href="javascript:;">> 出校</a>
            </li>
            <li>
              <el-button
                size="mini"
                type="success"
                class="gou"
                icon="el-icon-check"
                @click="gotoshow(2)"
                :class="[goushow == 2 && goushowfalse ? '' : isgoushow]"
                circle
              ></el-button>
              <a href="javascript:;"> >分期</a>
            </li>
            <li>
              <el-button
                size="mini"
                class="gou"
                type="success"
                @click="gotoshow(3)"
                :class="[goushow == 3 && goushowfalse ? '' : isgoushow]"
                icon="el-icon-check"
                circle
              ></el-button>
              <a href="javascript:;"> >仅看诱惑</a>
            </li>
          </ul>
        </div>
        <div class="gods-list-box">
          <li v-for="(item, index) in goods" :key="index">
            <img src="" alt="" />
            <h2 class="h2-title">
              <a href="javascript:;">小米10青春版 抗菌高透保护膜 白色</a>
            </h2>
            <p class="price"><span>价格</span></p>
            <div class="flags">
              <span class="new-label">新品</span>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "seach",
  props: {
    title: String,
  },
  data() {
    return {
      classification: ["手机1", "手机2", "手机3", "手机4"],
      orderlist: ["综合", "新品", "新品", "新品"],
      goods: ["a", "n", "m", "d"], //商品数据
      action: "action", //样式
      actionShow: {}, //分类样式
      boderbyShow: {}, //排数样式
      isgoushow: "isgoushow",
      goushow: 0,
      goushowfalse: 0,
      goodlist: {},
    };
  },
  mounted() {
    this.$message.success("搜索的值为" + this.$route.params.keyword);
    // goodlist=res
  },
  methods: {
    show(index) {
      this.actionShow = index;
    },
    ordershow(index) {
      this.boderbyShow = index;
    },
    gotoshow(index) {
      this.goushow = index;
      this.goushowfalse = !this.goushowfalse;
    },
  },
};
</script>

<style lang="scss" scoped>
.seach {
  font-size: 12px;
  line-height: 40px;
  background: #f5f5f5;
  color: #757575;
}
.seach-result {
  a {
    color: #333;
  }
}
.classification {
  background-color: #eee;
  .bg-clolor {
    background: #fff;
  }
  .seach-classification {
    display: flex;
    background: #fff;
    .action {
      color: #ff6700;
    }
    span,
    li {
      display: inline-block;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #424242;
      font-size: 14px;
      width: 148px;
      padding: 14px 0;
      height: 20px;
      line-height: 20px;
      cursor: pointer;
      &:hover {
        color: #ff6700;
      }
    }
    span {
      color: #b0b0b0;
    }
  }
  .order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #424242;
    font-size: 15px;
    position: relative;
    height: 30px;
    margin: 20px 0;
    ul {
      height: 30px;
      line-height: 30px;
      display: flex;
      .checkbox {
        font-weight: bold;
      }
      a {
        color: #333;
        &:hover {
          color: #ff6700;
        }
      }
      .action {
        color: #ff6700;
      }
      .gou {
        background: #ff6700;
        border: #ff6700;
        border-radius: 15%;
        margin-right: 5px;
        margin-left: 5px;
      }
      .isgoushow {
        background: #fff;
        border: #fff;
      }
      &:last-child {
        margin-left: 30px;
        span {
          display: inline-block;
          width: 18px;
          height: 18px;
          margin-left: 8px;
          border: 1px solid #e0e0e0;
          vertical-align: -3px;
          background: #fff;
          font-size: 18px;
          line-height: 30px;
          text-align: center;
        }
        .adrss {
          position: relative;
          display: inline-block;
          background: #fff;
          border: 1px solid #e3e3e3;
          margin-right: 20px;
          height: 14px;
          line-height: 14px;
          padding: 7px 14px;
          cursor: pointer;
          &::after {
            width: 0;
            height: 0;
            overflow: hidden;
            font-size: 0;
            line-height: 0;
            border-width: 6px;
            border-style: dashed dashed dashed solid;
            border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)
              #a9a9a9;
            position: absolute;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            right: -4px;
            bottom: -4px;
            content: " ";
          }
        }
      }
      &:first-child {
        li {
          padding: 0 30px;
          border-left: 1px solid #e0e0e0;
          line-height: 30px;
        }
      }
    }
  }
  .gods-list-box {
    display: flex;
    li {
      position: relative;
      float: left;
      width: 296px;
      height: 383px;
      padding-top: 47px;
      margin-right: 14px;
      margin-bottom: 14px;
      text-align: center;
      background: #fff;
      img {
        width: 200px;
        height: 200px;
      }
      .h2-title {
        a {
          color: #333;
          font-size: 14px;
          font-weight: 400;
        }
      }
      .price {
        margin: 0 0 15px;
        color: #ff6700;
      }
      .flags {
        span {
          background: red;
          margin: 0 0 15px;
          padding: 5px 10px;
          color: #fff;
        }
      }
    }
  }
}
</style>

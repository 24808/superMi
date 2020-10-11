<template>
  <div>
    <order-header title="订单查询">
      <template slot="tip">
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <div class="order-list">
      <div class="wrapper">
        <div class="container">
          <div class="order-box">
            <loading v-if="loading"></loading>
            <!-- <loading ></loading> -->
            <div class="order" v-for="(item, index) in list" :key="index">
              <div class="order-title">
                <div class="item-info fl">
                  {{ item.createTime }}
                  <span>|</span>
                  
                  {{ item.userName }}
                </div>
                <div class="item-money fr">
                  <span>应付金额：</span>
                  <span class="money">{{ item.price }}</span>
                  <span>元</span>
                </div>
              </div>
              <div class="order-content clearfix">
                <div class="good-box fl">
                  <div
                    class="good-list"
                    v-for="(tem, i) in item.chlidClass"
                    :key="i"
                  >
                    <div class="good-img">
                      <img v-lazy="tem.imgUrl" alt="" />
                    </div>
                    <div class="good-name">
                      <div class="p-name">{{ tem.goodName }}</div>
                      <div class="p-money">
                        {{ tem.price + "X" + tem.quantity }}元
                      </div>
                    </div>
                  </div>
                </div>
                <!-- //未付款 -->
                <div class="good-state fr" v-if="item.orderType == 2">
                  <a href="javascript:;" @click="goPay(item.orderId)">{{
                    '未支付'
                  }}</a>
                </div>
                <div class="good-state fr" v-else>
                  <a href="javascript:;">{{ '已付款' }}</a>
                </div>
              </div>
            </div>
            <el-pagination
              v-if="true"
              background
              layout="prev, pager, next"
              class="pagination"
              :total="total"
              :pageSize="pageSize"
              :pageNum="pageNum"
              @current-change="handleChange"
              >></el-pagination
            >
            <div class="load-more" v-if="list.length != 0">
              <el-button type="primary" :loading="moreLoading" @click="loadMore"
                >加载更多</el-button
              >
            </div>

            <div
              class="scroll-more"
              v-infinite-scroll="false"
              infinite-scroll-disabled="true"
              infinite-scroll-distance="410"
            >
              <img
                src="/imgs/loading-svg/loading-spinning-bubbles.svg "
                v-show="moreLoading"
                alt=""
              />
            </div>
            <no-data v-if="loading == true || list.length == 0"></no-data>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import infiniteScroll from "vue-infinite-scroll";
//无图片

import NoData from "./../../../components/content/NoData";
import orderHeader from "./../../../components/content/order/orderHeader";
import { getOrderList,GetPersonal } from "./../../../network/order";
import Loading from "./../../../components/content/Loading";
export default {
  name: "orderList",
  directives: { infiniteScroll },
  data() {
    return {
      //数据
      list: [],
      //转圈
      loading: true,
      moreLoading: false,
      //显示几条数据
      pageSize: 4,
      pageNum: 1, //当前页数
      total: 100, //总条数
      //
      busy: true, //滚动加载，是否触发
    };
  },
  components: { orderHeader, Loading, NoData },
  mounted() {
    this.getOrderList();
  },
  methods: {
    //滚动加载 第三章
    // scrollloadMore() {
    //   alert("112313");

    // },
    // scrollMore() {
    //   // this.busy = true;
    //   alert("123");
    //   this.pageNum++;
    //   this.getList(this.pageSize, this.pageNum);
    //   // setTimeout(() => {
    //   //   this.pageNum++;
    //   //   this.getList(this.pageSize, this.pageNum);
    //   // }, 500);
    // },
    //加载更多 第二种
    loadMore() {
      this.pageNum++;
      this.getOrderList(this.pageSize, this.pageNum);
    },
    //分页器:第一中
    handleChange(pageNum) {
      this.pageNum = pageNum;
      this.getOrderList(this.pageSize, pageNum);
    },
    // 跳转支付
    goPay(orderId) {
      this.$router.push({
        path: "pay",
        query: { orderId },
      });
    },
    //获取数据
    // GetPersonal
    getOrderList(pageSize = 4, pageNum = 2) {
      this.moreLoading = true;

      GetPersonal(pageNum,pageSize)
        .then((res) => {
          this.moreLoading = false;
          //数据累加
          this.list = this.list.concat(res);
          this.loading = false;
          // this.pageNum=res.pageNum
        })
        .catch(() => {
          this.loading = false;
        });
    },
    //滚动加载
    getList(pageSize = 2, pageNum = 1) {
      this.moreLoading = true;
      GetPersonal().then((res) => {
        //数据累加
        this.list = this.list.concat(res.list);
        this.total = res.total;
        this.moreLoading = false;
        if (this.hasNextPage) {
        } else {
        }
      });
    },
  },
};
</script>
<style lang="scss">
@import "./../../../assets/scss/config.scss";
@import "./../../../assets/scss/mixin.scss";

.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .pagination {
        text-align: right;
      }
      .active {
        background-color: #ff6600;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff6600;
        color: #fff;
      }
      .order {
        @include border();
        border: 1px solid #eee;
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: $colorB;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state {
            @include height(145px);
            font-size: 20px;
            color: $colorA;
            a {
              color: $colorA;
            }
          }
        }
      }
      .pagination {
        text-align: right;
      }
      .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #ff6600;
      }
      .scroll-more,
      .load-more {
        text-align: center;
      }
      .el-button--primary {
        background-color: #ff6600;
        border-color: #ff6600;
      }
      // .load-more,
      // .scroll-more {
      //   text-align: center;
      // }
    }
  }
}
</style>

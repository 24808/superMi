<template>
  <div class="comment">
    <productParam :title="'手机'">
      <!-- //插槽 -->
      <template v-slot:buy>
        <button class="btn" @click="goBuy">立即购买</button></template
      >
    </productParam>
    <div class="comment-index container">
      <div></div>
      <div class="comment-top">
        <h3>大家认为</h3>
        <div class="category">
          <div
            class="btn"
            @click="tagindex = index"
            :class="{ chose: tagindex == index }"
            v-for="(item, index) in taglist"
            :key="index"
          >
            {{ item }}全部
          </div>
        </div>
      </div>
      <div class="comment-mid">
        <div class="mid-left">
          <h3>热门评论</h3>

          <div class="l-content">
            <div class="common">
              <div class="top">
                <img src="/imgs/logo-mi.png" alt="" />
                <div class="times">
                  <div class="tit">24808</div>
                  <div class="time">24808:8:8</div>
                </div>
                <div class="love">
                  <i class="el-icon-potato-strips"></i>
                  超爱
                </div>
              </div>
              <div class="des">
                小米10pro不错，拿到手很惊艳，运行流畅，本来想买珍珠白可以没有了，不过星空蓝也不错，就是在关机的状态下充电手机还是很热，希望继续优化一下，物流很快晚上下单，第二天上午就到了
              </div>
              <div
                class="appreciate"
                @click="contentlike = false"
                v-if="contentlike"
              >
                <i class="el-icon-star-on icon-show"></i>{{ likecount }}
              </div>
              <div
                class="appreciate icon-no-show"
                @click="contentlike = true"
                v-else
              >
                <i class="el-icon-star-off"></i>{{ likecount }}
              </div>
              <div class="reply">
                <input type="text" name="" id="" placeholder="回复楼主" />
                <span>回复</span>
              </div>
              <div class="commentList">
                <div class="comments">
                  <img src="/imgs/logo-mi.png" alt="" />
                  <div class="c-right">
                    <div>
                      <span>24808</span>
                      <span
                        >打开小米这扇窗，你会发现这片天地下有太多的惊喜和感动。</span
                      >
                    </div>
                  </div>
                </div>
                <div class="comments">
                  <img src="/imgs/logo-mi.png" alt="" />
                  <div class="c-right">
                    <div>
                      <span>24808</span>
                      <span
                        >打开小米这扇窗，你会发现这片天地下有太多的惊喜和感动。</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="common">
              <div class="top">
                <img src="/imgs/logo-mi.png" alt="" />
                <div class="times">
                  <div class="tit">24808</div>
                  <div class="time">24808:8:8</div>
                </div>
                <div class="love">
                  <i class="el-icon-potato-strips"></i>
                  超爱
                </div>
              </div>
              <div class="des">
                小米10pro不错，拿到手很惊艳，运行流畅，本来想买珍珠白可以没有了，不过星空蓝也不错，就是在关机的状态下充电手机还是很热，希望继续优化一下，物流很快晚上下单，第二天上午就到了
              </div>
              <div
                class="appreciate"
                @click="contentlike = false"
                v-if="contentlike"
              >
                <i class="el-icon-star-on"></i>{{ likecount }}
              </div>
              <div class="appreciate" @click="contentlike = true" v-else>
                <i class="el-icon-star-off"></i>{{ likecount }}
              </div>
              <div class="reply">
                <input type="text" name="" id="" placeholder="回复楼主" />
                <span>回复</span>
              </div>
              <div class="commentList">
                <div class="comments">
                  <img src="/imgs/logo-mi.png" alt="" />
                  <div class="c-right">
                    <div>
                      <span>24808</span>
                      <span
                        >打开小米这扇窗，你会发现这片天地下有太多的惊喜和感动。</span
                      >
                    </div>
                  </div>
                </div>
                <div class="comments">
                  <img src="/imgs/logo-mi.png" alt="" />
                  <div class="c-right">
                    <div>
                      <span>24808</span>
                      <span
                        >打开小米这扇窗，你会发现这片天地下有太多的惊喜和感动。</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mid-right">
          <div class="m-t">
            <span>24808</span>
            人购买后满意
          </div>
          <div class="m-b">
            <span>满意度:99.2%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productParam from "./../../../components/content/productChild/productParam";
export default {
  name: "comment",
  components: { productParam },
  data() {
    return {
      taglist: ["全部", "不全部"],
      tagindex: {},
      contentlike: true,
      likecount: 20,
    };
  },
  mounted() {
    // var infoid = this.$route.params.id;
    this.$message.info(infoid);
  },
  methods: {
    goBuy() {
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>
<style scoped lang="scss">
.comment {
  background: #f5f5f5;

  .comment-index {
    margin-top: 20px;
    padding: 32px 0 30px;
    .comment-top {
      padding: 40px;
      background: #fff;
      h3 {
        font-size: 18px;
        color: #757575;
        line-height: 28px;
      }
      .category {
        margin-top: 14px;
        .btn {
          width: 168px;
          height: 44px;
          line-height: 44px;
          margin-right: 20px;
          color: #b0b0b0;
          background: #f5f5f5;
          border-radius: 3px;
        }
        .chose {
          border-color: #ff6700;
          background: #ff6700;
          color: #fff;
        }
      }
    }
    .comment-mid {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .mid-left {
        width: 792px;
        h3 {
          line-height: 40px;
          font-size: 22px;
          color: #616161;
          font-weight: 550;
        }
        .l-content {
          width: 100%;
          background: #fff;
          .common {
            width: 100%;
            background: #fff;
            margin: 0 0 15px;
            padding: 40px 40px 46px 103px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            position: relative;
            .top {
              img {
                position: absolute;
                left: 40px;
                top: 40px;
                width: 47px;
                height: 47px;
              }
              .times {
                width: 100%;
                height: 44px;
                .tit {
                  height: 18px;
                  line-height: 18px;
                  font-size: 16px;
                  color: #8d665a;
                }
                .time {
                  height: 20px;
                  line-height: 20px;
                  margin-top: 6px;
                  font-size: 14px;
                  color: #b0b0b0;
                }
              }

              .love {
                position: absolute;
                top: 40px;
                right: 40px;
                font-size: 16px;
                color: #ff7b33;
                i {
                  font-size: 26px;
                  vertical-align: -4px;
                }
              }
            }
            .des {
              display: inline-block;
              margin-top: 8px;
              color: #5e5e5e;
              font-size: 18px;
              line-height: 27px;
            }
            .appreciate {
              .icon-show {
                font-size: 25px;
              }

              color: #ff6600;
              display: inline-block;
              margin-top: 8px;
              line-height: 33px;
              font-size: 14px;
              color: #757575;
              display: inline-block;
              cursor: pointer;
              transition: 01s;
              i {
                font-size: 22px;
                vertical-align: -2px;
              }
            }
            .reply {
              input {
                width: 520px;
                padding: 10px 0 10px 20px;
                border: 1px solid #e0e0e0;
                height: 23px;
                line-height: 23px;
                font-size: 14px;
                color: #b0b0b0;
              }
              span {
                width: 100px;
                display: inline-block;
                border: 1px solid #e0e0e0;
                height: 43px;
                line-height: 43px;
                margin-left: -1px;
                text-align: center;
                font-size: 14px;
                color: #757575;
                cursor: pointer;
              }
            }
            .commentList {
              margin-top: 46px;
              .comments {
                position: relative;
                margin-bottom: 46px;
                padding-left: 50px;
              }
              img {
                position: absolute;
                left: 0;
                top: 3px;
                width: 40px;
                height: 40px;
              }
              .c-right {
                span {
                  margin-bottom: 3px;
                  font-size: 14px;
                  line-height: 22px;
                  display: block;
                }
              }
            }
          }
        }
      }
      .mid-right {
        width: 420px;
        margin: 40px 0 30px;
        padding: 22px 30px 40px;
        background: #fff;
        box-sizing: border-box;
        .m-t {
          font-size: 14px;
          color: #b0b0b0;
          span {
            color: #ff6600;
            font-size: 60px;
          }
        }

        .m-b {
          background: #83c44e;
          color: #fff;
          text-align: center;
          height: 22px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>

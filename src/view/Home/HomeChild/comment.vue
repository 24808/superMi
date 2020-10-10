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
            <div class="common" v-for="(item,index) in GoodCommentList" :key="index">
              <div class="top">
                <img src="/imgs/logo-mi.png" alt="" />
                <div class="times">
                  <div class="tit">{{item.userName}}</div>
                  <div class="time">{{item.createTime}}</div>
                </div>
                <div class="love">
                  <i class="el-icon-potato-strips"></i>
                  超爱
                </div>
              </div>
              <div class="des">
                {{item.content}}
              </div>
              <div
                class="appreciate"
                @click="contentlike = false"
                v-if="contentlike"
              >
                <i class="el-icon-star-on icon-show"></i>{{ item.supportCount }}
              </div>
              <div
                class="appreciate icon-no-show"
                @click="contentlike = true"
                v-else
              >
                <i class="el-icon-star-off"></i>{{ item.supportCount }}
              </div>
              <div class="reply">
                <input  type="text" name=""  id="" v-on:keyup="inputTargetValue" placeholder="回复楼主" />
                <span @click="goReplyComment(item)" >回复</span>
              </div>
              <div class="commentList">
                <div class="comments" v-for="(arr,index1)  in item.chlidCom" :key="index1">
                  <img src="/imgs/logo-mi.png" alt="" />
                  <div class="c-right">
                    <div>
                      <span>{{arr.userName}}</span>
                      <span
                        >{{arr.content}}</span
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
import { GetGoodComment,ReplyComment } from "./../../../network/comment";

export default {
  name: "comment",
  components: { productParam },
  data() {
    return {
      taglist: ["全部", "不全部"],
      tagindex: {},
      contentlike: true,
      likecount: 20,
      GoodCommentList:{},
      text:''//文本
    };
  },
  mounted() {
    var infoid = this.$route.params.id;
    this.$message.info(infoid);
    this.goodcomment();
  },
  methods: {
    inputTargetValue(e){
 this.text = e.target.value
//  alert
    }
    ,
    goReplyComment(item){
      // this.$message.info(item.number)
      // this.$message.info(item.commentId)
      ReplyComment(item.number,item.commentId,this.text).then(res=>{
        this.GoodCommentList=res;
        this.$message.success("恭喜你！回复成功！")

      })
      
    },
    goodcomment() {
      // alert('asd');
      GetGoodComment('G1001').then(res=>{
this.GoodCommentList=res;
      })
    },
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

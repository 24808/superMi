<template>
  <div class="detail">
    <productParam :title="ProductInfo.name">
      <!-- //插槽 -->
      <template v-slot:buy> </template>
    </productParam>
    <div class="wrapper">
      <div class="container clearfix">
        <div class="swiper">
          <swiper :options="swiperOption">
            <swiper-slide
            v-for="(item,index) in ProductInfo.imagesUrl" :key="index"
              ><img v-lazy="item.imgUrl" alt=""
            /></swiper-slide>
  
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="content">
          <h2 class="item-title">{{ ProductInfo.goodName }}</h2>
          <p class="item-info">
            {{ ProductInfo.content }}
          </p>
          <div class="delivery">小米自营</div>
          <div class="item-price">
            {{ banben.price }}<span class="del">1999元</span>
          </div>
          <div class="line"></div>
          <div class="item-addr">
            <i class="icon-loc"></i>
            <div class="addr">北京 北京市 朝阳区 安定门街道</div>
            <div class="stock">有现货</div>
          </div>

          <div class="item-version clearfix" v-if="dataviess.chlid" >
            <!-- {{dataviess}}
            {{banben}}
            {{color}} -->
            <!-- {{dataviess.num}} -->
            <!-- {{banben}} -->
            <h2 v-if="dataviess.chlid[0]">选择版本</h2>
            <div  class="phone fl"  @click="selectbanben(index,item)" :class="{checked:viesscount==index}" v-for="(item,index) in (dataviess.chlid[0]&&dataviess.chlid[0].specificationNum)" :key="index">
               <!-- @click="selectbanben(index,item)" -->
              {{item.num}}
            </div>
            <!-- <div
              class="phone fl"
              :class="{ checked: version == 1 }"
              @click="version = 1"
            >
              6GB+64GB 全网通
            </div>
            <div
              class="phone fr"
              :class="{ checked: version == 2 }"
              @click="version = 2"
            >
              4GB+64GB 移动4G
            </div> -->
          </div>
          <div class="item-color">
            <h2>选择颜色</h2>
            <div class="phone " :class="{'versionChecked':version==index}" @click="gocieass(item,index)" v-for="(item,index) in colorOrversion" :key="index">
              <span class="color" ></span>
              <!-- {{item.chlid}} -->
              {{item.num}}
            </div>
          </div>
          <div class="item-total">
            <div class="phone-info clearfix">
              <div class="fl">
                版本: {{banben.num}}
                <!-- {{ version == 1 ? "6GB+64GB 全网通" : "4GB+64GB 移动4G" }} -->
              </div>
              <div class="fr">{{ banben.price }}</div>
            </div>
            <div class="phone-total">总计：{{banben.price }}元</div>
          </div>
          <div class="btn-group">
            <a href="javascript:;" class="btn btn-huge fl" @click="addCart"
              >加入购物车</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container">
        <h2>价格说明</h2>
        <div class="desc">
          <img src="/imgs/detail/item-price.jpeg" alt="" />
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import productParam from "./../../../components/content/productChild/productParam";
import ServiceBar from "./../../../components/content/homeNav/ServiceBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
//axios
import { getProductInfo, gogetProductInfo } from "./../../../network/product";
import { addCart } from "./../../../network/cart";

// import productParam from "./../../../components/content/";
export default {
  name: "detail",
  components: {
    productParam,
    ServiceBar,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      viesscount:0,
      checked:"checked",
      id: this.$route.params.id, //商品id
      //版本
      version: 0,
      //颜色
      colorOrversion:{},
      //当前颜色:{}
      color:{},
      //所有版本
      dataviess:{},
      //当前版本
      banben:{},
      //轮播图
      swiperOption: {
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        loop: true,
        autoplay: { delay: 3000 },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true,
        },
      },
      ProductInfo: {},
    };
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    //当前版本
    selectbanben(index,item){
this.viesscount=index;
      if(item.price>0){
this.banben=item;
      }
    }
    //当前颜色
    ,
    gocieass(item,index){
      // alert(item)

      this.dataviess=item;
      this.version=index
      if(item.price>0){
this.banben=item;
      }
    },
    addCart() {
      const goodid = this.banben.goodId;
       let specificationarr=""
      
      if(this.banben.parentId == ''){
        
        if( Object.prototype.isPrototypeOf(this.banben.chlid) && Object.keys(this.banben.chlid).length === 0){

specificationarr =this.banben.gsId
        }else{
specificationarr =this.banben.gsId+  ","+this.banben.chlid[0].specificationNum[this.viesscount].parentId
        }
         
// const specificationarr = this.banben.gsId+ (this.banben.chlid&&","+this.banben.chlid[0].specificationNum[this.viesscount].parentId)
      }else{
 specificationarr =this.banben.gsId+","+ this.banben.parentId;
      }
      const price = this.banben.price;
        // this.$cookie.set("userid", "U1001", { expires: "Session" });
      addCart(goodid,specificationarr,price).then(res => {
      //返回数据的长度
        // this.$store.dispatch("saveCartCount", res.cartProductVoList.length);
        // this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
        this.$router.push("/cart");
      });
      //

    },
    getProductInfo() {
      //获取 id
      gogetProductInfo(this.id).then((res) => {
        this.ProductInfo = res;
        this.colorOrversion=res.chlidClass[0].specificationNum||{};
        //当前颜色
          this.dataviess=this.colorOrversion[0];
          
          // this.color=this.colorOrversion[0].num;
          //当前版本
          this.banben=this.dataviess.price<=0?this.dataviess.chlid[0].specificationNum[0]:this.dataviess;
          // this.banben=this.dataviess;
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "./../../../assets/scss/config.scss";
@import "./../../../assets/scss/mixin.scss";
.detail {
  .wrapper {
    .swiper {
      float: left;
      width: 642px;
      height: 617px;
      margin-top: 5px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      float: right;
      width: 584px;
      height: 870px;
      .item-title {
        font-size: 28px;
        padding-top: 30px;
        padding-bottom: 16px;
        height: 26px;
      }
      .item-info {
        font-size: 14px;
        height: 36px;
        overflow: hidden;
      }
      .delivery {
        font-size: 16px;
        color: #ff6700;
        margin-top: 26px;
        margin-bottom: 14px;
        height: 15px;
      }
      .item-price {
        font-size: 20px;
        color: #ff6700;
        height: 19px;
        .del {
          font-size: 16px;
          color: #999999;
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .line {
        height: 0;
        margin-top: 25px;
        margin-bottom: 28px;
        border-top: 1px solid #e5e5e5;
      }
      .item-addr {
        height: 108px;
        background-color: #fafafa;
        border: 1px solid #e5e5e5;
        box-sizing: border-box;
        padding-top: 31px;
        padding-left: 64px;
        font-size: 14px;
        line-height: 14px;
        position: relative;
        .icon-loc {
          position: absolute;
          top: 27px;
          left: 34px;
          @include bgImg(20px, 20px, "/imgs/detail/icon-loc.png");
        }
        .addr {
          color: #666666;
        }
        .stock {
          margin-top: 15px;
          color: #ff6700;
        }
      }
      .item-version,
      .item-color {
        margin-top: 20px;
        h2 {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
      .item-version,
      .item-color {
        .phone {
          display: inline-block;
          margin: 0 5px 5px 0;
          width: 287px;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          color: #333333;
          border: 1px solid #e5e5e5;
          box-sizing: border-box;
          text-align: center;
          cursor: pointer;
          span {
            color: #666666;
            margin-left: 15px;
          }
          .color {
            display: inline-block;
            width: 14px;
            height: 14px;
            background-color: #666666;
          }
          &.checked {
            border: 1px solid #ff6600;
            color: #ff6600;
          }
            &.versionChecked {
            border: 1px solid #ff6600;
            color: #ff6600;
          }
          
        }
      }
      .item-total {
        height: 108px;
        background: #fafafa;
        padding: 24px 33px 29px 30px;
        font-size: 14px;
        margin-top: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
        .phone-total {
          font-size: 24px;
          color: #ff6600;
          margin-top: 18px;
        }
      }
    }
  }
  .price-info {
    background-color: #f3f3f3;
    height: 340px;
    h2 {
      font-size: 24px;
      color: #333333;
      padding-top: 38px;
      margin-bottom: 30px;
    }
  }
}
</style>

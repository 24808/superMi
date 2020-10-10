<template>
  <div class="personalCenter">
        <nav-header></nav-header>
      <div class="container">
      <div class="el-container row">
          <div class="span4 el-aside">
              <div class="menu-box">
                  <h3>订单中心</h3>
                  <ul>
                      <li><a href="#">我的订单</a></li>
                      <li><a href="#">评价晒单</a></li>
                      <li><a href="#">话费充值订单</a></li>
                      <li><a href="#">依旧换新订单</a></li>
                  </ul>
              </div>
              <div class="menu-box">
                  <h3>个人中心</h3>
                  <ul>
                      <li><a href="#">我的个人中心</a></li>
                      <li><a href="#">消息通知</a></li>
                      <li><a href="#">购买资格</a></li>
                      <li><a href="#">喜欢的商品</a></li>
                      <li><a href="#">优惠卷</a></li>
                      <li><a href="#">收货地址</a></li>
                  </ul>
              </div>
              <div class="menu-box">
                  <h3>账户管理</h3>
                  <ul>
                      <li><a href="#">个人信息</a></li>
                      <li><a href="#">修改密码</a></li>
                  </ul>
              </div>
          </div>
          <div class="span16 el-main">
              <!-- 子路由的出口 -->
    <router-view :key="$route.fullPath"></router-view>
          </div>
      </div>
      </div>
       <nav-footer></nav-footer>
    <home-tool-bar></home-tool-bar>
  </div>
</template>
<script>
import NavHeader from "./../../components/content/homeNav/NavHeader";
import NavFooter from "./../../components/content/homeNav/NavFooter";
import homeToolBar from "./../../components/common/home-tool-bar";
export default {
  name: "personalCenter",
  components: { NavHeader,NavFooter ,homeToolBar},
 
};
</script>
<style scoped lang="scss">
.personalCenter{
background:#f5f5f5;

.row{

    .span4,.span16{
        display: block;
    }
    .span4{
        width: 234px;
        background: #fff;
        .menu-box{
        margin:  0 48px 12px;
 h3{
            font-size: 16px;
            font-weight: 400;
            line-height: 52px;
            color: #333;
            margin: 0;
            padding: 0;
        }
        ul{
            list-style: none;
            li{
                padding: 6px 0;
                a{
                color: #333;
            }
            }
            
        }
        }
       
    }
.span16{
    margin-left: 16px;
      width: 978px;
       background: #fff;
}
}}
</style>

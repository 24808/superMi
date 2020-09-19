<template>
  <div id="app">
    <!-- <route-view></route-view> -->
    <!-- 是最顶层的出口，渲染最高级路由匹配到的组件。 -->
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import storage from "./storage";
import { getphoneList } from "./network/home";
import { getlogin,getCartCount } from "./network/login";
export default {
  name: "app",
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    // storage.setItem("a", 2, "b");
    //封装好的storage
    // storage.setItem("a", { sb: "me" }, "user");
    // storage.setItem("b", 24808);
    // storage.clear("a", "user");
    console.log("asdsd");

    // getphoneList().then((res) => {
    //   this.data = res;
    // });
    //携带了cookie，可以获取用户信息
     this.getUser();
    this.getCartCount();
  },
  methods:{
    //用户
    getUser(){
      getlogin().then(res=>{
        this.$store.dispatch('saveUserName',res.username)
              });
          },
          //购物车数量
          getCartCount(){
      getCartCount().then(res=>{
        this.$store.dispatch('saveCartCount',res)
              });
          }
  }
};
</script>

<style>
@import "./assets/scss/reset.scss";
</style>

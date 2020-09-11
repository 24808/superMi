<template>
  <div id="app">
    <!-- <route-view></route-view> -->
    <!-- 是最顶层的出口，渲染最高级路由匹配到的组件。 -->
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage";
import { getphoneList } from "./network/home";
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
  },
};
</script>

<style>
@import "./assets/scss/reset.scss";
</style>

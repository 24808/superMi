<template>
  <div id="app">
    <!-- <route-view></route-view> -->
    <!-- 是最顶层的出口，渲染最高级路由匹配到的组件。 -->asdsd
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage";
export default {
  name: "app",
  mounted() {
    // storage.setItem("a", 2, "b");
    //封装好的storage
    storage.setItem("a", { sb: "me" }, "user");
    storage.setItem("b", 24808);
    // storage.clear("a", "user");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

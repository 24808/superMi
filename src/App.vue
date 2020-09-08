<template>
  <div id="app">
    <!-- <route-view></route-view> -->
    <!-- 是最顶层的出口，渲染最高级路由匹配到的组件。 -->
    {{ data }}
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage";
import { mock } from "./network/mock";
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

    mock().then((res) => {
      this.data = res;
    });
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

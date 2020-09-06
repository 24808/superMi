<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
import jsonp from "jsonp";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      age: 301,
    };
  },
  mounted() {
    // jsonp跨域
    let url = "https://www.imooc.com/common/adver-getadver";
    // rows跨域
    // "https://easy-mock.com/mock/5f54a2d522b6925fcfc5dd5e/example/query";
    //使用jsonp保存
    // axios
    //   .get(url)
    //   .then((res) => console.log(res))
    //   .catch((res) => {
    //     console.log(res);
    //   });
    jsonp(url, (err, res) => {
      console.log(res);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

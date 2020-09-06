import Vue from "vue";
import App from "./App.vue";
// import router from "./router"

// import router from "./routes";
import router from "./routes";
import ElementUI from "element-ui";
Vue.config.productionTip = false;
Vue.use(router);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
console.log(router);
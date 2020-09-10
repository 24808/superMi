import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
import router from "./routes";
import ElementUI from "element-ui";
import env from "./dev"

Vue.use(router);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

console.log(env.baseURL);
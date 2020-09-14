import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
import router from "./routes";
import ElementUI from "element-ui";
import VueLazyLoad from "vue-lazyload"
import env from "./dev"

Vue.use(router);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

console.log(env.baseURL);
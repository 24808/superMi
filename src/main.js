import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
import router from "./routes";
import ElementUI from "element-ui";
import VueLazyLoad from "vue-lazyload"
import env from "./dev"
import VueCookie from "vue-cookie"
//vuex
import store from"./store";
//路由
Vue.use(router);
//cookie
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
});
new Vue({
  router,store,
  render: (h) => h(App),
}).$mount("#app");
console.log(env.baseURL);
import Vue from "vue"
import Router from 'vue-router';
import home from "./view/Home/home"
import index from "./view/Home/HomeChild/index"
import product from "./view/Home/HomeChild/product"
import detail from "./view/Home/HomeChild/detail"
import cart from "./view/Order/OrderChild/cart"
import order from "./view/Order/order"
import login from "./view/login"
import orderConfirm from "./view/Order/OrderChild/orderConfirm"
import orderList from "./view/Order/OrderChild/orderList"
import orderPay from "./view/Order/OrderChild/orderPay"
import alipay from "./view/Order/OrderChild/alipay"
// http://localhost:8080/#/product/1
// http://localhost:8080/#/product/42
// 1/安装插件
Vue.use(Router);
export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: home,
      redirect: '/index',
      // 子路由
      children: [{
          path: "/index",
          name: "index",
          component: index,
        },
        {
          path: "product/:id",
          name: "product",
          component: product,
        }, {
          path: "detail/:id",
          name: "detail",
          component: detail,
        },
      ]
    }, {
      path: "/cart",
      name: "cart",
      component: cart,
    }, {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/login",
      name: "login",
      component: login,
      children: [{
        path: "orderConfirm",
        name: "orderConfirm",
        component: orderConfirm,
      }, {
        path: "orderList",
        name: "orderList",
        component: orderList,
      }, {
        path: "orderPay",
        name: "orderPay",
        component: orderPay,
      }, {
        path: "alipay",
        name: "alipay",
        component: alipay,
      }]
    }
  ]
})
import Vue from "vue"
import Router from 'vue-router';
import login from "./view/login"
import home from "./view/Home/home"
import index from "./view/Home/HomeChild/index"
import product from "./view/Home/HomeChild/product"
import detail from "./view/Home/HomeChild/detail"
import cart from "./view/Order/OrderChild/cart"
import order from "./view/Order/order"
import orderConfirm from "./view/Order/OrderChild/orderConfirm"
import orderList from "./view/Order/OrderChild/orderList"
import orderPay from "./view/Order/OrderChild/orderPay"
import alipay from "./view/Order/OrderChild/alipay"

// 1/安装插件
Vue.use(Router);
export default new Router({
  routes: [{
      path: "",
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
    },{
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/order",
      name: "order",
      component: order,
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
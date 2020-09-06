// import Vue from "vue"
// import router from 'vue-router';
// import home from "./../view/home"
// import index from "./../view/Home/HomeChild/index"
// import product from "./../view/Home/HomeChild/product"
// import detail from "./../view/Home/HomeChild/detail"
// import cart from "./../view/cart"
// import order from "./../view/Order/order"
// import orderConfirm from "./../view/Order/OrderChild/orderConfirm"
// import orderList from "./../view/Order/OrderChild/orderList"
// import orderPay from "./../view/OrderPay/orderPay"
// import alipay from "./../view/OrderPay/orderPayChild/alipay"
// // 加载插件
// Vue.use(router)
// export default new router({
//   routes: [{
//       path: "/",
//       name: "home",
//       component: home,
//       children: [{
//           path: "/index",
//           name: "index",
//           component: index,
//         },
//         {
//           path: "/product/:id",
//           name: "product",
//           component: product,
//         }, {
//           path: "/detail/:id",
//           name: "detail",
//           component: detail,
//         },
//       ]
//     }, {
//       path: "/cart",
//       name: "cart",
//       component: cart,
//     },
//     {
//       path: "/order",
//       name: "order",
//       component: order,
//       childern: [{
//         path: "/orderConfirm",
//         name: "orderConfirm",
//         component: orderConfirm,
//       }, {
//         path: "/orderList",
//         name: "orderList",
//         component: orderList,
//       }, {
//         path: "/orderPay",
//         name: "orderPay",
//         component: orderPay,
//       }]
//     }
//   ]
// })


import Vue from "vue"
import Router from 'vue-router';
import home from "./view/Home/home"

// 1/安装插件
Vue.use(Router);
const routes = [{
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },



];

const router = new Router({
  routes,
});
export default router;
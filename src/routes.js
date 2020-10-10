import Vue from "vue"
import Router from 'vue-router';
import home from "./view/Home/home"
import index from "./view/Home/HomeChild/index"
import seach from "./view/Home/HomeChild/seach"
import seckill from "./view/Home/HomeChild/seckill"
import product from "./view/Home/HomeChild/product"
import comment from "./view/Home/HomeChild/comment"
import detail from "./view/Home/HomeChild/detail"
//个人中心
import personalCenter from "./view/personalCenter/personalCenter"

import coupon from "./view/personalCenter/personalCenterChild/coupon"
import myOrder from "./view/personalCenter/personalCenterChild/myOrder"
import myPersonalCenter from "./view/personalCenter/personalCenterChild/myPersonalCenter"
import PhoneBill from "./view/personalCenter/personalCenterChild/PhoneBill"
import shippingAddress from "./view/personalCenter/personalCenterChild/shippingAddress"
//
//account
import account from "./view/account/account"
import PersonalInfo from "./view/account/accountChild/PersonalInfo"
import security from "./view/account/accountChild/security"
import Personalnone from "./view/account/accountChild/Personalnone"
//
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
// const index = () =>
//     import ("./view/Home/HomeChild/index");
// // import home from "./view/Home/home"
// const home = () =>
//     import ("./view/Home/home");
// // import index from "./view/Home/HomeChild/index"
// const product = () =>
//     import ("./view/Home/HomeChild/product");
// // import product from "./view/Home/HomeChild/product"
// const detail = () =>
//     import ("./view/Home/HomeChild/detail");
// // import detail from "./view/Home/HomeChild/detail"
// const cart = () =>
//     import ("./view/Order/OrderChild/cart");
// // import cart from "./view/Order/OrderChild/cart"
// const order = () =>
//     import ("./view/Order/order");
// // import order from "./view/Order/order"
// const login = () =>
//     import ("./view/login");
// // import login from "./view/login"
// const orderConfirm = () =>
//     import ("./view/Order/OrderChild/orderConfirm");
// // import orderConfirm from "./view/Order/OrderChild/orderConfirm"
// const orderList = () =>
//     import ("./view/Order/OrderChild/orderList");
// // import orderList from "./view/Order/OrderChild/orderList"
// const orderPay = () =>
//     import ("./view/Order/OrderChild/orderPay");
// // import orderPay from "./view/Order/OrderChild/orderPay"
// const alipay = () =>
//     import ("./view/Order/OrderChild/alipay");
// // import alipay from "./view/Order/OrderChild/alipay"







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
                    // component: resolve => require(['./view/Home/HomeChild/indexChild/index'], resolve)
                }, {
                    path: "seckill",
                    name: "seckill",
                    component: seckill,
                },

                {
                    path: "comment/:id",
                    name: "comment",
                    component: comment,
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
                {
                    path: "seach/:keyword",
                    name: "seach",
                    component: seach,
                },
            ]
        },
        {
            path: "/personalCenter",
            name: "personalCenter",
            component: personalCenter,
            redirect: 'personalCenter/coupon',

            children: [{
                path: "coupon",
                name: "coupon",
                component: coupon,
            }, {
                path: "myOrder",
                name: "myOrder",
                component: myOrder,
            }, {
                path: "myPersonalCenter",
                name: "myPersonalCenter",
                component: myPersonalCenter,
            }, {
                path: "PhoneBill",
                name: "PhoneBill",
                component: PhoneBill,
            }, {
                path: "shippingAddress",
                name: "shippingAddress",
                component: shippingAddress,
            }, ]
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
            path: "/account",
            name: "account",
            component: account,
            children: [{
                path: "security",
                name: "security",
                component: security,

            }, {
                path: "PersonalInfo",
                name: "PersonalInfo",
                component: PersonalInfo,
            }, {
                path: "Personalnone",
                name: "Personalnone",
                component: Personalnone,
            }]
        },
        {
            path: "/order",
            name: "order",
            component: order,
            children: [{
                path: "confirm",
                name: "confirm",
                component: orderConfirm,
            }, {
                path: "list",
                name: "list",
                component: orderList,
            }, {
                path: "Pay",
                name: "Pay",
                component: orderPay,
            }, {
                path: "alipay",
                name: "alipay",
                component: alipay,
            }]
        }
    ]
})
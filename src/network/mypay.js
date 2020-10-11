import {
  request
} from "./payrequest";

export function getOrderDetail(orderId) {
  return request({
    url: `/orders/${orderId}`,
    method: "get",
  });
}
export function gopay(orderId, payType) {
  return request({
    url: `/pay`,
    method: "post",
    data: {
      orderId,
      orderName: "你好烦啊",
      amount: 0.01,
      payType: payType,
    },
  });
}

export function go1() {
  return request({
    url: `/carts`,
    method: "post",
    data: {
      productId: 37,
      selected: true
    },
  });
}
export function gologin() {
  return request({
    url: `/user/login`,
    method: "post",
    data: {
      password: "1",
      username: "1"
    },
  });
}




export function go2() {
  return request({
    url: `/orders`,
    method: "post",
    data: {
      shippingId: 5095
    },
  });
}
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
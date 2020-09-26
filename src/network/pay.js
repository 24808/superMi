import {
  request
} from "./request"

export function getOrderDetail(orderId) {
  return request({
    url: `/orders/${payid}`,
  })
}
export function gopay(orderId, payType) {
  return request({
    url: `/pay`,
    method: "post",
    data: {
      orderId,
      orderName: 'Vue高仿小米商场',
      amount: 0.01,
      payType: payType
    }
  })
}
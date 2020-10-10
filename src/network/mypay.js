

export function gopay(orderId, payType) {
  return request({
    url: "http://mi.futurefe.com/api/pay",
    method: "post",
    data: {
      orderId,
      orderName: "你好烦啊",
      amount: 0.01,
      payType: payType,
    },
  });
}
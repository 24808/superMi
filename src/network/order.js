import {
  request
} from "./request"
//获取订单列表
export function getOrderList(pageSize = 10, pageNum = 1) {
  return request({
    url: "/orders",
    method: "get",
    params: {
      pageSize,
      pageNum
    }
  })
}
//获取收获地址
export function getAddressList() {
  return request({
    url: "/shippings",
    method: "get"
  })
}
//获取购物车中需要结算的商品列表
export function getCartList() {
  return request({
    url: "/carts",
    method: "get"
  })
}
//地址
export function editShippings(checkedItem) {
  return request({
    url: `/shippings/${checkedItem.id}`,
    method: "put",
    data: checkedItem
  })
}
export function addShippings(checkedItem) {
  return request({
    url: `/shippings`,
    method: "post",
    data: checkedItem
  })
}
export function delShippings(id) {
  return request({
    url: `/shippings/${id}`,
    method: "delete"
  })
}
export function submitShippings(shippingId) {
  return request({
    url: `/orders`,
    method: "post",
    data: {
      shippingId
    }
  })
}
import {
  request
} from "./request"

export function getAddressList() {
  return request({
    url: "/shippings",
    method: "get"
  })
}
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
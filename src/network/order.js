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
export function editShippings(id) {
  return request({
    url: `/shippings`,
    method: "post"
  })
}
export function addShippings(id) {
  return request({
    url: `/shippings/${id}`,
    method: "put"
  })
}
export function delShippings(id) {
  return request({
    url: `/shippings/${id}`,
    method: "delete"
  })
}
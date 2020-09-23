import {
  request
} from "./request";
import axios from "axios";
// 添加购物车
export function addCart(id) {
  return request({
    url: "/carts",
    method: "post",
    data: {
      productId: id,
      selected: true
    }
  })
}
//查询购物车
export function getCartList() {
  return request({
    url: "/carts",
    method: "get"
  })
}
//全选和全不选

export function SelectAll() {
  return request({
    url: '/carts/selectAll',
    method: 'put'
  })
}
export function UnSelectAll() {
  return request({
    url: '/carts/unSelectAll',
    method: 'put'
  })
}
//更新购物车
export function updateCart(id, quantity, selected) {
  return request({
    url: `/carts/${id}`,
    method: 'put',
    data: {
      quantity,
      selected
    }
  })
}
export function delProduct(id) {
  return request({
    url: `/carts/${id}`,
    method: 'delete'
  })
}
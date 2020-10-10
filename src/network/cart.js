import {
  request
} from "./request";
import axios from "axios";
// 添加购物车
export function addCart(goodid="G1001",specificationarr="GS1004,GS1001",price=5599) {
  return request({
    url: `/ShoppingApi/IntoShoppingCar`,
    method: "post",
    data: {
      goodid,specificationarr,price
    }

  })
}
// 减少购物车商品
export function jianCart(goodid="G1001",type=0) {
  let param = new URLSearchParams();
  param.append("goodid", goodid);
  param.append("type", type);
  return request({
    url: "/ShoppingApi/jianShoppingCar",
    method: "post",
    data: param

  })
}
// 取反选中
export function fanCart(goodid="G1001") {
  let param = new URLSearchParams();
  param.append("goodid", goodid);
  // param.append("type", type);
  return request({
    url: `/ShoppingApi/fanShoppingCar`,
    method: "post",
    data: param

  })
}
//查询购物车
export function getCartList() {
  return request({
    url: "/ShoppingApi/ShiooingCarList",
    method: "get"
  })
}
//删除
export function ShiooingCarDelect(goodid) {
  let param = new URLSearchParams();
  param.append("goodid", goodid);
  return request({
    url: "/ShoppingApi/ShiooingCarDelect",
    method: "post", data: param
  })
}
//测试
// meiyoude
export function ceshi(list) {
  let param = new URLSearchParams();

  param.append("list",  JSON.stringify(list));
  return request({
    url: "/ShoppingApi/meiyoude",
  
    method: "post", data: param
  })
}
//创建订单
// meiyoude
export function GetSettlementsList(list) {
  let param = new URLSearchParams();

  param.append("sett",  JSON.stringify(list));
  return request({
    url: "/ShoppingApi/CreateOrderList",
  
    method: "post", data: param
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
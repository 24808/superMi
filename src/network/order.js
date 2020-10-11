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
///////////新的
export function GetSettlements(orderid) {

  // let param = new URLSearchParams();
  // param.append("orderid",  orderid );

  return request({
    url: `/ShoppingApi/GetSettlements`,
    // method: "post",
    params: {
      orderid
    }
  })
}
//收货地址
export function GetShoppingAddress(orderid) {
  return request({
    url: `/Personal/GetShoppingAddress`,
   
  })
}

export function AddADDress(list) {
  let address= list.province+","+list.city +","+list.county +","+list.address
  let param = new URLSearchParams();
  param.append("Name",  list.name );
  param.append("Phone",  list.phone );
  param.append("Address",  address );

  return request({
    url: `/Personal/AddADDress`,
    method: "post",
    data:param
  })
}
export function UpAddress(list) {

  let param = new URLSearchParams();
  param.append("id",  list.id );
  param.append("Name",  list.name );
  param.append("Phone",  list.phone );
  param.append("Address",  list.address );

  return request({
    url: `/Personal/UpAddress`,
    method: "post",
    data:param
  })
}
export function DeleteAddress(list) {

  let param = new URLSearchParams();
  param.append("id",  list.id );
  return request({
    url: `/Personal/Delete`,
    method: "post",
    data:param
  })
}
//去结算
export function SettleBtnClick(orderid,address,totalPrice,name,phone,couponid) {

  let param = new URLSearchParams();
  param.append("orderid",  orderid );
  param.append("Address",  address );
  param.append("Name",  name );
  param.append("Phone",  phone );
  param.append("couponid",  couponid );
  param.append("totalPrice",  totalPrice );
  return request({
    url: `/ShoppingApi/SettleBtnClick`,
    method: "post",
    data:param
  })
}

//改变订单状态


export function ChangeOrderType(orderid) {

  let param = new URLSearchParams();
  param.append("orderid",  orderid );

  return request({
    url: `/ShoppingApi/ChangeOrderType`,
    method: "post",
    data:param
  })
}
//查看订单状态
// /api/Personal/GetPersonal
export function GetBuyingLists() {
  return request({
    url: `/Home/GetBuyingLists`,
  })
}
export function GetBuyingGoodList() {
 
  // param.append("type", type);
  return request({
    url: `/Home/GetBuyingGoodList`,

  })
}
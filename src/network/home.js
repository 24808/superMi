import {
  request
} from "./request";

export function getphoneList() {
  return request({
    url: "/products",
    method: "get",
    params: {
      categoryId: "100012",
      pageSize: 6
    },
  });
}
export function getProductsList() {
  return request({
    // HomeApi/GetHomeGood?page=1&limte=20"
    url: "/HomeApi/GetHomeGood",
    method: "get",
    // params: {
    //   page: 1,
    //   limte: 13
    // }
  })
}
// getProductsList
export function getgood(id) {
  return request({
    url: "/carts",
    method: "get",
    query: {
      productId: id,
      selected: true
    },
  })
}
//轮播图左边小图
export function GetCagegoryHomes() {
  return request({
    url: "/HomeApi/CagegoryHome",
    method: "get",
  })
}
export function HomeTopList() {
  return request({
    url: "/HomeApi/HomeTopList",
    method: "get",
  })
}
//查询分类的商品
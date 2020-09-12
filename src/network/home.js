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
    url: "/products",
    params: {
      categoryId: 100012,
      pageSize: 8
    }
  })
}
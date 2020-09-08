import {
  request
} from "./request"
export function mock() {
  return request({
    url: "/mock/user/login.json",
    method: "get"
  })
}
// return request({
//   url: "home/data",
//   params: {
//     type,
//     page
//   }
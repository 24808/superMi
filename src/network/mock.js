import {
  request
} from "./request"

export function mock() {
  return request({
    // url: "/mock/user/login.json",
    url: "/user/login",
    method: "get"
  })
}
// return request({
//   url: "home/data",
//   params: {
//     type,
//     page
//   }
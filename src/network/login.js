import {
  request
} from "./request";
import axios from "axios";
//登录
export function login(username, password) {
  return request({
    url: "/user/login",
    method: "post",
    data: {
      username,
      password
    }
  })
}
//注册
export function register(username, password,email) {
  return request({
    url: "/user/register",
    method: "post",
    data: {
      username,
      password,
      email
    }
  })
}
//获取登录信息
export function getlogin(){
  return request({
    url:"/user",
  })
}
//获取购物车信息数量
export function getCartCount(){
  return request({
    url:"/carts/products/sum",
  })
}
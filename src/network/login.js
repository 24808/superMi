import {
  request
} from "./request";
import axios from "axios";
//登录
export function login(username, password) {
  let param = new URLSearchParams();
  param.append("userId",  username);
  param.append("pwd",  password);
  return request({
    url: "/Login/Login",
    method: "post",
  data: param
  })
}
//修改密码
export function pudpwd(oldpwd,newpwd, code) {
  let param = new URLSearchParams();
  param.append("pwd",  oldpwd);
  param.append("pwdOld",  newpwd);
  param.append("Code",  code);
  return request({
    url: "/Personal/UpUserInfo",
    method: "post",
  data: param
  })
}
//发送验证码登录
export function Yz(email){
  return request({
    url:'/Personal/Yz',
    params:{email}
  })
}
//退出登录
export function logout(){
  return request({
    url:'/Login/OutLogin',method:'post'
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
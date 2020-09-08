import axios from "axios";
//通过不同环境获取baseurl
import env from "./../dev"
// axios.defaults.baseURL="全局默认url"
// axios.defaults.timeout="全局默认时间"
export function request(config) {
  let instance = axios.create({
    // baseURL: "http://123.207.32.32:8000/api/x6/",
    //根据前端的跨域方式做调整
    //根据黄金变量获取不同的请求地址
    // baseURL: env.baseURL,
    timeout: 5000,
  })
  //错误拦截
  instance.interceptors.response.use(function (response) {
    let res = response.data
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      window.location.href = '/#/login'
    } else {
      alert(res)
    }
  })
  return instance(config);
}
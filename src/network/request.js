import axios from "axios";
//通过不同环境获取baseurl
import env from "./../dev";
//mock的开关/魔力数据

// axios.defaults.baseURL="全局默认url"
// axios.defaults.timeout="全局默认时间"
const mock = false;
if (mock) {
  //拦截请求，响应模拟数据
  require("./../../public/mock/api");
}
export function request(config) {
  let instance = axios.create({
    // baseURL: "http://123.207.32.32:8000/api/x6/",
    //根据前端的跨域方式做调整
    //根据黄金变量获取不同的请求地址
    baseURL: "/api",
    // baseURL: "https://www.easy-mock.com/mock/5f58f4b39ff3095b55ad7e36/mimall",

    timeout: 5000,
  });
  //错误拦截:1.拦截状态2.拦截请求
  instance.interceptors.response.use(function (response) {
    let res = response.data;
    console.log(res)
    //获取路径
    let path = location.hash;
    // alert(res.status)
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      if (path != "#/index") {
        window.location.href = "/#/login";
      }
      return Promise.reject();
    } else {
      alert(res);
      //返回异常
      return Promise.reject();
    }
  }, (err) => {
    let res = err.response;
    this.$message.error(res.data.message)
    return Promise.reject(err);
  });
  return instance(config);
}
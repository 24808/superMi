let baseURL;
// process.env.NODE_ENV 获取node进程里的环境变量
switch (process.env.NODE_ENV) {
  //开发、测试、线上
  case "development":
    baseURL = "http://dev-mall-pre.springboot.cn/api";
    break;
  case "test":
    baseURL = "http://test-mall-pre.springboot.cn/api";
    break;
  case "prod":
    baseURL = "http://mall-pre.springboot.cn/api";
    break;
  default:
    baseURL = "http://mall-pre.springboot.cn/api";

    break;
}

export default {
  baseURL,
};
import Mock from "mockjs"
Mock.mock("/api/user/login", {
  "status": 0,
  "data": {
    "data": {
      "id": 1112,
      // "username": "admin",
      //随机名字
      "username": "@cname",
      "email": "admin",
      "phone": null,
      "role": 0,
      "createTime": 1479048325000,
      "updateTime": 1479048325000,
      "status": 0
    }
  }
})
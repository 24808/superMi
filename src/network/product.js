import {
  request
} from "./request";
import axios from "axios";

export function getProductInfo(id) {
  return request({
    url: `/products/${id}`,
    method: "get",
  });
}
//商品的查询
export function gogetProductInfo(id) {
  return request({
    url: "/Details/GetGood",
    method: "get",
    
    params: {
      goodid: "G1001"
    }
  });
}
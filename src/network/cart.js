import {
  request
} from "./request";
import axios from "axios";

export function addCart(id) {
  return request({
    url: "/carts",
    method: "post",
    data: {
      productId: id,
      selected: true
    }
  })
}
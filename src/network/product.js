
  import {request} from "./request"
  import axios from "axios";

  export function getProductInfo(id){
      return request({
          url:`/products/${id}`,
          method:"get"
      })
  }
import {
  request
} from "./request";
import axios from "axios";

export function GetBuyingLists() {
  return request({
    url: `/HomeApi/GetBuyingLists`,
  })
}
export function GetBuyingGoodList() {
  return request({
    url: `/HomeApi/GetBuyingGoodList`,
  })
}
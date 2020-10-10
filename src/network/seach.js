import {
  request
} from "./request";

export function getseachgoodsList(name) {
  return request({
    url: "/HomeApi/FuzzyGood",
    method: "get",
    params: {
      str: name,
      page:1,
      limte: 20
    },
  });
}
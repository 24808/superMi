import { request } from "./request";

export function getphoneList() {
  return request({
    url: "/products",
    method: "get",
    params: {
      categoryId: "100012",
    },
  });
}

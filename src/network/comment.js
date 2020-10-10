import {
  request
} from "./request";

export function GetGoodComment(goodid) {
  return request({
    url: "/Details/GetGoodComment",
    method: "get",
    params: {
      goodid
    },
  });
}
export function ReplyComment(goodid,commentid,content) {
  let param = new URLSearchParams();

  param.append("goodid",  goodid);
  param.append("commentid",  commentid);
  param.append("content",  content);
  return request({
    url: "/Details/ReplyComments",
    method: "post",
    data: param
  });
}
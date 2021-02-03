import {request, get} from "@/plugins/request"

export function login(data) {
  return request({
    url: "/samples/user/login",
    method: "post",
    data
  })
}

export function logout() {
  return request({
    url: "/samples/user/logout",
    method: "post"
  })
}

export function getInfo(id) {
  return get("/samples/user/info", {id})
}




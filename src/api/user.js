export function login(data) {
  return new Promise(function (resolve) {
    resolve({id: "admin", name: "admin", data: data}) // Test
  });
}

export function getInfo() {
  return new Promise(function (resolve) {
    resolve({roles: ["admin"], name: "admin", id: "admin"}) // Test
  });
}

export function logout() {
  return new Promise(function (resolve) {
    resolve()
  });
}

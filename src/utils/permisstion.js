import store from "@/store";

export const hasPermissions = function (...roles) {
  const userRoles = store.getters && store.getters.roles

  return userRoles.some(role => {
    return roles.includes(role)
  })
}

export const hasAllPermissions = function (...roles) {
  const userRoles = store.getters && store.getters.roles

  const hasRoles = userRoles.filter(role => {
    return userRoles.includes(role)
  })

  return hasRoles.length === roles.length;
}

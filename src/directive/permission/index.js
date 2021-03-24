import store from '@/store'

// 检查用户权限是否在定义权限范围内
function checkPermissions(roles, and = false) {
  let hasPermissions = false

  // 用户权限
  const userRoles = store.getters && store.getters.roles

  if (roles && roles instanceof Array) {
    if (roles.length > 0) {
      if (and) { // and 所有权限都有
        const hasRoles = userRoles.filter(role => {
          return roles.includes(role)
        })
        if (hasRoles.length === roles.length) {
          hasPermissions = true
        }
      } else { // or 有其中一个权限
        hasPermissions = userRoles.some(role => {
          return roles.includes(role)
        })
      }
    }
  }
  return hasPermissions
}

function hasPermissions(el, binding) {
  const {value, modifiers} = binding

  const hasPermissions = checkPermissions(value, modifiers?.and)

  if (!hasPermissions) {
    el.parentNode && el.parentNode.removeChild(el)
  }
}

function lackPermissions(el, binding) {
  const {value, modifiers} = binding

  const hasPermissions = checkPermissions(value, modifiers?.and)

  if (hasPermissions) {
    el.parentNode && el.parentNode.removeChild(el)
  }
}

export default {
  hasPermissions: {
    inserted(el, binding) {
      hasPermissions(el, binding)
    },
    update(el, binding) {
      hasPermissions(el, binding)
    }
  },
  lackPermissions: {
    inserted(el, binding) {
      lackPermissions(el, binding)
    },
    update(el, binding) {
      lackPermissions(el, binding)
    }
  }
}

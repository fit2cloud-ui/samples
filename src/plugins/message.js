import {Message} from 'element-ui';

export const $success = (message, duration) => {
  Message.success({
    message: message,
    type: "success",
    showClose: true,
    duration: duration || 1500
  })
}

export const $info = (message, duration) => {
  Message.info({
    message: message,
    type: "info",
    showClose: true,
    duration: duration || 3000
  })
}

export const $warning = (message, duration) => {
  Message.warning({
    message: message,
    type: "warning",
    showClose: true,
    duration: duration || 5000
  })
}

export const $error = (message, duration) => {
  Message.error({
    message: message,
    type: "error",
    showClose: true,
    duration: duration || 10000
  })
}

export default {
  install(Vue) {
    Vue.prototype.$success = $success;
    Vue.prototype.$info = $info;
    Vue.prototype.$warning = $warning;
    Vue.prototype.$error = $error;
  }
}

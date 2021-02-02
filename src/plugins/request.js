import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
import store from '@/store'
import i18n from "@/i18n";

// 默认的请求方法
export const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true,
  timeout: 5000 // request timeout
})

const checkAuth = response => {
  if (response.headers["authentication-status"] === "invalid") {
    let message = i18n.t('login.expires');
    let title = i18n.t('login.alert');
    MessageBox.alert(message, title).then(() => {
      store.dispatch('user/logout').then(() => {
        location.reload()
      })
    });
  }
}

request.interceptors.response.use(response => {
  checkAuth(response);
  return response;
}, error => {
  if (error.response) {
    checkAuth(error.response);
  } else {
    console.log('error: ' + error) // for debug
    Message.error({
      message: error.message,
      type: "error",
      showClose: true,
      duration: 10000
    })
  }
  return Promise.reject(error);
});


/* 简化请求方法，仅针对返回值为{success, data, message}格式的请求，并且统一处理失败或异常情况，如果特殊需求直接用request(例如登录请求) */
const promise = (request, loading = {}) => {
  return new Promise((resolve, reject) => {
    loading.status = true;
    request.then(response => {
      if (response.data.success) {
        // 执行成功方法
        resolve(response.data);
      } else {
        // 发出错误消息并执行失败方法
        Message.warning({
          message: response.data.message,
          type: "warning",
          showClose: true,
          duration: 5000
        })
        reject(response.data)
      }
      loading.status = false;
    }).catch(() => {
      loading.status = false;
    })
  })
}

export const get = (url, data, loading) => {
  return promise(request({url: url, method: "get", params: data}), loading)
};

export const post = (url, data, loading) => {
  return promise(request({url: url, method: "post", data}), loading)
};

export const put = (url, data, loading) => {
  return promise(request({url: url, method: "put", data}), loading)
};

export const del = (url, loading) => {
  return promise(request({url: url, method: "delete"}), loading)
};

export default {
  install(Vue) {
    Vue.prototype.$get = get;
    Vue.prototype.$post = post;
    Vue.prototype.$put = put;
    Vue.prototype.$delete = del;
    Vue.prototype.$request = request;
  }
}

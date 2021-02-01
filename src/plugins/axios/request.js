import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
import store from '@/store'
import i18n from "@/i18n";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true,
  timeout: 5000 // request timeout
})

const login = function () {
  let message = i18n.t('login.expires');
  let title = i18n.t('login.alert');
  MessageBox.alert(message, title).then(() => {
    store.dispatch('user/logout').then(() => {
      location.reload()
    })
  });
};

const checkAuth = response => {
  if (response.headers["authentication-status"] === "invalid") {
    login()
  }
}

instance.interceptors.response.use(response => {
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

const then = (success, response, result) => {
  if (response.data.success) {
    success(response.data);
  } else {
    Message.warning({
      message: response.data.message,
      type: "warning",
      showClose: true,
      duration: 5000
    })
  }
  result.loading = false;
}

/* --常用请求方法：仅针对返回值为{success, data, message}格式的内容，其他的直接用instance(例如登录请求)-- */
export const $get = (url, data, success) => {
  let result = {loading: true};
  instance({
    url: url,
    method: 'get',
    params: data
  }).then(response => {
    then(success, response, result);
  })
  return result;
};

export const $post = (url, data, success) => {
  let result = {loading: true};
  instance({
    url: url,
    method: 'post',
    data
  }).then(response => {
    then(success, response, result);
  })
  return result;
};

export const $put = (url, data, success) => {
  let result = {loading: true};
  instance({
    url: url,
    method: 'put',
    data
  }).then(response => {
    then(success, response, result);
  })
  return result;
};

export const $delete = (url, success) => {
  let result = {loading: true};
  instance({
    url: url,
    method: 'delete'
  }).then(response => {
    then(success, response, result);
  })
  return result;
};
/* -- 常用请求方法 --*/

export default instance

import {$get, $post, $put, $delete} from "@/plugins/axios/request";

export default {
  install(Vue) {
    Vue.prototype.$get = $get;
    Vue.prototype.$post = $post;
    Vue.prototype.$put = $put;
    Vue.prototype.$delete = $delete;
  }
}

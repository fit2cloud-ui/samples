import Vue from 'vue'
import "@/styles/index.scss"
import ElementUI from 'element-ui';
import App from './App.vue'
import i18n from "@/i18n";
import router from './router'
import store from './store'
import icons from './icons'
import plugins from "@/plugins";

store.dispatch('permission/generateRoutes', ['admin'])
store.dispatch('user/getInfo', 'admin')

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small',
  i18n: (key, value) => i18n.t(key, value)
});
Vue.use(icons);
Vue.use(plugins);

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App),
})

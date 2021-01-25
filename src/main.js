import Vue from 'vue'
import "@/styles/index.scss"
import ElementUI from 'element-ui';
import App from './App.vue'
import i18n from "@/i18n";
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  el: '#app',
  i18n,
  store,
  render: h => h(App),
})

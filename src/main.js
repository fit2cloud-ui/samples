import Vue from 'vue'
import "@/styles/index.scss"
import ElementUI from 'element-ui';
import App from './App.vue'
import i18n from "@/i18n";

Vue.config.productionTip = false

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  render: h => h(App),
  i18n,
}).$mount('#app')

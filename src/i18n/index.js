import Vue from 'vue';
import VueI18n from "vue-i18n";
import axios from "axios";
import enLocale from "element-ui/lib/locale/lang/en";
import zh_CNLocale from "element-ui/lib/locale/lang/zh-CN";
import zh_CN from "./zh-CN";
import en_US from "./en-US";

Vue.use(VueI18n);

const messages = {
  'en_US': {
    ...enLocale,
    ...en_US
  },
  'zh_CN': {
    ...zh_CNLocale,
    ...zh_CN
  }
};

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages,
});

const loadedLanguages = ['en_US', 'zh_CN', 'zh_TW'];

function setI18nLanguage(lang) {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

// 组合翻译，例如key为'请输入{0}'，keys为login.username，则自动讲keys翻译并替换到{0}
Vue.prototype.$tm = function (key, ...keys) {
  let values = [];
  for (const k of keys) {
    values.push(i18n.t(k))
  }
  return i18n.t(key, values);
};

Vue.prototype.$setLang = function (lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      let file = lang.replace("_", "-");
      return import(`./${file}`).then(response => {
        i18n.mergeLocaleMessage(lang, response.default);
        loadedLanguages.push(lang);
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
};

export default i18n;

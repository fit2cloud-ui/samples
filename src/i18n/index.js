import Vue from 'vue';
import VueI18n from "vue-i18n";
import axios from "axios";

Vue.use(VueI18n);

// 直接加载翻译的语言文件
const LOADED_LANGUAGES = ['zh-CN', 'en-US'];

const langFiles = require.context('./lang', true, /\.js$/)

// 自动加载lang目录下语言文件，默认只加载LOADED_LANGUAGES中规定的语言文件，其他的语言在调用$setLang时动态加载
const messages = langFiles.keys().reduce((messages, path) => {
  const value = langFiles(path)
  const lang = path.replace(/^\.\/(.*)\.\w+$/, '$1');
  if (LOADED_LANGUAGES.includes(lang)) {
    messages[lang] = value.default
  }
  return messages;
}, {})

const i18n = new VueI18n({
  locale: 'zh-CN',
  messages,
});

function setLanguage(lang) {
  i18n.locale = lang;
  axios.defaults.headers.common['Accept-Language'] = lang;
  document.querySelector('html').setAttribute('lang', lang);
  return lang;
}

// 组合翻译，例如key为'请输入{0}'，keys为login.username，则自动将keys翻译并替换到{0} {1}...
Vue.prototype.$tm = function (key, ...keys) {
  let values = [];
  for (const k of keys) {
    values.push(i18n.t(k))
  }
  return i18n.t(key, values);
};

// 设置当前语言，LOADED_LANGUAGES以外的翻译文件会自动从lang目录获取(如果有的话), 如果不需要动态加载语言文件，直接用setLanguage就可以了
Vue.prototype.$setLang = function (lang) {
  if (i18n.locale !== lang) {
    if (!LOADED_LANGUAGES.includes(lang)) {
      return import(`./lang/${lang}`).then(response => {
        i18n.mergeLocaleMessage(lang, response.default);
        LOADED_LANGUAGES.push(lang);
        return setLanguage(lang)
      })
    }
    return Promise.resolve(setLanguage(lang))
  }
  return Promise.resolve(lang)
};

export default i18n;

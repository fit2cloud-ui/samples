const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
  "element-ui": "ELEMENT"
}

// 这部分需要在index.html引入，如果不用cdn,可以把js放到后端服务器或者nginx上,只要能访问到就可以了。
const cdn = {
   css: ["https://unpkg.com/element-ui/lib/theme-chalk/index.css"],
   js: [
     "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js",
     "https://unpkg.com/vue-router/dist/vue-router.min.js",
     "https://unpkg.com/vuex/dist/vuex.min.js",
     "https://unpkg.com/axios/dist/axios.min.js",
     "https://unpkg.com/element-ui/lib/index.js"
   ]
}

module.exports = {
  productionSourceMap: true,
  publicPath: "./",
  // 使用mock-server
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    externals: externals
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      // html中添加cdn
      args[0].cdn = cdn;
      return args;
    });
  }
};

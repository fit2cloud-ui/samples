(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterKeepAlive.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/business/router-demo/RouterKeepAlive.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout_LayoutContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/layout/LayoutContent */ "./src/components/layout/LayoutContent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RouterKeepAlive",
  components: {
    LayoutContent: _components_layout_LayoutContent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      text: "",
      created: false
    };
  },
  methods: {
    to: function to() {
      this.$router.push({
        name: "RouterKeepAliveDetail"
      });
    }
  },
  destroyed: function destroyed() {
    console.log("RouterKeepAlive destroyed触发");
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"6e30678e-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterKeepAlive.vue?vue&type=template&id=0de20a41&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6e30678e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/business/router-demo/RouterKeepAlive.vue?vue&type=template&id=0de20a41& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "layout-content",
    {
      scopedSlots: _vm._u([
        {
          key: "header",
          fn: function() {
            return [_vm._v(" 路由组件缓存 ")]
          },
          proxy: true
        }
      ])
    },
    [
      _c("h4", [_vm._v(" 缓存当前页面的组件，路由设置cache: true ")]),
      _vm._v(" 例子： "),
      _c("pre", [
        _vm._v(
          '    {\n      path: "keep-alive",\n      component: () => import("@/business/router-demo/RouterKeepAlive"),\n      name: "RouterKeepAlive",\n      meta: {\n        title: "route.router_keep_alive",\n      }\n    },\n    {\n      path: "keep-alive-detail",\n      component: () => import("@/business/router-demo/RouterKeepAliveDetail"),\n      name: "RouterKeepAliveDetail", // cache: true时，必须保证name与component中的name一致\n      hidden: true,\n      meta: {\n        cache: true,\n        activeMenu: "/router-demo/menu"\n      }\n    }\n  '
        )
      ]),
      _c("h4", [
        _vm._v(
          " 该组件没有缓存，在输入框内填写文本，然后打开详情页，再返回该页面，可以看到输入框内容为空。 "
        )
      ]),
      _c("h4", [
        _vm._v(
          " 打开详情页时可以在控制台里看到destroyed触发，说明组件已销毁，没有缓存 "
        )
      ]),
      _c("el-input", {
        staticStyle: { width: "200px", "margin-right": "50px" },
        model: {
          value: _vm.text,
          callback: function($$v) {
            _vm.text = $$v
          },
          expression: "text"
        }
      }),
      _c("el-button", { on: { click: _vm.to } }, [_vm._v("打开详情页(已缓存)")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/business/router-demo/RouterKeepAlive.vue":
/*!******************************************************!*\
  !*** ./src/business/router-demo/RouterKeepAlive.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RouterKeepAlive_vue_vue_type_template_id_0de20a41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterKeepAlive.vue?vue&type=template&id=0de20a41& */ "./src/business/router-demo/RouterKeepAlive.vue?vue&type=template&id=0de20a41&");
/* harmony import */ var _RouterKeepAlive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RouterKeepAlive.vue?vue&type=script&lang=js& */ "./src/business/router-demo/RouterKeepAlive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RouterKeepAlive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RouterKeepAlive_vue_vue_type_template_id_0de20a41___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RouterKeepAlive_vue_vue_type_template_id_0de20a41___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/business/router-demo/RouterKeepAlive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/business/router-demo/RouterKeepAlive.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/business/router-demo/RouterKeepAlive.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterKeepAlive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RouterKeepAlive.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterKeepAlive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterKeepAlive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/business/router-demo/RouterKeepAlive.vue?vue&type=template&id=0de20a41&":
/*!*************************************************************************************!*\
  !*** ./src/business/router-demo/RouterKeepAlive.vue?vue&type=template&id=0de20a41& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_6e30678e_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterKeepAlive_vue_vue_type_template_id_0de20a41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6e30678e-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RouterKeepAlive.vue?vue&type=template&id=0de20a41& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"6e30678e-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterKeepAlive.vue?vue&type=template&id=0de20a41&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_6e30678e_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterKeepAlive_vue_vue_type_template_id_0de20a41___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_6e30678e_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterKeepAlive_vue_vue_type_template_id_0de20a41___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=13.js.map
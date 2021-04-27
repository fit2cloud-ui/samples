(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RouterKeepAliveDetail",
  components: {
    LayoutContent: _components_layout_LayoutContent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      text: ""
    };
  },
  methods: {
    back: function back() {
      this.$router.push({
        name: "RouterKeepAlive"
      });
    }
  },
  destroyed: function destroyed() {
    console.log("RouterKeepAliveDetail destroyed触发");
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"62261fe8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=template&id=a6b1691c&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"62261fe8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=template&id=a6b1691c& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            return [_vm._v(" 详情页 ")]
          },
          proxy: true
        },
        {
          key: "toolbar",
          fn: function() {
            return [
              _c("el-button", { on: { click: _vm.back } }, [_vm._v("返回")])
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c("h4", [
        _vm._v(
          " 该组件设置了缓存，在输入框内填写加文本，然后点击返回，再重新打开该页面，可以看到输入框的内容还在。 "
        )
      ]),
      _c("h4", [
        _vm._v(" 返回时控制台里看不到destroyed触发，说明组件缓存了，没有销毁 ")
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
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/business/router-demo/RouterKeepAliveDetail.vue":
/*!************************************************************!*\
  !*** ./src/business/router-demo/RouterKeepAliveDetail.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RouterKeepAliveDetail_vue_vue_type_template_id_a6b1691c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterKeepAliveDetail.vue?vue&type=template&id=a6b1691c& */ "./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=template&id=a6b1691c&");
/* harmony import */ var _RouterKeepAliveDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RouterKeepAliveDetail.vue?vue&type=script&lang=js& */ "./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RouterKeepAliveDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RouterKeepAliveDetail_vue_vue_type_template_id_a6b1691c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RouterKeepAliveDetail_vue_vue_type_template_id_a6b1691c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/business/router-demo/RouterKeepAliveDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterKeepAliveDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RouterKeepAliveDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterKeepAliveDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=template&id=a6b1691c&":
/*!*******************************************************************************************!*\
  !*** ./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=template&id=a6b1691c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_62261fe8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterKeepAliveDetail_vue_vue_type_template_id_a6b1691c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"62261fe8-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RouterKeepAliveDetail.vue?vue&type=template&id=a6b1691c& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"62261fe8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterKeepAliveDetail.vue?vue&type=template&id=a6b1691c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_62261fe8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterKeepAliveDetail_vue_vue_type_template_id_a6b1691c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_62261fe8_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterKeepAliveDetail_vue_vue_type_template_id_a6b1691c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=14.js.map
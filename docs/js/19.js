(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterMenu.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/business/router-demo/RouterMenu.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  name: "RouterMenu",
  components: {
    LayoutContent: _components_layout_LayoutContent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    to: function to() {
      this.$router.push({
        name: "RouterDetail"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"205458aa-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterMenu.vue?vue&type=template&id=85f65714&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"205458aa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/business/router-demo/RouterMenu.vue?vue&type=template&id=85f65714& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            return [_vm._v(" 路由与菜单 ")]
          },
          proxy: true
        }
      ])
    },
    [
      _c("h4", [
        _vm._v(" 左侧菜单是根据路由生成的 "),
        _c("br"),
        _vm._v(" 路由项(例如: 详情页)不想在菜单中显示: hidden: true "),
        _c("br"),
        _vm._v(' 菜单国际化: title: "route.router_demo" '),
        _c("br"),
        _vm._v(
          ' 详情页关联菜单(高亮显示菜单): activeMenu: "/router-demo/detail" '
        ),
        _c("br"),
        _vm._v(
          " 菜单排序: 一级菜单sort: 1 // 从小到大排序，没有sort的自动按modules目录中文件名顺序排序，并且排在有sort属性的后面 "
        )
      ]),
      _vm._v(" 例子： "),
      _c("pre", [
        _vm._v(
          '    export default {\n      sort: 1,\n      path: "/router-demo",\n      component: Layout,\n      name: "RouterDemo",\n      meta: {\n        title: "route.router_demo",\n        icon: "el-icon-share"\n      },\n      children: [\n        {\n          path: "menu",\n          component: () => import("@/business/router-demo/RouterMenu"),\n          name: "RouterMenu",\n          meta: {\n            title: "route.router_menu",\n          }\n        },\n        {\n          path: "detail",\n          component: () => import("@/business/router-demo/RouterDetail"),\n          name: "RouterDetail",\n          hidden: true,\n          meta: {\n            activeMenu: "/router-demo/menu"\n          }\n        },\n      ]\n    }\n  '
        )
      ]),
      _c("el-button", { on: { click: _vm.to } }, [_vm._v("打开详情页")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/business/router-demo/RouterMenu.vue":
/*!*************************************************!*\
  !*** ./src/business/router-demo/RouterMenu.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RouterMenu_vue_vue_type_template_id_85f65714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterMenu.vue?vue&type=template&id=85f65714& */ "./src/business/router-demo/RouterMenu.vue?vue&type=template&id=85f65714&");
/* harmony import */ var _RouterMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RouterMenu.vue?vue&type=script&lang=js& */ "./src/business/router-demo/RouterMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RouterMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RouterMenu_vue_vue_type_template_id_85f65714___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RouterMenu_vue_vue_type_template_id_85f65714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/business/router-demo/RouterMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/business/router-demo/RouterMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/business/router-demo/RouterMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RouterMenu.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/business/router-demo/RouterMenu.vue?vue&type=template&id=85f65714&":
/*!********************************************************************************!*\
  !*** ./src/business/router-demo/RouterMenu.vue?vue&type=template&id=85f65714& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_205458aa_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterMenu_vue_vue_type_template_id_85f65714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"205458aa-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RouterMenu.vue?vue&type=template&id=85f65714& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"205458aa-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/router-demo/RouterMenu.vue?vue&type=template&id=85f65714&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_205458aa_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterMenu_vue_vue_type_template_id_85f65714___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_205458aa_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RouterMenu_vue_vue_type_template_id_85f65714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=19.js.map
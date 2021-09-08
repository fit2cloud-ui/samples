(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/components/ViewCardDemo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/business/components/ViewCardDemo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_view_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/view-card */ "./src/components/view-card/index.vue");
/* harmony import */ var _components_view_card_label_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/view-card/label-value */ "./src/components/view-card/label-value/index.vue");
/* harmony import */ var _components_layout_LayoutContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/LayoutContent */ "./src/components/layout/LayoutContent.vue");
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
  name: "ViewCardDemo",
  components: {
    LabelValue: _components_view_card_label_value__WEBPACK_IMPORTED_MODULE_1__["default"],
    LayoutContent: _components_layout_LayoutContent__WEBPACK_IMPORTED_MODULE_2__["default"],
    ViewCard: _components_view_card__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    edit: function edit() {
      this.$router.push("/components/form-edit");
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"cd91a0d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/components/ViewCardDemo.vue?vue&type=template&id=436974db&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cd91a0d6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/business/components/ViewCardDemo.vue?vue&type=template&id=436974db& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      attrs: { header: "查看表单" },
      scopedSlots: _vm._u([
        {
          key: "toolbar",
          fn: function() {
            return [
              _c("el-button", { on: { click: _vm.edit } }, [_vm._v("编辑")])
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c(
        "el-row",
        { attrs: { type: "flex", gutter: 20 } },
        [
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c(
                "view-card",
                { attrs: { icon: "el-icon-user-solid", header: "用户信息" } },
                [
                  _c("label-value", { attrs: { label: "ID" } }, [
                    _vm._v("admin")
                  ]),
                  _c("label-value", { attrs: { label: "用户名" } }, [
                    _vm._v("管理员")
                  ]),
                  _c("label-value", { attrs: { label: "Email" } }, [
                    _vm._v("admin@fit2cloud.com")
                  ]),
                  _c(
                    "label-value",
                    { attrs: { label: "启用/禁用" } },
                    [
                      _c("el-tag", { attrs: { type: "primary" } }, [
                        _vm._v("启用")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "el-col",
            { attrs: { span: 12 } },
            [
              _c(
                "view-card",
                {
                  attrs: {
                    icon: "el-icon-user-solid",
                    header: "用户信息2",
                    type: "success"
                  }
                },
                [
                  _c("label-value", { attrs: { label: "ID" } }, [
                    _vm._v("admin")
                  ]),
                  _c("label-value", { attrs: { label: "用户名" } }, [
                    _vm._v("管理员")
                  ]),
                  _c("label-value", { attrs: { label: "Email" } }, [
                    _vm._v("admin@fit2cloud.com")
                  ]),
                  _c(
                    "label-value",
                    { attrs: { label: "启用/禁用" } },
                    [
                      _c("el-tag", { attrs: { type: "primary" } }, [
                        _vm._v("启用")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "el-row",
        { staticStyle: { "margin-top": "20px" }, attrs: { type: "flex" } },
        [
          _c(
            "el-col",
            { attrs: { span: 24 } },
            [
              _c(
                "view-card",
                {
                  attrs: {
                    icon: "el-icon-user-solid",
                    header: "用户信息3",
                    type: "warning"
                  }
                },
                [
                  _c("label-value", { attrs: { label: "ID" } }, [
                    _vm._v("admin")
                  ]),
                  _c("label-value", { attrs: { label: "用户名" } }, [
                    _vm._v("管理员")
                  ]),
                  _c("label-value", { attrs: { label: "Email" } }, [
                    _vm._v("admin@fit2cloud.com")
                  ]),
                  _c(
                    "label-value",
                    { attrs: { label: "启用/禁用" } },
                    [
                      _c("el-tag", { attrs: { type: "primary" } }, [
                        _vm._v("启用")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/business/components/ViewCardDemo.vue":
/*!**************************************************!*\
  !*** ./src/business/components/ViewCardDemo.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewCardDemo_vue_vue_type_template_id_436974db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewCardDemo.vue?vue&type=template&id=436974db& */ "./src/business/components/ViewCardDemo.vue?vue&type=template&id=436974db&");
/* harmony import */ var _ViewCardDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewCardDemo.vue?vue&type=script&lang=js& */ "./src/business/components/ViewCardDemo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewCardDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewCardDemo_vue_vue_type_template_id_436974db___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewCardDemo_vue_vue_type_template_id_436974db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/business/components/ViewCardDemo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/business/components/ViewCardDemo.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/business/components/ViewCardDemo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCardDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewCardDemo.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/components/ViewCardDemo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCardDemo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/business/components/ViewCardDemo.vue?vue&type=template&id=436974db&":
/*!*********************************************************************************!*\
  !*** ./src/business/components/ViewCardDemo.vue?vue&type=template&id=436974db& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_cd91a0d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCardDemo_vue_vue_type_template_id_436974db___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"cd91a0d6-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewCardDemo.vue?vue&type=template&id=436974db& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"cd91a0d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/business/components/ViewCardDemo.vue?vue&type=template&id=436974db&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_cd91a0d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCardDemo_vue_vue_type_template_id_436974db___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_cd91a0d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewCardDemo_vue_vue_type_template_id_436974db___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=13.js.map
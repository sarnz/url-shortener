"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/hooks/shorturl.js":
/*!*******************************!*\
  !*** ./src/hooks/shorturl.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getShortURLs\": function() { return /* binding */ getShortURLs; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\nconst getShortURLs = function() {\n    let { middleware , redirectIfAuthenticated  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/shorturls\").then((res)=>res.data).catch();\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    return {\n        getShortURLs\n    };\n};\n_s(getShortURLs, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3Mvc2hvcnR1cmwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXdCO0FBQ087QUFDRTtBQUNNO0FBRWhDLE1BQU1JLGVBQWUsV0FBa0Q7UUFBakQsRUFBRUMsV0FBVSxFQUFFQyx3QkFBdUIsRUFBRSxvRUFBRyxDQUFDOztJQUNwRSxNQUFNQyxTQUFTSixzREFBU0E7SUFFeEJGLHNEQUNZLENBQUMsY0FDSlEsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJLEVBQ3BCQyxLQUFLO0lBR2QsTUFBTUMsT0FBTyxJQUFNWixzREFBUyxDQUFDO0lBRTdCLE9BQU87UUFDSEc7SUFDSjtBQUNKLEVBQUM7R0FkWUE7O1FBQ01ELGtEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3Mvc2hvcnR1cmwuanM/M2MwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ0AvbGliL2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2hvcnRVUkxzID0gKHsgbWlkZGxld2FyZSwgcmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQgfSA9IHt9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoJy9zaG9ydHVybHMnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCgpXHJcblxyXG4gIFxyXG4gICAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnL3NhbmN0dW0vY3NyZi1jb29raWUnKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0U2hvcnRVUkxzLFxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldFNob3J0VVJMcyIsIm1pZGRsZXdhcmUiLCJyZWRpcmVjdElmQXV0aGVudGljYXRlZCIsInJvdXRlciIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJjc3JmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/shorturl.js\n"));

/***/ })

});
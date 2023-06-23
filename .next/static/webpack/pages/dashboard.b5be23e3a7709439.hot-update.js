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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getShortURLs\": function() { return /* binding */ getShortURLs; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\nconst getShortURLs = function() {\n    let { middleware , redirectIfAuthenticated  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { data: myurl , error , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/user\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/shorturls\").then((res)=>res.data).catch());\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/sanctum/csrf-cookie\");\n    return {\n        myurl,\n        getShortURLs\n    };\n};\n_s(getShortURLs, \"dn5WhPEme/0AJe2ZG5xmusLm79A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3Mvc2hvcnR1cmwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXdCO0FBQ087QUFDRTtBQUNNO0FBRWhDLE1BQU1JLGVBQWUsV0FBa0Q7UUFBakQsRUFBRUMsV0FBVSxFQUFFQyx3QkFBdUIsRUFBRSxvRUFBRyxDQUFDOztJQUNwRSxNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxNQUFNQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFLEdBQUdYLCtDQUFNQSxDQUFDLGFBQWEsSUFFM0RDLHNEQUNZLENBQUMsY0FDSlksSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJTixJQUFJLEVBQ3BCTyxLQUFLO0lBSWQsTUFBTUMsT0FBTyxJQUFNZixzREFBUyxDQUFDO0lBRTdCLE9BQU87UUFDSFE7UUFDQUw7SUFDSjtBQUNKLEVBQUM7R0FqQllBOztRQUNNRCxrREFBU0E7UUFDZUgsMkNBQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9zaG9ydHVybC5qcz8zYzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnQC9saWIvYXhpb3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaG9ydFVSTHMgPSAoeyBtaWRkbGV3YXJlLCByZWRpcmVjdElmQXV0aGVudGljYXRlZCB9ID0ge30pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGRhdGE6IG15dXJsLCBlcnJvciwgbXV0YXRlIH0gPSB1c2VTV1IoJy9hcGkvdXNlcicsICgpID0+XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldCgnL3Nob3J0dXJscycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKCksXHJcbiAgICApXHJcblxyXG4gIFxyXG4gICAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnL3NhbmN0dW0vY3NyZi1jb29raWUnKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbXl1cmwsXHJcbiAgICAgICAgZ2V0U2hvcnRVUkxzLFxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImdldFNob3J0VVJMcyIsIm1pZGRsZXdhcmUiLCJyZWRpcmVjdElmQXV0aGVudGljYXRlZCIsInJvdXRlciIsImRhdGEiLCJteXVybCIsImVycm9yIiwibXV0YXRlIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGNoIiwiY3NyZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/shorturl.js\n"));

/***/ })

});
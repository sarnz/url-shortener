"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[shortUrl]",{

/***/ "./src/hooks/Redirectpage.js":
/*!***********************************!*\
  !*** ./src/hooks/Redirectpage.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.js\");\nvar _s = $RefreshSig$();\n\n\n\nconst Redirectpage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { shortUrl  } = router.query;\n        console.log(shortUrl);\n        const fetchRedirectUrl = async ()=>{\n            try {\n                const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/redirectpage/\".concat(shortUrl));\n                const actualUrl = response.data;\n                window.location.href = actualUrl;\n            } catch (error) {\n                console.error(error);\n            }\n        };\n    }, [\n        router.query\n    ]);\n    return null;\n};\n_s(Redirectpage, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter\n    ];\n});\n_c = Redirectpage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Redirectpage);\nvar _c;\n$RefreshReg$(_c, \"Redirectpage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvUmVkaXJlY3RwYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQXdDO0FBQ047QUFDRjtBQUVoQyxNQUFNRyxlQUFlLElBQU07O0lBQ3pCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU0sRUFBRUksU0FBUSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7UUFDakNDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFFWixNQUFNSSxtQkFBbUIsVUFBWTtZQUNuQyxJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVIsc0RBQVMsQ0FBQyxpQkFBMEIsT0FBVEc7Z0JBQ2xELE1BQU1PLFlBQVlGLFNBQVNHLElBQUk7Z0JBRS9CQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBR0o7WUFDekIsRUFBRSxPQUFPSyxPQUFPO2dCQUNkVixRQUFRVSxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7SUFHRixHQUFHO1FBQUNiLE9BQU9FLEtBQUs7S0FBQztJQUVqQixPQUFPLElBQUk7QUFDYjtHQXRCTUg7O1FBQ1dILGtEQUFTQTs7O0tBRHBCRztBQXdCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvUmVkaXJlY3RwYWdlLmpzP2QyYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdAL2xpYi9heGlvcyc7XHJcblxyXG5jb25zdCBSZWRpcmVjdHBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IHNob3J0VXJsIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhzaG9ydFVybCk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hSZWRpcmVjdFVybCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL3JlZGlyZWN0cGFnZS8ke3Nob3J0VXJsfWApO1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFVybCA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYWN0dWFsVXJsO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgXHJcbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0cGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImF4aW9zIiwiUmVkaXJlY3RwYWdlIiwicm91dGVyIiwic2hvcnRVcmwiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFJlZGlyZWN0VXJsIiwicmVzcG9uc2UiLCJnZXQiLCJhY3R1YWxVcmwiLCJkYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/Redirectpage.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[shortUrl]";
exports.ids = ["pages/[shortUrl]"];
exports.modules = {

/***/ "./src/hooks/Redirectpage.js":
/*!***********************************!*\
  !*** ./src/hooks/Redirectpage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.js\");\n\n\n\nconst Redirectpage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { shortUrl  } = router.query;\n        console.log(shortUrl);\n        const fetchRedirectUrl = async ()=>{\n            try {\n                const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`/redirectpage/${shortUrl}`);\n                const actualUrl = response.data;\n                console.log(actualUrl);\n                window.location.href = actualUrl.short_origin;\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        if (shortUrl) {\n            fetchRedirectUrl();\n        }\n    }, [\n        router.query\n    ]);\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Redirectpage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvUmVkaXJlY3RwYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUNOO0FBQ0Y7QUFFaEMsTUFBTUcsZUFBZSxJQUFNO0lBQ3pCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU0sRUFBRUksU0FBUSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7UUFDakNDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFFWixNQUFNSSxtQkFBbUIsVUFBWTtZQUNuQyxJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVIsc0RBQVMsQ0FBQyxDQUFDLGNBQWMsRUFBRUcsU0FBUyxDQUFDO2dCQUM1RCxNQUFNTyxZQUFZRixTQUFTRyxJQUFJO2dCQUMvQk4sUUFBUUMsR0FBRyxDQUFDSTtnQkFFWkUsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUdKLFVBQVVLLFlBQVk7WUFDL0MsRUFBRSxPQUFPQyxPQUFPO2dCQUNkWCxRQUFRVyxLQUFLLENBQUNBO1lBQ2hCO1FBQ0Y7UUFFQSxJQUFJYixVQUFVO1lBQ1pJO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ0wsT0FBT0UsS0FBSztLQUFDO0lBRWpCLE9BQU8sSUFBSTtBQUNiO0FBRUEsaUVBQWVILFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVlemUtbmV4dC8uL3NyYy9ob29rcy9SZWRpcmVjdHBhZ2UuanM/ZDJhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ0AvbGliL2F4aW9zJztcclxuXHJcbmNvbnN0IFJlZGlyZWN0cGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgc2hvcnRVcmwgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnNvbGUubG9nKHNob3J0VXJsKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaFJlZGlyZWN0VXJsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvcmVkaXJlY3RwYWdlLyR7c2hvcnRVcmx9YCk7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsVXJsID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3R1YWxVcmwpXHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYWN0dWFsVXJsLnNob3J0X29yaWdpbjtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoc2hvcnRVcmwpIHtcclxuICAgICAgZmV0Y2hSZWRpcmVjdFVybCgpO1xyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWRpcmVjdHBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlJlZGlyZWN0cGFnZSIsInJvdXRlciIsInNob3J0VXJsIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hSZWRpcmVjdFVybCIsInJlc3BvbnNlIiwiZ2V0IiwiYWN0dWFsVXJsIiwiZGF0YSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNob3J0X29yaWdpbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/Redirectpage.js\n");

/***/ }),

/***/ "./src/lib/axios.js":
/*!**************************!*\
  !*** ./src/lib/axios.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:8000\",\n    headers: {\n        \"X-Requested-With\": \"XMLHttpRequest\"\n    },\n    withCredentials: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2F4aW9zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QjtBQUV6QixNQUFNQyxRQUFRRCxtREFBWSxDQUFDO0lBQ3ZCRyxTQUFTQyx1QkFBbUM7SUFDNUNHLFNBQVM7UUFDTCxvQkFBb0I7SUFDeEI7SUFDQUMsaUJBQWlCLElBQUk7QUFDekI7QUFFQSxpRUFBZVAsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWV6ZS1uZXh0Ly4vc3JjL2xpYi9heGlvcy5qcz9mNzk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IGF4aW9zID0gQXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcclxuICAgIH0sXHJcbiAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvc1xyXG4iXSwibmFtZXMiOlsiQXhpb3MiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/axios.js\n");

/***/ }),

/***/ "./src/pages/[shortUrl].js":
/*!*********************************!*\
  !*** ./src/pages/[shortUrl].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hooks_Redirectpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/Redirectpage */ \"./src/hooks/Redirectpage.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_hooks_Redirectpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3Nob3J0VXJsXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QztBQUU3QyxpRUFBZUEsMkRBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVlemUtbmV4dC8uL3NyYy9wYWdlcy9bc2hvcnRVcmxdLmpzP2M0M2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZGlyZWN0IGZyb20gJy4uL2hvb2tzL1JlZGlyZWN0cGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWRpcmVjdDtcclxuIl0sIm5hbWVzIjpbInJlZGlyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[shortUrl].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/[shortUrl].js"));
module.exports = __webpack_exports__;

})();
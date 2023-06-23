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

/***/ "./src/pages/dashboard.js":
/*!********************************!*\
  !*** ./src/pages/dashboard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/userurl */ \"./src/hooks/userurl.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const { myurl , generate  } = (0,_hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL)({\n        middleware: \"auth\"\n    });\n    console.log(\"tstttttt\", myurl);\n    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const submitForm = (event)=>{\n        event.preventDefault();\n        generate({\n            short_origin: link,\n            setErrors,\n            setSuccess\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"ข้อมูลของฉัน\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Laravel - ข้อมูลของฉัน\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto sm:px-6 lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-green-500 mb-4\",\n                                    children: success\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block\",\n                                    children: \"สร้าง Short URL:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 3\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col md:flex-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            //   value={originalUrl}\n                                            //   onChange={(e) => setOriginalUrl(e.target.value)}\n                                            className: \"border-gray-300 rounded-md px-4 py-2 mb-2 md:mr-2 md:mb-0\",\n                                            placeholder: \"Enter the original URL\",\n                                            onChange: (event)=>setLink(event.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2\",\n                                            onClick: submitForm,\n                                            children: \"ยืนยัน\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 5\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 3\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white overflow-hidden shadow-sm sm:rounded-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-6 bg-white border-b border-gray-200\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                    className: \"mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            className: \"font-semibold\",\n                                            children: \"ลิ้งของฉัน:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 3\n                                        }, undefined),\n                                        myurl && myurl.map((shortURL)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex flex-col md:flex-row\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                        className: \"text-gray-600 mb-2 md:mr-2\",\n                                                        children: [\n                                                            URL(\"/\"),\n                                                            shortURL.short_url\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 7\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                        className: \"mb-2 md:mb-0\",\n                                                        children: shortURL.short_origin\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 7\n                                                    }, undefined)\n                                                ]\n                                            }, shortURL.id, true, {\n                                                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                                lineNumber: 67,\n                                                columnNumber: 5\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"vCayBq64r1mGz1HoY7Y9whsWRbw=\", false, function() {\n    return [\n        _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUFzRDtBQUMxQjtBQUNnQjtBQUNaO0FBQ2hDLE1BQU1JLFlBQVksSUFBTTs7SUFDcEIsTUFBTSxFQUFFQyxNQUFLLEVBQUNDLFNBQVEsRUFBRSxHQUFHSiwwREFBVUEsQ0FBQztRQUFFSyxZQUFZO0lBQU87SUFDM0RDLFFBQVFDLEdBQUcsQ0FBQyxZQUFXSjtJQUN2QixNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFFekMsTUFBTWEsYUFBYUMsQ0FBQUEsUUFBUztRQUN4QkEsTUFBTUMsY0FBYztRQUVwQlosU0FBUztZQUNMYSxjQUFhVDtZQUNiRztZQUNBRTtRQUNKO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ2YscUVBQVNBO1FBQ05vQixzQkFDSSw4REFBQ0M7WUFBR0MsV0FBVTtzQkFBb0Q7OzswQkFJdEUsOERBQUNyQixrREFBSUE7MEJBQ0QsNEVBQUNzQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBT1gsOERBQUNDO2dCQUFJRixXQUFVOzBCQUVYLDRFQUFDRTtvQkFBSUYsV0FBVTs7c0NBQ2YsOERBQUNFOzRCQUFJRixXQUFVOztnQ0FDZFIseUJBQ0QsOERBQUNVO29DQUFJRixXQUFVOzhDQUF1QlI7Ozs7Ozs4Q0FFcEQsOERBQUNXO29DQUFNSCxXQUFVOzhDQUFROzs7Ozs7OENBQ3pCLDhEQUFDRTtvQ0FBSUYsV0FBVTs7c0RBQ2IsOERBQUNJOzRDQUNDQyxNQUFLOzRDQUNQLHdCQUF3Qjs0Q0FDeEIscURBQXFEOzRDQUNuREwsV0FBVTs0Q0FDVk0sYUFBWTs0Q0FDWkMsVUFBVVosQ0FBQUEsUUFBU04sUUFBUU0sTUFBTWEsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7c0RBRS9DLDhEQUFDQzs0Q0FDQ1YsV0FBVTs0Q0FDVlcsU0FBU2pCO3NEQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS2UsOERBQUNROzRCQUFJRixXQUFVO3NDQUNYLDRFQUFDRTtnQ0FBSUYsV0FBVTswQ0FFWCw0RUFBQ1k7b0NBQUdaLFdBQVU7O3NEQUN4Qyw4REFBQ2E7NENBQUdiLFdBQVU7c0RBQWdCOzs7Ozs7d0NBQzdCakIsU0FBT0EsTUFBTStCLEdBQUcsQ0FBQyxDQUFDQyx5QkFDakIsOERBQUNiO2dEQUFzQkYsV0FBVTs7a0VBQy9CLDhEQUFDYTt3REFBR2IsV0FBVTs7NERBQThCZ0IsSUFBSTs0REFBTUQsU0FBU0UsU0FBUzs7Ozs7OztrRUFDeEUsOERBQUNDO3dEQUFHbEIsV0FBVTtrRUFBZ0JlLFNBQVNsQixZQUFZOzs7Ozs7OytDQUYzQ2tCLFNBQVNJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3pCO0dBNUVNckM7O1FBQ3lCRixzREFBVUE7OztLQURuQ0U7QUE4RU4sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC5qcz8zNjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dHMvQXBwTGF5b3V0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVVzZXJVUkwgfSBmcm9tICdAL2hvb2tzL3VzZXJ1cmwnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbXl1cmwsZ2VuZXJhdGUgfSA9IHVzZVVzZXJVUkwoeyBtaWRkbGV3YXJlOiAnYXV0aCcgfSlcclxuICAgIGNvbnNvbGUubG9nKCd0c3R0dHR0dCcsbXl1cmwpXHJcbiAgICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBnZW5lcmF0ZSh7XHJcbiAgICAgICAgICAgIHNob3J0X29yaWdpbjpsaW5rLFxyXG4gICAgICAgICAgICBzZXRFcnJvcnMsXHJcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0XHJcbiAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRleHQtZ3JheS04MDAgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4guC5ieC4reC4oeC4ueC4peC4guC4reC4h+C4ieC4seC4mVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TGFyYXZlbCAtIOC4guC5ieC4reC4oeC4ueC4peC4guC4reC4h+C4ieC4seC4mTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcblxyXG4gICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTJcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAge3N1Y2Nlc3MgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBtYi00XCI+e3N1Y2Nlc3N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2tcIj7guKrguKPguYnguLLguIcgU2hvcnQgVVJMOjwvbGFiZWw+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XHJcbiAgICA8aW5wdXRcclxuICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICB2YWx1ZT17b3JpZ2luYWxVcmx9XHJcbiAgICAvLyAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0T3JpZ2luYWxVcmwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICBjbGFzc05hbWU9XCJib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweC00ICBweS0yIG1iLTIgbWQ6bXItMiBtZDptYi0wXCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgb3JpZ2luYWwgVVJMXCJcclxuICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldExpbmsoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgIC8+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBweC00IHB5LTJcIlxyXG4gICAgICBvbkNsaWNrPXtzdWJtaXRGb3JtfVxyXG4gICAgPlxyXG4gICAgICDguKLguLfguJnguKLguLHguJlcclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctc20gc206cm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICA8ZHQgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPuC4peC4tOC5ieC4h+C4guC4reC4h+C4ieC4seC4mTo8L2R0PlxyXG4gIHtteXVybCYmbXl1cmwubWFwKChzaG9ydFVSTCkgPT4gKFxyXG4gICAgPGRpdiBrZXk9e3Nob3J0VVJMLmlkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XHJcbiAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTIgbWQ6bXItMlwiPntVUkwoJy8nKX17c2hvcnRVUkwuc2hvcnRfdXJsfTwvZHQ+XHJcbiAgICAgIDxkZCBjbGFzc05hbWU9XCJtYi0yIG1kOm1iLTBcIj57c2hvcnRVUkwuc2hvcnRfb3JpZ2lufTwvZGQ+XHJcbiAgICA8L2Rpdj5cclxuICApKX1cclxuPC9kbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXHJcbiJdLCJuYW1lcyI6WyJBcHBMYXlvdXQiLCJIZWFkIiwidXNlVXNlclVSTCIsInVzZVN0YXRlIiwiRGFzaGJvYXJkIiwibXl1cmwiLCJnZW5lcmF0ZSIsIm1pZGRsZXdhcmUiLCJjb25zb2xlIiwibG9nIiwibGluayIsInNldExpbmsiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInN1Ym1pdEZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2hvcnRfb3JpZ2luIiwiaGVhZGVyIiwiaDIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRpdiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsImRsIiwiZHQiLCJtYXAiLCJzaG9ydFVSTCIsIlVSTCIsInNob3J0X3VybCIsImRkIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard.js\n"));

/***/ })

});
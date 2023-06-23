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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/userurl */ \"./src/hooks/userurl.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const { myurl , generate  } = (0,_hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL)({\n        middleware: \"auth\"\n    });\n    console.log(\"tstttttt\", myurl);\n    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [isButtonClicked, setIsButtonClicked] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const submitForm = (event)=>{\n        event.preventDefault();\n        setLink(\"\");\n        generate({\n            short_origin: link,\n            setErrors,\n            setSuccess\n        });\n    };\n    const handleCopy = (url)=>{\n        // Copy the URL to clipboard\n        navigator.clipboard.writeText(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"ข้อมูลของฉัน\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Short URL - ข้อมูลของฉัน\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto sm:px-6 lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-green-500 mb-4\",\n                                    children: success\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block\",\n                                    children: \"สร้าง Short URL:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 3\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col md:flex-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            //   value={originalUrl}\n                                            //   onChange={(e) => setOriginalUrl(e.target.value)}\n                                            className: \"border-gray-300 rounded-md px-4 py-2 mb-2 md:mr-2 md:mb-0\",\n                                            placeholder: \"Enter the original URL\",\n                                            onChange: (event)=>setLink(event.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2\",\n                                            onClick: submitForm,\n                                            children: \"ยืนยัน\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 5\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 3\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, undefined),\n                        myurl && myurl.map((shortURL)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white overflow-hidden shadow-sm sm:rounded-lg mb-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-6 bg-white border-b border-gray-200\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            className: \"text-gray-600 mb-2 md:mr-2\",\n                                            children: shortURL.short_url\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            className: \"mb-2 md:mb-0\",\n                                            children: shortURL.short_origin\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex mt-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"mr-2 px-4 py-2 rounded \".concat(copiedShortOrigin === shortURL.short_origin ? \"bg-green-500 text-white\" : \"bg-blue-500 text-white\"),\n                                                onClick: ()=>{\n                                                    handleCopy(shortURL.short_origin);\n                                                    setCopiedShortOrigin(shortURL.short_origin);\n                                                },\n                                                children: copiedShortOrigin === shortURL.short_origin ? \"Copied\" : \"Copy\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, shortURL.id, false, {\n                                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"1lghLjONZwFynQBy3Rgd2Ny+kSk=\", false, function() {\n    return [\n        _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBc0Q7QUFDMUI7QUFDZ0I7QUFDWjtBQUNRO0FBRXhDLE1BQU1LLFlBQVksSUFBTTs7SUFDcEIsTUFBTSxFQUFFQyxNQUFLLEVBQUNDLFNBQVEsRUFBRSxHQUFHTCwwREFBVUEsQ0FBQztRQUFFTSxZQUFZO0lBQU87SUFDM0RDLFFBQVFDLEdBQUcsQ0FBQyxZQUFXSjtJQUN2QixNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFekMsTUFBTSxDQUFDYyxpQkFBaUJDLG1CQUFtQixHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVELE1BQU1nQixhQUFhQyxDQUFBQSxRQUFTO1FBQ3hCQSxNQUFNQyxjQUFjO1FBQ3BCVCxRQUFRO1FBQ1JMLFNBQVM7WUFDTGUsY0FBYVg7WUFDYkc7WUFDQUU7UUFDSjtJQUNKO0lBQ0EsTUFBTU8sYUFBYSxDQUFDQyxNQUFRO1FBQ3hCLDRCQUE0QjtRQUM1QkMsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNIO0lBQ2hDO0lBRUYscUJBQ0ksOERBQUN4QixxRUFBU0E7UUFDTjRCLHNCQUNJLDhEQUFDQztZQUFHQyxXQUFVO3NCQUFvRDs7OzBCQUl0RSw4REFBQzdCLGtEQUFJQTswQkFDRCw0RUFBQzhCOzhCQUFNOzs7Ozs7Ozs7OzswQkFPWCw4REFBQ0M7Z0JBQUlGLFdBQVU7MEJBRVgsNEVBQUNFO29CQUFJRixXQUFVOztzQ0FDZiw4REFBQ0U7NEJBQUlGLFdBQVU7O2dDQUNkZix5QkFDRCw4REFBQ2lCO29DQUFJRixXQUFVOzhDQUF1QmY7Ozs7Ozs4Q0FFcEQsOERBQUNrQjtvQ0FBTUgsV0FBVTs4Q0FBUTs7Ozs7OzhDQUN6Qiw4REFBQ0U7b0NBQUlGLFdBQVU7O3NEQUNiLDhEQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDUCx3QkFBd0I7NENBQ3hCLHFEQUFxRDs0Q0FDbkRMLFdBQVU7NENBQ1ZNLGFBQVk7NENBQ1pDLFVBQVVqQixDQUFBQSxRQUFTUixRQUFRUSxNQUFNa0IsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7c0RBRS9DLDhEQUFDQzs0Q0FDQ1YsV0FBVTs0Q0FDVlcsU0FBU3RCO3NEQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBTUpiLFNBQ09BLE1BQU1vQyxHQUFHLENBQUMsQ0FBQ0MseUJBQ1QsOERBQUNYO2dDQUFzQkYsV0FBVTswQ0FDL0IsNEVBQUNFO29DQUFJRixXQUFVOztzREFDYiw4REFBQ2M7NENBQUdkLFdBQVU7c0RBQThCYSxTQUFTRSxTQUFTOzs7Ozs7c0RBQzlELDhEQUFDQzs0Q0FBR2hCLFdBQVU7c0RBQWdCYSxTQUFTckIsWUFBWTs7Ozs7O3NEQUNuRCw4REFBQ1U7NENBQUlGLFdBQVU7c0RBQ2YsNEVBQUNVO2dEQUNiVixXQUFXLDBCQUVWLE9BRENpQixzQkFBc0JKLFNBQVNyQixZQUFZLEdBQUcsNEJBQTRCLHdCQUF3QjtnREFFcEdtQixTQUFTLElBQU07b0RBQ2JsQixXQUFXb0IsU0FBU3JCLFlBQVk7b0RBQ2hDMEIscUJBQXFCTCxTQUFTckIsWUFBWTtnREFDNUM7MERBRUN5QixzQkFBc0JKLFNBQVNyQixZQUFZLEdBQUcsV0FBVyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzsrQkFkOUNxQixTQUFTTSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEIvQjtHQTlGTTVDOztRQUN5Qkgsc0RBQVVBOzs7S0FEbkNHO0FBZ0dOLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQuanM/MzY2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXRzL0FwcExheW91dCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VVc2VyVVJMIH0gZnJvbSAnQC9ob29rcy91c2VydXJsJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCc7XHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG15dXJsLGdlbmVyYXRlIH0gPSB1c2VVc2VyVVJMKHsgbWlkZGxld2FyZTogJ2F1dGgnIH0pXHJcbiAgICBjb25zb2xlLmxvZygndHN0dHR0dHQnLG15dXJsKVxyXG4gICAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIFxyXG4gICAgY29uc3QgW2lzQnV0dG9uQ2xpY2tlZCwgc2V0SXNCdXR0b25DbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRMaW5rKCcnKVxyXG4gICAgICAgIGdlbmVyYXRlKHtcclxuICAgICAgICAgICAgc2hvcnRfb3JpZ2luOmxpbmssXHJcbiAgICAgICAgICAgIHNldEVycm9ycyxcclxuICAgICAgICAgICAgc2V0U3VjY2Vzc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDb3B5ID0gKHVybCkgPT4ge1xyXG4gICAgICAgIC8vIENvcHkgdGhlIFVSTCB0byBjbGlwYm9hcmRcclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh1cmwpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXRcclxuICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ncmF5LTgwMCBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4LiC4LmJ4Lit4Lih4Li54Lil4LiC4Lit4LiH4LiJ4Lix4LiZXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TaG9ydCBVUkwgLSDguILguYnguK3guKHguLnguKXguILguK3guIfguInguLHguJk8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG5cclxuICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgbWItNFwiPntzdWNjZXNzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+4Liq4Lij4LmJ4Liy4LiHIFNob3J0IFVSTDo8L2xhYmVsPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvd1wiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgdmFsdWU9e29yaWdpbmFsVXJsfVxyXG4gICAgLy8gICBvbkNoYW5nZT17KGUpID0+IHNldE9yaWdpbmFsVXJsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtNCAgcHktMiBtYi0yIG1kOm1yLTIgbWQ6bWItMFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIG9yaWdpbmFsIFVSTFwiXHJcbiAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRMaW5rKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAvPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHgtNCBweS0yXCJcclxuICAgICAgb25DbGljaz17c3VibWl0Rm9ybX1cclxuICAgID5cclxuICAgICAg4Lii4Li34LiZ4Lii4Lix4LiZXHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG57bXl1cmwgJiZcclxuICAgICAgICBteXVybC5tYXAoKHNob3J0VVJMKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17c2hvcnRVUkwuaWR9IGNsYXNzTmFtZT1cImJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctc20gc206cm91bmRlZC1sZyBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTIgbWQ6bXItMlwiPntzaG9ydFVSTC5zaG9ydF91cmx9PC9kdD5cclxuICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibWItMiBtZDptYi0wXCI+e3Nob3J0VVJMLnNob3J0X29yaWdpbn08L2RkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gIGNsYXNzTmFtZT17YG1yLTIgcHgtNCBweS0yIHJvdW5kZWQgJHtcclxuICAgIGNvcGllZFNob3J0T3JpZ2luID09PSBzaG9ydFVSTC5zaG9ydF9vcmlnaW4gPyAnYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUnIDogJ2JnLWJsdWUtNTAwIHRleHQtd2hpdGUnXHJcbiAgfWB9XHJcbiAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgaGFuZGxlQ29weShzaG9ydFVSTC5zaG9ydF9vcmlnaW4pO1xyXG4gICAgc2V0Q29waWVkU2hvcnRPcmlnaW4oc2hvcnRVUkwuc2hvcnRfb3JpZ2luKTtcclxuICB9fVxyXG4+XHJcbiAge2NvcGllZFNob3J0T3JpZ2luID09PSBzaG9ydFVSTC5zaG9ydF9vcmlnaW4gPyAnQ29waWVkJyA6ICdDb3B5J31cclxuPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuPC9kaXY+ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcclxuIl0sIm5hbWVzIjpbIkFwcExheW91dCIsIkhlYWQiLCJ1c2VVc2VyVVJMIiwidXNlU3RhdGUiLCJNb2RhbCIsIkRhc2hib2FyZCIsIm15dXJsIiwiZ2VuZXJhdGUiLCJtaWRkbGV3YXJlIiwiY29uc29sZSIsImxvZyIsImxpbmsiLCJzZXRMaW5rIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJpc0J1dHRvbkNsaWNrZWQiLCJzZXRJc0J1dHRvbkNsaWNrZWQiLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNob3J0X29yaWdpbiIsImhhbmRsZUNvcHkiLCJ1cmwiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJoZWFkZXIiLCJoMiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwic2hvcnRVUkwiLCJkdCIsInNob3J0X3VybCIsImRkIiwiY29waWVkU2hvcnRPcmlnaW4iLCJzZXRDb3BpZWRTaG9ydE9yaWdpbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard.js\n"));

/***/ })

});
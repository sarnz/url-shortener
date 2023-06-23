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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/userurl */ \"./src/hooks/userurl.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const { myurl , generate  } = (0,_hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL)({\n        middleware: \"auth\"\n    });\n    console.log(\"tstttttt\", myurl);\n    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const submitForm = (event)=>{\n        event.preventDefault();\n        setLink(\"\");\n        generate({\n            short_origin: link,\n            setErrors,\n            setSuccess\n        });\n    };\n    const handleCopy = (url)=>{\n        // Copy the URL to clipboard\n        navigator.clipboard.writeText(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"ข้อมูลของฉัน\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Short URL - ข้อมูลของฉัน\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto sm:px-6 lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-green-500 mb-4\",\n                                    children: success\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block\",\n                                    children: \"สร้าง Short URL:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 3\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col md:flex-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            //   value={originalUrl}\n                                            //   onChange={(e) => setOriginalUrl(e.target.value)}\n                                            className: \"border-gray-300 rounded-md px-4 py-2 mb-2 md:mr-2 md:mb-0\",\n                                            placeholder: \"Enter the original URL\",\n                                            onChange: (event)=>setLink(event.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2\",\n                                            onClick: submitForm,\n                                            children: \"ยืนยัน\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 5\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 3\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, undefined),\n                        myurl && myurl.map((shortURL)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white overflow-hidden shadow-sm sm:rounded-lg mb-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-6 bg-white border-b border-gray-200\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            className: \"text-gray-600 mb-2 md:mr-2\",\n                                            children: shortURL.short_url\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            className: \"mb-2 md:mb-0\",\n                                            children: shortURL.short_origin\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex mt-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"mr-2 px-4 py-2 rounded \".concat(isButtonClicked ? \"bg-green-500 text-white\" : \"bg-blue-500 text-white\"),\n                                                onClick: ()=>{\n                                                    handleCopy(shortURL.short_origin);\n                                                    setIsButtonClicked(true);\n                                                },\n                                                children: isButtonClicked ? \"Copied\" : \"Copy\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, shortURL.id, false, {\n                                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"vCayBq64r1mGz1HoY7Y9whsWRbw=\", false, function() {\n    return [\n        _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBc0Q7QUFDMUI7QUFDZ0I7QUFDWjtBQUNRO0FBRXhDLE1BQU1LLFlBQVksSUFBTTs7SUFDcEIsTUFBTSxFQUFFQyxNQUFLLEVBQUNDLFNBQVEsRUFBRSxHQUFHTCwwREFBVUEsQ0FBQztRQUFFTSxZQUFZO0lBQU87SUFDM0RDLFFBQVFDLEdBQUcsQ0FBQyxZQUFXSjtJQUN2QixNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFHekMsTUFBTWMsYUFBYUMsQ0FBQUEsUUFBUztRQUN4QkEsTUFBTUMsY0FBYztRQUNwQlAsUUFBUTtRQUNSTCxTQUFTO1lBQ0xhLGNBQWFUO1lBQ2JHO1lBQ0FFO1FBQ0o7SUFDSjtJQUNBLE1BQU1LLGFBQWEsQ0FBQ0MsTUFBUTtRQUN4Qiw0QkFBNEI7UUFDNUJDLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSDtJQUNoQztJQUVGLHFCQUNJLDhEQUFDdEIscUVBQVNBO1FBQ04wQixzQkFDSSw4REFBQ0M7WUFBR0MsV0FBVTtzQkFBb0Q7OzswQkFJdEUsOERBQUMzQixrREFBSUE7MEJBQ0QsNEVBQUM0Qjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBT1gsOERBQUNDO2dCQUFJRixXQUFVOzBCQUVYLDRFQUFDRTtvQkFBSUYsV0FBVTs7c0NBQ2YsOERBQUNFOzRCQUFJRixXQUFVOztnQ0FDZGIseUJBQ0QsOERBQUNlO29DQUFJRixXQUFVOzhDQUF1QmI7Ozs7Ozs4Q0FFcEQsOERBQUNnQjtvQ0FBTUgsV0FBVTs4Q0FBUTs7Ozs7OzhDQUN6Qiw4REFBQ0U7b0NBQUlGLFdBQVU7O3NEQUNiLDhEQUFDSTs0Q0FDQ0MsTUFBSzs0Q0FDUCx3QkFBd0I7NENBQ3hCLHFEQUFxRDs0Q0FDbkRMLFdBQVU7NENBQ1ZNLGFBQVk7NENBQ1pDLFVBQVVqQixDQUFBQSxRQUFTTixRQUFRTSxNQUFNa0IsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7c0RBRS9DLDhEQUFDQzs0Q0FDQ1YsV0FBVTs0Q0FDVlcsU0FBU3RCO3NEQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBTUpYLFNBQ09BLE1BQU1rQyxHQUFHLENBQUMsQ0FBQ0MseUJBQ1QsOERBQUNYO2dDQUFzQkYsV0FBVTswQ0FDL0IsNEVBQUNFO29DQUFJRixXQUFVOztzREFDYiw4REFBQ2M7NENBQUdkLFdBQVU7c0RBQThCYSxTQUFTRSxTQUFTOzs7Ozs7c0RBQzlELDhEQUFDQzs0Q0FBR2hCLFdBQVU7c0RBQWdCYSxTQUFTckIsWUFBWTs7Ozs7O3NEQUNuRCw4REFBQ1U7NENBQUlGLFdBQVU7c0RBQ2YsNEVBQUNVO2dEQUNiVixXQUFXLDBCQUVWLE9BRENpQixrQkFBa0IsNEJBQTRCLHdCQUF3QjtnREFFeEVOLFNBQVMsSUFBTTtvREFDYmxCLFdBQVdvQixTQUFTckIsWUFBWTtvREFDaEMwQixtQkFBbUIsSUFBSTtnREFDekI7MERBRUNELGtCQUFrQixXQUFXLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OytCQWRsQkosU0FBU00sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCL0I7R0E1Rk0xQzs7UUFDeUJILHNEQUFVQTs7O0tBRG5DRztBQThGTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzPzM2NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0cy9BcHBMYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlVXNlclVSTCB9IGZyb20gJ0AvaG9va3MvdXNlcnVybCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBteXVybCxnZW5lcmF0ZSB9ID0gdXNlVXNlclVSTCh7IG1pZGRsZXdhcmU6ICdhdXRoJyB9KVxyXG4gICAgY29uc29sZS5sb2coJ3RzdHR0dHR0JyxteXVybClcclxuICAgIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoW10pXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRMaW5rKCcnKVxyXG4gICAgICAgIGdlbmVyYXRlKHtcclxuICAgICAgICAgICAgc2hvcnRfb3JpZ2luOmxpbmssXHJcbiAgICAgICAgICAgIHNldEVycm9ycyxcclxuICAgICAgICAgICAgc2V0U3VjY2Vzc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDb3B5ID0gKHVybCkgPT4ge1xyXG4gICAgICAgIC8vIENvcHkgdGhlIFVSTCB0byBjbGlwYm9hcmRcclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh1cmwpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXRcclxuICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ncmF5LTgwMCBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4LiC4LmJ4Lit4Lih4Li54Lil4LiC4Lit4LiH4LiJ4Lix4LiZXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TaG9ydCBVUkwgLSDguILguYnguK3guKHguLnguKXguILguK3guIfguInguLHguJk8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG5cclxuICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gc206cHgtNiBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgIHtzdWNjZXNzICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgbWItNFwiPntzdWNjZXNzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+4Liq4Lij4LmJ4Liy4LiHIFNob3J0IFVSTDo8L2xhYmVsPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvd1wiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgdmFsdWU9e29yaWdpbmFsVXJsfVxyXG4gICAgLy8gICBvbkNoYW5nZT17KGUpID0+IHNldE9yaWdpbmFsVXJsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtNCAgcHktMiBtYi0yIG1kOm1yLTIgbWQ6bWItMFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIG9yaWdpbmFsIFVSTFwiXHJcbiAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRMaW5rKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAvPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcHgtNCBweS0yXCJcclxuICAgICAgb25DbGljaz17c3VibWl0Rm9ybX1cclxuICAgID5cclxuICAgICAg4Lii4Li34LiZ4Lii4Lix4LiZXHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG57bXl1cmwgJiZcclxuICAgICAgICBteXVybC5tYXAoKHNob3J0VVJMKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17c2hvcnRVUkwuaWR9IGNsYXNzTmFtZT1cImJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctc20gc206cm91bmRlZC1sZyBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxkdCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1iLTIgbWQ6bXItMlwiPntzaG9ydFVSTC5zaG9ydF91cmx9PC9kdD5cclxuICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwibWItMiBtZDptYi0wXCI+e3Nob3J0VVJMLnNob3J0X29yaWdpbn08L2RkPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gIGNsYXNzTmFtZT17YG1yLTIgcHgtNCBweS0yIHJvdW5kZWQgJHtcclxuICAgIGlzQnV0dG9uQ2xpY2tlZCA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZScgOiAnYmctYmx1ZS01MDAgdGV4dC13aGl0ZSdcclxuICB9YH1cclxuICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICBoYW5kbGVDb3B5KHNob3J0VVJMLnNob3J0X29yaWdpbik7XHJcbiAgICBzZXRJc0J1dHRvbkNsaWNrZWQodHJ1ZSk7XHJcbiAgfX1cclxuPlxyXG4gIHtpc0J1dHRvbkNsaWNrZWQgPyAnQ29waWVkJyA6ICdDb3B5J31cclxuPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG48L2Rpdj4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxyXG4iXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiSGVhZCIsInVzZVVzZXJVUkwiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwiRGFzaGJvYXJkIiwibXl1cmwiLCJnZW5lcmF0ZSIsIm1pZGRsZXdhcmUiLCJjb25zb2xlIiwibG9nIiwibGluayIsInNldExpbmsiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInN1Ym1pdEZvcm0iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2hvcnRfb3JpZ2luIiwiaGFuZGxlQ29weSIsInVybCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImhlYWRlciIsImgyIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkaXYiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJzaG9ydFVSTCIsImR0Iiwic2hvcnRfdXJsIiwiZGQiLCJpc0J1dHRvbkNsaWNrZWQiLCJzZXRJc0J1dHRvbkNsaWNrZWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard.js\n"));

/***/ })

});
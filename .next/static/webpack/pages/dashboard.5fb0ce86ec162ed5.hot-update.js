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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/userurl */ \"./src/hooks/userurl.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const { myurl , generate  } = (0,_hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL)({\n        middleware: \"auth\"\n    });\n    console.log(\"tstttttt\", myurl);\n    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const toggleModal = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const submitForm = (event)=>{\n        event.preventDefault();\n        setLink(\"\");\n        generate({\n            short_origin: link,\n            setErrors,\n            setSuccess\n        });\n    };\n    const handleCopy = (url)=>{\n        // Copy the URL to clipboard\n        navigator.clipboard.writeText(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"ข้อมูลของฉัน\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Short URL - ข้อมูลของฉัน\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto sm:px-6 lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-green-500 mb-4\",\n                                    children: success\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block\",\n                                    children: \"สร้าง Short URL:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 3\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col md:flex-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            //   value={originalUrl}\n                                            //   onChange={(e) => setOriginalUrl(e.target.value)}\n                                            className: \"border-gray-300 rounded-md px-4 py-2 mb-2 md:mr-2 md:mb-0\",\n                                            placeholder: \"Enter the original URL\",\n                                            onChange: (event)=>setLink(event.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2\",\n                                            onClick: submitForm,\n                                            children: \"ยืนยัน\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 5\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 3\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, undefined),\n                        myurl && myurl.map((shortURL)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white overflow-hidden shadow-sm sm:rounded-lg mb-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-6 bg-white border-b border-gray-200\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            className: \"text-gray-600 mb-2 md:mr-2\",\n                                            children: shortURL.short_url\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            className: \"mb-2 md:mb-0\",\n                                            children: shortURL.short_origin\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex mt-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"mr-2 bg-blue-500 text-white px-4 py-2 rounded\",\n                                                    onClick: ()=>handleCopy(shortURL.short_origin),\n                                                    children: \"Copy\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"bg-green-500 text-white px-4 py-2 rounded\",\n                                                    onClick: ()=>handleEdit(shortURL.id),\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, shortURL.id, false, {\n                                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 98,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 96,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"3DAwEjKMd+bu5fHLGF+ju0VldB0=\", false, function() {\n    return [\n        _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBc0Q7QUFDMUI7QUFDZ0I7QUFDWjtBQUNRO0FBRXhDLE1BQU1LLFlBQVksSUFBTTs7SUFDcEIsTUFBTSxFQUFFQyxNQUFLLEVBQUNDLFNBQVEsRUFBRSxHQUFHTCwwREFBVUEsQ0FBQztRQUFFTSxZQUFZO0lBQU87SUFDM0RDLFFBQVFDLEdBQUcsQ0FBQyxZQUFXSjtJQUN2QixNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDLEVBQUU7SUFFekMsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUMsTUFBTWdCLGNBQWMsSUFBTTtRQUN4QkQsVUFBVSxDQUFDRDtJQUNiO0lBR0EsTUFBTUcsYUFBYUMsQ0FBQUEsUUFBUztRQUN4QkEsTUFBTUMsY0FBYztRQUNwQlYsUUFBUTtRQUNSTCxTQUFTO1lBQ0xnQixjQUFhWjtZQUNiRztZQUNBRTtRQUNKO0lBQ0o7SUFDQSxNQUFNUSxhQUFhLENBQUNDLE1BQVE7UUFDeEIsNEJBQTRCO1FBQzVCQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0g7SUFDaEM7SUFFRixxQkFDSSw4REFBQ3pCLHFFQUFTQTtRQUNONkIsc0JBQ0ksOERBQUNDO1lBQUdDLFdBQVU7c0JBQW9EOzs7MEJBSXRFLDhEQUFDOUIsa0RBQUlBOzBCQUNELDRFQUFDK0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQU9YLDhEQUFDQztnQkFBSUYsV0FBVTswQkFFWCw0RUFBQ0U7b0JBQUlGLFdBQVU7O3NDQUNmLDhEQUFDRTs0QkFBSUYsV0FBVTs7Z0NBQ2RoQix5QkFDRCw4REFBQ2tCO29DQUFJRixXQUFVOzhDQUF1QmhCOzs7Ozs7OENBRXBELDhEQUFDbUI7b0NBQU1ILFdBQVU7OENBQVE7Ozs7Ozs4Q0FDekIsOERBQUNFO29DQUFJRixXQUFVOztzREFDYiw4REFBQ0k7NENBQ0NDLE1BQUs7NENBQ1Asd0JBQXdCOzRDQUN4QixxREFBcUQ7NENBQ25ETCxXQUFVOzRDQUNWTSxhQUFZOzRDQUNaQyxVQUFVakIsQ0FBQUEsUUFBU1QsUUFBUVMsTUFBTWtCLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O3NEQUUvQyw4REFBQ0M7NENBQ0NWLFdBQVU7NENBQ1ZXLFNBQVN0QjtzREFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQU1KZCxTQUNPQSxNQUFNcUMsR0FBRyxDQUFDLENBQUNDLHlCQUNULDhEQUFDWDtnQ0FBc0JGLFdBQVU7MENBQy9CLDRFQUFDRTtvQ0FBSUYsV0FBVTs7c0RBQ2IsOERBQUNjOzRDQUFHZCxXQUFVO3NEQUE4QmEsU0FBU0UsU0FBUzs7Ozs7O3NEQUM5RCw4REFBQ0M7NENBQUdoQixXQUFVO3NEQUFnQmEsU0FBU3JCLFlBQVk7Ozs7OztzREFDbkQsOERBQUNVOzRDQUFJRixXQUFVOzs4REFDYiw4REFBQ1U7b0RBQU9WLFdBQVU7b0RBQWdEVyxTQUFTLElBQU1sQixXQUFXb0IsU0FBU3JCLFlBQVk7OERBQUc7Ozs7Ozs4REFHcEgsOERBQUNrQjtvREFBT1YsV0FBVTtvREFBNENXLFNBQVMsSUFBTU0sV0FBV0osU0FBU0ssRUFBRTs4REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQVJsR0wsU0FBU0ssRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzswQkFrQi9CLDhEQUFDaEI7MEJBRUssNEVBQUM3Qix5REFBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWjtHQS9GTUM7O1FBQ3lCSCxzREFBVUE7OztLQURuQ0c7QUFpR04sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC5qcz8zNjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dHMvQXBwTGF5b3V0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVVzZXJVUkwgfSBmcm9tICdAL2hvb2tzL3VzZXJ1cmwnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbXl1cmwsZ2VuZXJhdGUgfSA9IHVzZVVzZXJVUkwoeyBtaWRkbGV3YXJlOiAnYXV0aCcgfSlcclxuICAgIGNvbnNvbGUubG9nKCd0c3R0dHR0dCcsbXl1cmwpXHJcbiAgICBjb25zdCBbbGluaywgc2V0TGlua10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgXHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICBzZXRJc09wZW4oIWlzT3Blbik7XHJcbiAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0TGluaygnJylcclxuICAgICAgICBnZW5lcmF0ZSh7XHJcbiAgICAgICAgICAgIHNob3J0X29yaWdpbjpsaW5rLFxyXG4gICAgICAgICAgICBzZXRFcnJvcnMsXHJcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ29weSA9ICh1cmwpID0+IHtcclxuICAgICAgICAvLyBDb3B5IHRoZSBVUkwgdG8gY2xpcGJvYXJkXHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodXJsKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0XHJcbiAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRleHQtZ3JheS04MDAgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4guC5ieC4reC4oeC4ueC4peC4guC4reC4h+C4ieC4seC4mVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+U2hvcnQgVVJMIC0g4LiC4LmJ4Lit4Lih4Li54Lil4LiC4Lit4LiH4LiJ4Lix4LiZPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuXHJcbiAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICB7c3VjY2VzcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIG1iLTRcIj57c3VjY2Vzc308L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPuC4quC4o+C5ieC4suC4hyBTaG9ydCBVUkw6PC9sYWJlbD5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3dcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgIHZhbHVlPXtvcmlnaW5hbFVybH1cclxuICAgIC8vICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPcmlnaW5hbFVybChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTQgIHB5LTIgbWItMiBtZDptci0yIG1kOm1iLTBcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBvcmlnaW5hbCBVUkxcIlxyXG4gICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TGluayhldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgLz5cclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHB4LTQgcHktMlwiXHJcbiAgICAgIG9uQ2xpY2s9e3N1Ym1pdEZvcm19XHJcbiAgICA+XHJcbiAgICAgIOC4ouC4t+C4meC4ouC4seC4mVxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxue215dXJsICYmXHJcbiAgICAgICAgbXl1cmwubWFwKChzaG9ydFVSTCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Nob3J0VVJMLmlkfSBjbGFzc05hbWU9XCJiZy13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXNtIHNtOnJvdW5kZWQtbGcgbWItM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi0yIG1kOm1yLTJcIj57c2hvcnRVUkwuc2hvcnRfdXJsfTwvZHQ+XHJcbiAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm1iLTIgbWQ6bWItMFwiPntzaG9ydFVSTC5zaG9ydF9vcmlnaW59PC9kZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb3B5KHNob3J0VVJMLnNob3J0X29yaWdpbil9PlxyXG4gICAgICAgICAgICAgICAgICBDb3B5XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KHNob3J0VVJMLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG48L2Rpdj4gICAgICAgICAgICBcclxuPGRpdj5cclxuICAgICAgey8qIC4uLiAqL31cclxuICAgICAgPE1vZGFsIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXHJcbiJdLCJuYW1lcyI6WyJBcHBMYXlvdXQiLCJIZWFkIiwidXNlVXNlclVSTCIsInVzZVN0YXRlIiwiTW9kYWwiLCJEYXNoYm9hcmQiLCJteXVybCIsImdlbmVyYXRlIiwibWlkZGxld2FyZSIsImNvbnNvbGUiLCJsb2ciLCJsaW5rIiwic2V0TGluayIsImVycm9ycyIsInNldEVycm9ycyIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlTW9kYWwiLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNob3J0X29yaWdpbiIsImhhbmRsZUNvcHkiLCJ1cmwiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJoZWFkZXIiLCJoMiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwic2hvcnRVUkwiLCJkdCIsInNob3J0X3VybCIsImRkIiwiaGFuZGxlRWRpdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/userurl */ \"./src/hooks/userurl.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const { myurl , generate  } = (0,_hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL)({\n        middleware: \"auth\"\n    });\n    console.log(\"tstttttt\", myurl);\n    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [copiedShortURL, setCopiedShortURL] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { asPath  } = router;\n    const submitForm = (event)=>{\n        event.preventDefault();\n        setLink(\"\");\n        generate({\n            short_origin: link,\n            setErrors,\n            setSuccess\n        });\n    };\n    const handleCopy = (url)=>{\n        // Copy the URL to clipboard\n        navigator.clipboard.writeText(\"http://localhost:3000/\" + url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"ข้อมูลของฉัน\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Short URL - ข้อมูลของฉัน\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto sm:px-6 lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-green-500 mb-4\",\n                                    children: success\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block\",\n                                    children: \"สร้าง Short URL:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 3\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col md:flex-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            //   value={originalUrl}\n                                            //   onChange={(e) => setOriginalUrl(e.target.value)}\n                                            className: \"border-gray-300 rounded-md px-4 py-2 mb-2 md:mr-2 md:mb-0\",\n                                            placeholder: \"Enter the original URL\",\n                                            onChange: (event)=>setLink(event.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2\",\n                                            onClick: submitForm,\n                                            children: \"ยืนยัน\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 5\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 3\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, undefined),\n                        myurl && myurl.map((shortURL)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white overflow-hidden shadow-sm sm:rounded-lg mb-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-6 bg-white border-b border-gray-200\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            className: \"text-gray-600 mb-2 md:mr-2\",\n                                            children: shortURL.short_url\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            className: \"mb-2 md:mb-0\",\n                                            children: shortURL.short_origin\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex mt-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"mr-2 px-4 py-2 rounded \".concat(copiedShortURL === shortURL.short_url ? \"bg-green-500 text-white\" : \"bg-blue-500 text-white\"),\n                                                    onClick: ()=>{\n                                                        handleCopy(shortURL.short_url);\n                                                        setCopiedShortURL(shortURL.short_url);\n                                                    },\n                                                    children: copiedShortURL === shortURL.short_url ? \"Copied\" : \"Copy\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: new Date(shortURL.created_at).toLocaleDateString()\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 26\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, shortURL.id, false, {\n                                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\dashboard.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Dashboard, \"T9nIp0jgCVDZ5RL5EDPgIXdIl/E=\", false, function() {\n    return [\n        _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQuanM/MzY2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXRzL0FwcExheW91dCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VVc2VyVVJMIH0gZnJvbSAnQC9ob29rcy91c2VydXJsJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2RhbCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBteXVybCxnZW5lcmF0ZSB9ID0gdXNlVXNlclVSTCh7IG1pZGRsZXdhcmU6ICdhdXRoJyB9KVxyXG4gICAgY29uc29sZS5sb2coJ3RzdHR0dHR0JyxteXVybClcclxuICAgIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbY29waWVkU2hvcnRVUkwsIHNldENvcGllZFNob3J0VVJMXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGFzUGF0aCB9ID0gcm91dGVyO1xyXG5cclxuXHJcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzZXRMaW5rKCcnKVxyXG4gICAgICAgIGdlbmVyYXRlKHtcclxuICAgICAgICAgICAgc2hvcnRfb3JpZ2luOmxpbmssXHJcbiAgICAgICAgICAgIHNldEVycm9ycyxcclxuICAgICAgICAgICAgc2V0U3VjY2Vzc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDb3B5ID0gKHVybCkgPT4ge1xyXG4gICAgICAgIC8vIENvcHkgdGhlIFVSTCB0byBjbGlwYm9hcmRcclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCgnaHR0cDovL2xvY2FsaG9zdDozMDAwLycrdXJsKTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0XHJcbiAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRleHQtZ3JheS04MDAgbGVhZGluZy10aWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOC4guC5ieC4reC4oeC4ueC4peC4guC4reC4h+C4ieC4seC4mVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+U2hvcnQgVVJMIC0g4LiC4LmJ4Lit4Lih4Li54Lil4LiC4Lit4LiH4LiJ4Lix4LiZPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuXHJcbiAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICB7c3VjY2VzcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIG1iLTRcIj57c3VjY2Vzc308L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPuC4quC4o+C5ieC4suC4hyBTaG9ydCBVUkw6PC9sYWJlbD5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3dcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgIHZhbHVlPXtvcmlnaW5hbFVybH1cclxuICAgIC8vICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPcmlnaW5hbFVybChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTQgIHB5LTIgbWItMiBtZDptci0yIG1kOm1iLTBcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBvcmlnaW5hbCBVUkxcIlxyXG4gICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TGluayhldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgLz5cclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHB4LTQgcHktMlwiXHJcbiAgICAgIG9uQ2xpY2s9e3N1Ym1pdEZvcm19XHJcbiAgICA+XHJcbiAgICAgIOC4ouC4t+C4meC4ouC4seC4mVxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxue215dXJsICYmXHJcbiAgICAgICAgbXl1cmwubWFwKChzaG9ydFVSTCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Nob3J0VVJMLmlkfSBjbGFzc05hbWU9XCJiZy13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXNtIHNtOnJvdW5kZWQtbGcgbWItM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi0yIG1kOm1yLTJcIj57c2hvcnRVUkwuc2hvcnRfdXJsfTwvZHQ+XHJcbiAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm1iLTIgbWQ6bWItMFwiPntzaG9ydFVSTC5zaG9ydF9vcmlnaW59PC9kZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btci0yIHB4LTQgcHktMiByb3VuZGVkICR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29waWVkU2hvcnRVUkwgPT09IHNob3J0VVJMLnNob3J0X3VybCA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZScgOiAnYmctYmx1ZS01MDAgdGV4dC13aGl0ZSdcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDb3B5KHNob3J0VVJMLnNob3J0X3VybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29waWVkU2hvcnRVUkwoc2hvcnRVUkwuc2hvcnRfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2NvcGllZFNob3J0VVJMID09PSBzaG9ydFVSTC5zaG9ydF91cmwgPyAnQ29waWVkJyA6ICdDb3B5J31cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPjxzcGFuPntuZXcgRGF0ZShzaG9ydFVSTC5jcmVhdGVkX2F0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG48L2Rpdj4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxyXG4iXSwibmFtZXMiOlsiQXBwTGF5b3V0IiwiSGVhZCIsInVzZVVzZXJVUkwiLCJ1c2VTdGF0ZSIsIk1vZGFsIiwidXNlUm91dGVyIiwiRGFzaGJvYXJkIiwibXl1cmwiLCJnZW5lcmF0ZSIsIm1pZGRsZXdhcmUiLCJjb25zb2xlIiwibG9nIiwibGluayIsInNldExpbmsiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImNvcGllZFNob3J0VVJMIiwic2V0Q29waWVkU2hvcnRVUkwiLCJyb3V0ZXIiLCJhc1BhdGgiLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNob3J0X29yaWdpbiIsImhhbmRsZUNvcHkiLCJ1cmwiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJoZWFkZXIiLCJoMiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwic2hvcnRVUkwiLCJkdCIsInNob3J0X3VybCIsImRkIiwic3BhbiIsIkRhdGUiLCJjcmVhdGVkX2F0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard.js\n"));

/***/ })

});
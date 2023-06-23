"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/qrcode",{

/***/ "./src/pages/qrcode.js":
/*!*****************************!*\
  !*** ./src/pages/qrcode.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/userurl */ \"./src/hooks/userurl.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_QRCodeComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/QRCodeComponent */ \"./src/components/QRCodeComponent.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst qrcode = ()=>{\n    _s();\n    const { myurl , generate  } = (0,_hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL)({\n        middleware: \"auth\"\n    });\n    console.log(\"tstttttt\", myurl);\n    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [copiedShortURL, setCopiedShortURL] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { asPath  } = router;\n    const handleScan = (data)=>{\n        if (data) {\n            setScannedData(data);\n            router.push(data);\n        }\n    };\n    const submitForm = (event)=>{\n        event.preventDefault();\n        setLink(\"\");\n        generate({\n            short_origin: link,\n            setErrors,\n            setSuccess\n        });\n    };\n    const handleCopy = (url)=>{\n        // Copy the URL to clipboard\n        navigator.clipboard.writeText(\"http://localhost:3000/\" + url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"QR Codes ของฉัน\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Short URL - QR Codes\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto sm:px-6 lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-green-500 mb-4\",\n                                    children: success\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block\",\n                                    children: \"สร้าง Short URL:\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 3\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col md:flex-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            //   value={originalUrl}\n                                            //   onChange={(e) => setOriginalUrl(e.target.value)}\n                                            className: \"border-gray-300 rounded-md px-4 py-2 mb-2 md:mr-2 md:mb-0\",\n                                            placeholder: \"Enter the original URL\",\n                                            onChange: (event)=>setLink(event.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 5\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2\",\n                                            onClick: submitForm,\n                                            children: \"ยืนยัน\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 5\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 3\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, undefined),\n                        myurl && myurl.map((shortURL)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white overflow-hidden shadow-sm sm:rounded-lg mb-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-6 bg-white border-b border-gray-200\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QRCodeComponent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            onScan: handleScan(\"http://localhost:8000\" + shortURL.short_url),\n                                            url: \"http://localhost:8000\" + shortURL.short_url\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                            className: \"text-gray-600 mt-2 mb-2 md:mr-2\",\n                                            children: shortURL.short_url\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                            className: \"mb-2 md:mb-0\",\n                                            children: shortURL.short_origin\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex mt-3 items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"mr-2 px-4 py-2 rounded \".concat(copiedShortURL === shortURL.short_url ? \"bg-green-500 text-white\" : \"bg-blue-500 text-white\"),\n                                                    onClick: ()=>{\n                                                        handleCopy(shortURL.short_url);\n                                                        setCopiedShortURL(shortURL.short_url);\n                                                    },\n                                                    children: copiedShortURL === shortURL.short_url ? \"Copied\" : \"Copy\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 3\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"mr-2 px-4 py-2 rounded bg-orange-500 text-white\",\n                                                    onClick: ()=>{\n                                                        window.location.href = \"/\" + shortURL.short_url;\n                                                    },\n                                                    children: \"ไปที่ลิ้ง\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 3\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-2\",\n                                                    children: new Date(shortURL.created_at).toLocaleDateString()\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 3\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, shortURL.id, false, {\n                                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HUAWEI\\\\Desktop\\\\breeze-next\\\\src\\\\pages\\\\qrcode.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(qrcode, \"T9nIp0jgCVDZ5RL5EDPgIXdIl/E=\", false, function() {\n    return [\n        _hooks_userurl__WEBPACK_IMPORTED_MODULE_3__.useUserURL,\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (qrcode);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQW1CZ0MsU0FBU0ssU0FBUyxHQUFHLFdBQVcsTUFBTTs7Ozs7OzhEQUU1RCw4REFBQ1I7b0RBQ0RWLFdBQVU7b0RBQ1ZXLFNBQVMsSUFBTTt3REFDYlUsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsTUFBTVYsU0FBU0ssU0FBUztvREFDakQ7OERBQ0Q7Ozs7Ozs4REFJQyw4REFBQ007b0RBQUt4QixXQUFVOzhEQUFRLElBQUl5QixLQUFLWixTQUFTYSxVQUFVLEVBQUVDLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQTFCdERkLFNBQVNlLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQy9CO0dBL0dNM0Q7O1FBQ3lCTCxzREFBVUE7UUFNdEJHLGtEQUFTQTs7O0FBMEc1QiwrREFBZUUsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcXJjb2RlLmpzPzAwNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0cy9BcHBMYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlVXNlclVSTCB9IGZyb20gJ0AvaG9va3MvdXNlcnVybCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBRUkNvZGVDb21wb25lbnQgIGZyb20gJy4vLi4vY29tcG9uZW50cy9RUkNvZGVDb21wb25lbnQnO1xyXG5jb25zdCBxcmNvZGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IG15dXJsLGdlbmVyYXRlIH0gPSB1c2VVc2VyVVJMKHsgbWlkZGxld2FyZTogJ2F1dGgnIH0pXHJcbiAgICBjb25zb2xlLmxvZygndHN0dHR0dHQnLG15dXJsKVxyXG4gICAgY29uc3QgW2xpbmssIHNldExpbmtdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtjb3BpZWRTaG9ydFVSTCwgc2V0Q29waWVkU2hvcnRVUkxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgYXNQYXRoIH0gPSByb3V0ZXI7XHJcbiAgICBjb25zdCBoYW5kbGVTY2FuID0gKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgc2V0U2Nhbm5lZERhdGEoZGF0YSk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc2V0TGluaygnJylcclxuICAgICAgICBnZW5lcmF0ZSh7XHJcbiAgICAgICAgICAgIHNob3J0X29yaWdpbjpsaW5rLFxyXG4gICAgICAgICAgICBzZXRFcnJvcnMsXHJcbiAgICAgICAgICAgIHNldFN1Y2Nlc3NcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ29weSA9ICh1cmwpID0+IHtcclxuICAgICAgICAvLyBDb3B5IHRoZSBVUkwgdG8gY2xpcGJvYXJkXHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nK3VybCk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dFxyXG4gICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC14bCB0ZXh0LWdyYXktODAwIGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICBRUiBDb2RlcyDguILguK3guIfguInguLHguJlcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlNob3J0IFVSTCAtIFFSIENvZGVzPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuXHJcbiAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICB7c3VjY2VzcyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIG1iLTRcIj57c3VjY2Vzc308L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPuC4quC4o+C5ieC4suC4hyBTaG9ydCBVUkw6PC9sYWJlbD5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3dcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgIHZhbHVlPXtvcmlnaW5hbFVybH1cclxuICAgIC8vICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPcmlnaW5hbFVybChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTQgIHB5LTIgbWItMiBtZDptci0yIG1kOm1iLTBcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBvcmlnaW5hbCBVUkxcIlxyXG4gICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TGluayhldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgLz5cclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHB4LTQgcHktMlwiXHJcbiAgICAgIG9uQ2xpY2s9e3N1Ym1pdEZvcm19XHJcbiAgICA+XHJcbiAgICAgIOC4ouC4t+C4meC4ouC4seC4mVxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxue215dXJsICYmXHJcbiAgICAgICAgbXl1cmwubWFwKChzaG9ydFVSTCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3Nob3J0VVJMLmlkfSBjbGFzc05hbWU9XCJiZy13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXNtIHNtOnJvdW5kZWQtbGcgbWItM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgPFFSQ29kZUNvbXBvbmVudCBvblNjYW49e2hhbmRsZVNjYW4ocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwrc2hvcnRVUkwuc2hvcnRfdXJsKX0gdXJsPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCtzaG9ydFVSTC5zaG9ydF91cmx9IC8+XHJcbiAgICAgICAgICAgICAgPGR0IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbXQtMiBtYi0yIG1kOm1yLTJcIj57c2hvcnRVUkwuc2hvcnRfdXJsfTwvZHQ+XHJcbiAgICAgICAgICAgICAgPGRkIGNsYXNzTmFtZT1cIm1iLTIgbWQ6bWItMFwiPntzaG9ydFVSTC5zaG9ydF9vcmlnaW59PC9kZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMyBpdGVtcy1jZW50ZXJcIj5cclxuICA8YnV0dG9uXHJcbiAgICBjbGFzc05hbWU9e2Btci0yIHB4LTQgcHktMiByb3VuZGVkICR7XHJcbiAgICAgIGNvcGllZFNob3J0VVJMID09PSBzaG9ydFVSTC5zaG9ydF91cmwgPyAnYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUnIDogJ2JnLWJsdWUtNTAwIHRleHQtd2hpdGUnXHJcbiAgICB9YH1cclxuICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgaGFuZGxlQ29weShzaG9ydFVSTC5zaG9ydF91cmwpO1xyXG4gICAgICBzZXRDb3BpZWRTaG9ydFVSTChzaG9ydFVSTC5zaG9ydF91cmwpO1xyXG4gICAgfX1cclxuICA+XHJcbiAgICB7Y29waWVkU2hvcnRVUkwgPT09IHNob3J0VVJMLnNob3J0X3VybCA/ICdDb3BpZWQnIDogJ0NvcHknfVxyXG4gIDwvYnV0dG9uPlxyXG4gIDxidXR0b25cclxuICBjbGFzc05hbWU9XCJtci0yIHB4LTQgcHktMiByb3VuZGVkIGJnLW9yYW5nZS01MDAgdGV4dC13aGl0ZVwiXHJcbiAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLycgKyBzaG9ydFVSTC5zaG9ydF91cmw7XHJcbiAgfX1cclxuPlxyXG4gIOC5hOC4m+C4l+C4teC5iOC4peC4tOC5ieC4h1xyXG48L2J1dHRvbj5cclxuXHJcbiAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPntuZXcgRGF0ZShzaG9ydFVSTC5jcmVhdGVkX2F0KS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3NwYW4+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuPC9kaXY+ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBxcmNvZGVcclxuIl0sIm5hbWVzIjpbIkFwcExheW91dCIsIkhlYWQiLCJ1c2VVc2VyVVJMIiwidXNlU3RhdGUiLCJNb2RhbCIsInVzZVJvdXRlciIsIlFSQ29kZUNvbXBvbmVudCIsInFyY29kZSIsIm15dXJsIiwiZ2VuZXJhdGUiLCJtaWRkbGV3YXJlIiwiY29uc29sZSIsImxvZyIsImxpbmsiLCJzZXRMaW5rIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJjb3BpZWRTaG9ydFVSTCIsInNldENvcGllZFNob3J0VVJMIiwicm91dGVyIiwiYXNQYXRoIiwiaGFuZGxlU2NhbiIsImRhdGEiLCJzZXRTY2FubmVkRGF0YSIsInB1c2giLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNob3J0X29yaWdpbiIsImhhbmRsZUNvcHkiLCJ1cmwiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJoZWFkZXIiLCJoMiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwic2hvcnRVUkwiLCJvblNjYW4iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFDS0VORF9VUkwiLCJzaG9ydF91cmwiLCJkdCIsImRkIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3BhbiIsIkRhdGUiLCJjcmVhdGVkX2F0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/qrcode.js\n"));

/***/ })

});
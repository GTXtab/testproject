"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Pagination/Pagination.tsx":
/*!**************************************************!*\
  !*** ./src/components/Pagination/Pagination.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.module.scss */ \"./src/components/Pagination/Pagination.module.scss\");\n/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TransactionTable_TransactionTable_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../TransactionTable/TransactionTable.module.scss */ \"./src/components/TransactionTable/TransactionTable.module.scss\");\n/* harmony import */ var _TransactionTable_TransactionTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TransactionTable_TransactionTable_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst transactions = [\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"XRP\",\n        date: \"16/12/2023\",\n        amount: \"$ 89,00\",\n        status: \"Active\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"BTC\",\n        date: \"14/11/2023\",\n        amount: \"$ 89,00\",\n        status: \"Active\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"AVAX\",\n        date: \"14/10/2023\",\n        amount: \"$ 89,00\",\n        status: \"Active\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"BTC\",\n        date: \"15/09/2023\",\n        amount: \"$ 89,00\",\n        status: \"Cancelled\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"AVAX\",\n        date: \"16/12/2023\",\n        amount: \"$ 89,00\",\n        status: \"Active\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"BTC\",\n        date: \"14/11/2023\",\n        amount: \"$ 89,00\",\n        status: \"Active\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"BTC\",\n        date: \"14/10/2023\",\n        amount: \"$ 89,00\",\n        status: \"Active\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"BTC\",\n        date: \"15/09/2023\",\n        amount: \"$ 89,00\",\n        status: \"Cancelled\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"ETH\",\n        date: \"16/12/2023\",\n        amount: \"$ 89,00\",\n        status: \"Active\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"PEPE\",\n        date: \"14/11/2023\",\n        amount: \"$ 89,00\",\n        status: \"Active\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"BTC\",\n        date: \"14/10/2023\",\n        amount: \"$ 89,00\",\n        status: \"Active\"\n    },\n    {\n        name: \"NL KPN 1 Month\",\n        method: \"BTC\",\n        date: \"15/09/2023\",\n        amount: \"$ 89,00\",\n        status: \"Cancelled\"\n    }\n];\nconst Pagination = ()=>{\n    _s();\n    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const transPerPage = 4;\n    const totalPages = Math.ceil(transactions.length / transPerPage);\n    const currentPageTrans = transactions.slice((pagination - 1) * transPerPage, pagination * transPerPage);\n    const handlePrevious = ()=>{\n        setPagination((prev)=>Math.max(prev - 1, 1));\n    };\n    const handleNext = ()=>{\n        setPagination((prev)=>Math.min(prev + 1, totalPages));\n    };\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);\n    const handlePageClick = (page)=>{\n        setCurrentPage(page);\n    };\n    const getPaginationRange = ()=>{\n        if (totalPages <= 6) {\n            return Array.from({\n                length: totalPages\n            }, (_, i)=>i + 1);\n        }\n        if (currentPage <= 3) {\n            return [\n                1,\n                2,\n                3,\n                \"...\",\n                totalPages - 1,\n                totalPages\n            ];\n        }\n        if (currentPage > totalPages - 3) {\n            return [\n                1,\n                2,\n                \"...\",\n                totalPages - 2,\n                totalPages - 1,\n                totalPages\n            ];\n        }\n        return [\n            1,\n            \"...\",\n            currentPage - 1,\n            currentPage,\n            currentPage + 1,\n            \"...\",\n            totalPages\n        ];\n    };\n    const paginationRange = getPaginationRange();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center space-x-2 mt-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: styles.paginationButton,\n                onClick: handlePrevious,\n                disabled: pagination === 1,\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            paginationRange.map((page, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"px-3 py-1 text-sm font-medium \".concat(page === currentPage ? \"\" : \"\", \" \").concat(page === \"...\" ? \"cursor-default\" : \"cursor-pointer\"),\n                    onClick: ()=>typeof page === \"number\" && handlePageClick(page),\n                    disabled: page === \"...\",\n                    children: page\n                }, index, false, {\n                    fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: styles.paginationButton,\n                onClick: handleNext,\n                disabled: pagination === totalPages,\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Pagination, \"D3+vZK3DVM+xMT9wPtlcFq9AhWU=\");\n_c = Pagination;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ047QUFDMEI7QUFFNUQsTUFBTUUsZUFBZTtJQUNqQjtRQUFFQyxNQUFNO1FBQWtCQyxRQUFRO1FBQU9DLE1BQU07UUFBY0MsUUFBUTtRQUFXQyxRQUFRO0lBQVM7SUFDakc7UUFBRUosTUFBTTtRQUFrQkMsUUFBUTtRQUFPQyxNQUFNO1FBQWNDLFFBQVE7UUFBV0MsUUFBUTtJQUFTO0lBQ2pHO1FBQUVKLE1BQU07UUFBa0JDLFFBQVE7UUFBUUMsTUFBTTtRQUFjQyxRQUFRO1FBQVdDLFFBQVE7SUFBUztJQUNsRztRQUFFSixNQUFNO1FBQWtCQyxRQUFRO1FBQU9DLE1BQU07UUFBY0MsUUFBUTtRQUFXQyxRQUFRO0lBQVk7SUFDcEc7UUFBRUosTUFBTTtRQUFrQkMsUUFBUTtRQUFRQyxNQUFNO1FBQWNDLFFBQVE7UUFBV0MsUUFBUTtJQUFTO0lBQ2xHO1FBQUVKLE1BQU07UUFBa0JDLFFBQVE7UUFBT0MsTUFBTTtRQUFjQyxRQUFRO1FBQVdDLFFBQVE7SUFBUztJQUNqRztRQUFFSixNQUFNO1FBQWtCQyxRQUFRO1FBQU9DLE1BQU07UUFBY0MsUUFBUTtRQUFXQyxRQUFRO0lBQVM7SUFDakc7UUFBRUosTUFBTTtRQUFrQkMsUUFBUTtRQUFPQyxNQUFNO1FBQWNDLFFBQVE7UUFBV0MsUUFBUTtJQUFZO0lBQ3BHO1FBQUVKLE1BQU07UUFBa0JDLFFBQVE7UUFBT0MsTUFBTTtRQUFjQyxRQUFRO1FBQVdDLFFBQVE7SUFBUztJQUNqRztRQUFFSixNQUFNO1FBQWtCQyxRQUFRO1FBQVFDLE1BQU07UUFBY0MsUUFBUTtRQUFXQyxRQUFRO0lBQVM7SUFDbEc7UUFBRUosTUFBTTtRQUFrQkMsUUFBUTtRQUFPQyxNQUFNO1FBQWNDLFFBQVE7UUFBV0MsUUFBUTtJQUFTO0lBQ2pHO1FBQUVKLE1BQU07UUFBa0JDLFFBQVE7UUFBT0MsTUFBTTtRQUFjQyxRQUFRO1FBQVdDLFFBQVE7SUFBWTtDQUNyRztBQUVILE1BQU1DLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNVSxlQUFlO0lBRXJCLE1BQU1DLGFBQWFDLEtBQUtDLElBQUksQ0FBQ1osYUFBYWEsTUFBTSxHQUFHSjtJQUVuRCxNQUFNSyxtQkFBbUJkLGFBQWFlLEtBQUssQ0FDekMsQ0FBQ1IsYUFBYSxLQUFLRSxjQUNuQkYsYUFBYUU7SUFHZixNQUFNTyxpQkFBaUI7UUFDckJSLGNBQWMsQ0FBQ1MsT0FBU04sS0FBS08sR0FBRyxDQUFDRCxPQUFPLEdBQUc7SUFDN0M7SUFFQSxNQUFNRSxhQUFhO1FBQ2pCWCxjQUFjLENBQUNTLE9BQVNOLEtBQUtTLEdBQUcsQ0FBQ0gsT0FBTyxHQUFHUDtJQUM3QztJQUVBLE1BQU0sQ0FBQ1csYUFBYUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQUM7SUFHL0MsTUFBTXdCLGtCQUFrQixDQUFDQztRQUN2QkYsZUFBZUU7SUFDakI7SUFFQSxNQUFNQyxxQkFBcUI7UUFDekIsSUFBSWYsY0FBYyxHQUFHO1lBQ25CLE9BQU9nQixNQUFNQyxJQUFJLENBQUM7Z0JBQUVkLFFBQVFIO1lBQVcsR0FBRyxDQUFDa0IsR0FBR0MsSUFBTUEsSUFBSTtRQUMxRDtRQUVBLElBQUlSLGVBQWUsR0FBRztZQUNwQixPQUFPO2dCQUFDO2dCQUFHO2dCQUFHO2dCQUFHO2dCQUFPWCxhQUFhO2dCQUFHQTthQUFXO1FBQ3JEO1FBRUEsSUFBSVcsY0FBY1gsYUFBYSxHQUFHO1lBQ2hDLE9BQU87Z0JBQUM7Z0JBQUc7Z0JBQUc7Z0JBQU9BLGFBQWE7Z0JBQUdBLGFBQWE7Z0JBQUdBO2FBQVc7UUFDbEU7UUFFQSxPQUFPO1lBQ0w7WUFDQTtZQUNBVyxjQUFjO1lBQ2RBO1lBQ0FBLGNBQWM7WUFDZDtZQUNBWDtTQUNEO0lBQ0g7SUFFQSxNQUFNb0Isa0JBQWtCTDtJQUV4QixxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDRCxXQUFXRSxPQUFPQyxnQkFBZ0I7Z0JBQ2xDQyxTQUFTcEI7Z0JBQ1RxQixVQUFVOUIsZUFBZTswQkFDMUI7Ozs7OztZQUdBdUIsZ0JBQWdCUSxHQUFHLENBQUMsQ0FBQ2QsTUFBTWUsc0JBQzFCLDhEQUFDTjtvQkFFQ0QsV0FBVyxpQ0FFUFIsT0FERkEsU0FBU0gsY0FBYyxLQUFLLElBQzdCLEtBQXdELE9BQXJERyxTQUFTLFFBQVEsbUJBQW1CO29CQUN4Q1ksU0FBUyxJQUFNLE9BQU9aLFNBQVMsWUFBWUQsZ0JBQWdCQztvQkFDM0RhLFVBQVViLFNBQVM7OEJBRWxCQTttQkFQSWU7Ozs7OzBCQVVULDhEQUFDTjtnQkFDQ0QsV0FBV0UsT0FBT0MsZ0JBQWdCO2dCQUNsQ0MsU0FBU2pCO2dCQUNUa0IsVUFBVTlCLGVBQWVHOzBCQUMxQjs7Ozs7Ozs7Ozs7O0FBS1A7R0FsRk1KO0tBQUFBO0FBb0ZOLGlFQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJEOlxcRGV2b3BzXFxUZXN0UHJvamVjdFxcc3JjXFxjb21wb25lbnRzXFxQYWdpbmF0aW9uXFxQYWdpbmF0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9QYWdpbmF0aW9uLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4vLi4vVHJhbnNhY3Rpb25UYWJsZS9UcmFuc2FjdGlvblRhYmxlLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCB0cmFuc2FjdGlvbnMgPSBbXHJcbiAgICB7IG5hbWU6IFwiTkwgS1BOIDEgTW9udGhcIiwgbWV0aG9kOiBcIlhSUFwiLCBkYXRlOiBcIjE2LzEyLzIwMjNcIiwgYW1vdW50OiBcIiQgODksMDBcIiwgc3RhdHVzOiBcIkFjdGl2ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTkwgS1BOIDEgTW9udGhcIiwgbWV0aG9kOiBcIkJUQ1wiLCBkYXRlOiBcIjE0LzExLzIwMjNcIiwgYW1vdW50OiBcIiQgODksMDBcIiwgc3RhdHVzOiBcIkFjdGl2ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTkwgS1BOIDEgTW9udGhcIiwgbWV0aG9kOiBcIkFWQVhcIiwgZGF0ZTogXCIxNC8xMC8yMDIzXCIsIGFtb3VudDogXCIkIDg5LDAwXCIsIHN0YXR1czogXCJBY3RpdmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5MIEtQTiAxIE1vbnRoXCIsIG1ldGhvZDogXCJCVENcIiwgZGF0ZTogXCIxNS8wOS8yMDIzXCIsIGFtb3VudDogXCIkIDg5LDAwXCIsIHN0YXR1czogXCJDYW5jZWxsZWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5MIEtQTiAxIE1vbnRoXCIsIG1ldGhvZDogXCJBVkFYXCIsIGRhdGU6IFwiMTYvMTIvMjAyM1wiLCBhbW91bnQ6IFwiJCA4OSwwMFwiLCBzdGF0dXM6IFwiQWN0aXZlXCIgfSxcclxuICAgIHsgbmFtZTogXCJOTCBLUE4gMSBNb250aFwiLCBtZXRob2Q6IFwiQlRDXCIsIGRhdGU6IFwiMTQvMTEvMjAyM1wiLCBhbW91bnQ6IFwiJCA4OSwwMFwiLCBzdGF0dXM6IFwiQWN0aXZlXCIgfSxcclxuICAgIHsgbmFtZTogXCJOTCBLUE4gMSBNb250aFwiLCBtZXRob2Q6IFwiQlRDXCIsIGRhdGU6IFwiMTQvMTAvMjAyM1wiLCBhbW91bnQ6IFwiJCA4OSwwMFwiLCBzdGF0dXM6IFwiQWN0aXZlXCIgfSxcclxuICAgIHsgbmFtZTogXCJOTCBLUE4gMSBNb250aFwiLCBtZXRob2Q6IFwiQlRDXCIsIGRhdGU6IFwiMTUvMDkvMjAyM1wiLCBhbW91bnQ6IFwiJCA4OSwwMFwiLCBzdGF0dXM6IFwiQ2FuY2VsbGVkXCIgfSxcclxuICAgIHsgbmFtZTogXCJOTCBLUE4gMSBNb250aFwiLCBtZXRob2Q6IFwiRVRIXCIsIGRhdGU6IFwiMTYvMTIvMjAyM1wiLCBhbW91bnQ6IFwiJCA4OSwwMFwiLCBzdGF0dXM6IFwiQWN0aXZlXCIgfSxcclxuICAgIHsgbmFtZTogXCJOTCBLUE4gMSBNb250aFwiLCBtZXRob2Q6IFwiUEVQRVwiLCBkYXRlOiBcIjE0LzExLzIwMjNcIiwgYW1vdW50OiBcIiQgODksMDBcIiwgc3RhdHVzOiBcIkFjdGl2ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTkwgS1BOIDEgTW9udGhcIiwgbWV0aG9kOiBcIkJUQ1wiLCBkYXRlOiBcIjE0LzEwLzIwMjNcIiwgYW1vdW50OiBcIiQgODksMDBcIiwgc3RhdHVzOiBcIkFjdGl2ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTkwgS1BOIDEgTW9udGhcIiwgbWV0aG9kOiBcIkJUQ1wiLCBkYXRlOiBcIjE1LzA5LzIwMjNcIiwgYW1vdW50OiBcIiQgODksMDBcIiwgc3RhdHVzOiBcIkNhbmNlbGxlZFwiIH0sXHJcbiAgXTtcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3BhZ2luYXRpb24sIHNldFBhZ2luYXRpb25dID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgdHJhbnNQZXJQYWdlID0gNDtcclxuXHJcbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0cmFuc2FjdGlvbnMubGVuZ3RoIC8gdHJhbnNQZXJQYWdlKTtcclxuXHJcbiAgY29uc3QgY3VycmVudFBhZ2VUcmFucyA9IHRyYW5zYWN0aW9ucy5zbGljZShcclxuICAgIChwYWdpbmF0aW9uIC0gMSkgKiB0cmFuc1BlclBhZ2UsXHJcbiAgICBwYWdpbmF0aW9uICogdHJhbnNQZXJQYWdlXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICBzZXRQYWdpbmF0aW9uKChwcmV2KSA9PiBNYXRoLm1heChwcmV2IC0gMSwgMSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBzZXRQYWdpbmF0aW9uKChwcmV2KSA9PiBNYXRoLm1pbihwcmV2ICsgMSwgdG90YWxQYWdlcykpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMik7XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2xpY2sgPSAocGFnZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2UocGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UGFnaW5hdGlvblJhbmdlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRvdGFsUGFnZXMgPD0gNikge1xyXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogdG90YWxQYWdlcyB9LCAoXywgaSkgPT4gaSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50UGFnZSA8PSAzKSB7XHJcbiAgICAgIHJldHVybiBbMSwgMiwgMywgXCIuLi5cIiwgdG90YWxQYWdlcyAtIDEsIHRvdGFsUGFnZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50UGFnZSA+IHRvdGFsUGFnZXMgLSAzKSB7XHJcbiAgICAgIHJldHVybiBbMSwgMiwgXCIuLi5cIiwgdG90YWxQYWdlcyAtIDIsIHRvdGFsUGFnZXMgLSAxLCB0b3RhbFBhZ2VzXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAxLFxyXG4gICAgICBcIi4uLlwiLFxyXG4gICAgICBjdXJyZW50UGFnZSAtIDEsXHJcbiAgICAgIGN1cnJlbnRQYWdlLFxyXG4gICAgICBjdXJyZW50UGFnZSArIDEsXHJcbiAgICAgIFwiLi4uXCIsXHJcbiAgICAgIHRvdGFsUGFnZXMsXHJcbiAgICBdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhZ2luYXRpb25SYW5nZSA9IGdldFBhZ2luYXRpb25SYW5nZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTIgbXQtNFwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbkJ1dHRvbn1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c31cclxuICAgICAgICBkaXNhYmxlZD17cGFnaW5hdGlvbiA9PT0gMX1cclxuICAgICAgPlxyXG4gICAgICAgIFByZXZpb3VzXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7cGFnaW5hdGlvblJhbmdlLm1hcCgocGFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcHgtMyBweS0xIHRleHQtc20gZm9udC1tZWRpdW0gJHtcclxuICAgICAgICAgICAgcGFnZSA9PT0gY3VycmVudFBhZ2UgPyBcIlwiIDogXCJcIlxyXG4gICAgICAgICAgfSAke3BhZ2UgPT09IFwiLi4uXCIgPyBcImN1cnNvci1kZWZhdWx0XCIgOiBcImN1cnNvci1wb2ludGVyXCJ9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHR5cGVvZiBwYWdlID09PSBcIm51bWJlclwiICYmIGhhbmRsZVBhZ2VDbGljayhwYWdlKX1cclxuICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSBcIi4uLlwifVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApKX1cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2luYXRpb25CdXR0b259XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cclxuICAgICAgICBkaXNhYmxlZD17cGFnaW5hdGlvbiA9PT0gdG90YWxQYWdlc31cclxuICAgICAgPlxyXG4gICAgICAgIE5leHRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ0cmFuc2FjdGlvbnMiLCJuYW1lIiwibWV0aG9kIiwiZGF0ZSIsImFtb3VudCIsInN0YXR1cyIsIlBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwic2V0UGFnaW5hdGlvbiIsInRyYW5zUGVyUGFnZSIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsImxlbmd0aCIsImN1cnJlbnRQYWdlVHJhbnMiLCJzbGljZSIsImhhbmRsZVByZXZpb3VzIiwicHJldiIsIm1heCIsImhhbmRsZU5leHQiLCJtaW4iLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiaGFuZGxlUGFnZUNsaWNrIiwicGFnZSIsImdldFBhZ2luYXRpb25SYW5nZSIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwicGFnaW5hdGlvblJhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwic3R5bGVzIiwicGFnaW5hdGlvbkJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIm1hcCIsImluZGV4Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pagination/Pagination.tsx\n"));

/***/ })

});
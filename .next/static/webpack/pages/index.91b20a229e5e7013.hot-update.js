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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.module.scss */ \"./src/components/Pagination/Pagination.module.scss\");\n/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Pagination = (param)=>{\n    let { currentPage, totalPages, paginate } = param;\n    const handlePrevious = ()=>{\n        paginate(Math.max(currentPage - 1, 1));\n    };\n    const handleNext = ()=>{\n        paginate(Math.min(currentPage + 1, totalPages));\n    };\n    const getPaginationRange = ()=>{\n        if (totalPages <= 6) {\n            return Array.from({\n                length: totalPages\n            }, (_, i)=>i + 1);\n        }\n        if (currentPage <= 3) {\n            return [\n                1,\n                2,\n                3,\n                \"...\",\n                totalPages - 1,\n                totalPages\n            ];\n        }\n        if (currentPage > totalPages - 3) {\n            return [\n                1,\n                2,\n                \"...\",\n                totalPages - 2,\n                totalPages - 1,\n                totalPages\n            ];\n        }\n        return [\n            1,\n            \"...\",\n            currentPage - 1,\n            currentPage,\n            currentPage + 1,\n            \"...\",\n            totalPages\n        ];\n    };\n    const paginationRange = getPaginationRange();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pagination),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().paginationButton),\n                onClick: handlePrevious,\n                disabled: currentPage === 1,\n                children: \"Previous\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().paginationButtons),\n                children: paginationRange.map((page, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat(page === currentPage ? (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active) : (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pag)),\n                        onClick: ()=>typeof page === \"number\" && paginate(page),\n                        disabled: page === \"...\",\n                        children: page\n                    }, index, false, {\n                        fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().paginationButton),\n                onClick: handleNext,\n                disabled: currentPage === totalPages,\n                children: \"Next\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().paginationForPhone),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().paginationButton),\n                        onClick: handlePrevious,\n                        disabled: pagination === 1,\n                        children: \"←\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\".concat((_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().pageInfo), \" \").concat((_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mobilePageInfo)),\n                        children: [\n                            \"Page \",\n                            pagination,\n                            \" of \",\n                            totalPages\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default().paginationButton),\n                        onClick: handleNext,\n                        disabled: pagination === totalPages,\n                        children: \"→\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pagination;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ29CO0FBRTlDLE1BQU1FLGFBQWE7UUFBQyxFQUFFQyxXQUFXLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZELE1BQU1DLGlCQUFpQjtRQUNyQkQsU0FBU0UsS0FBS0MsR0FBRyxDQUFDTCxjQUFjLEdBQUc7SUFDckM7SUFFQSxNQUFNTSxhQUFhO1FBQ2pCSixTQUFTRSxLQUFLRyxHQUFHLENBQUNQLGNBQWMsR0FBR0M7SUFDckM7SUFFQSxNQUFNTyxxQkFBcUI7UUFDekIsSUFBSVAsY0FBYyxHQUFHO1lBQ25CLE9BQU9RLE1BQU1DLElBQUksQ0FBQztnQkFBRUMsUUFBUVY7WUFBVyxHQUFHLENBQUNXLEdBQUdDLElBQU1BLElBQUk7UUFDMUQ7UUFFQSxJQUFJYixlQUFlLEdBQUc7WUFDcEIsT0FBTztnQkFBQztnQkFBRztnQkFBRztnQkFBRztnQkFBT0MsYUFBYTtnQkFBR0E7YUFBVztRQUNyRDtRQUVBLElBQUlELGNBQWNDLGFBQWEsR0FBRztZQUNoQyxPQUFPO2dCQUFDO2dCQUFHO2dCQUFHO2dCQUFPQSxhQUFhO2dCQUFHQSxhQUFhO2dCQUFHQTthQUFXO1FBQ2xFO1FBRUEsT0FBTztZQUNMO1lBQ0E7WUFDQUQsY0FBYztZQUNkQTtZQUNBQSxjQUFjO1lBQ2Q7WUFDQUM7U0FDRDtJQUNIO0lBRUEsTUFBTWEsa0JBQWtCTjtJQUV4QixxQkFDRSw4REFBQ087UUFBSUMsV0FBV2xCLDJFQUFpQjs7MEJBQy9CLDhEQUFDb0I7Z0JBQ0NGLFdBQVdsQixpRkFBdUI7Z0JBQ2xDc0IsU0FBU2pCO2dCQUNUa0IsVUFBVXJCLGdCQUFnQjswQkFDM0I7Ozs7OzswQkFHRCw4REFBQ3NCO2dCQUFRTixXQUFXbEIsa0ZBQXdCOzBCQUN6Q2dCLGdCQUFnQlUsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUMxQiw4REFBQ1I7d0JBRUNGLFdBQVcsR0FBcUQsT0FBbERTLFNBQVN6QixjQUFjRix1RUFBYSxHQUFHQSxvRUFBVTt3QkFDL0RzQixTQUFTLElBQU0sT0FBT0ssU0FBUyxZQUFZdkIsU0FBU3VCO3dCQUNwREosVUFBVUksU0FBUztrQ0FFbEJBO3VCQUxJQzs7Ozs7Ozs7OzswQkFTWCw4REFBQ1I7Z0JBQ0NGLFdBQVdsQixpRkFBdUI7Z0JBQ2xDc0IsU0FBU2Q7Z0JBQ1RlLFVBQVVyQixnQkFBZ0JDOzBCQUMzQjs7Ozs7OzBCQUdELDhEQUFDYztnQkFBSUMsV0FBV2xCLG1GQUF5Qjs7a0NBQ3ZDLDhEQUFDb0I7d0JBQU9GLFdBQVdsQixpRkFBdUI7d0JBQUVzQixTQUFTakI7d0JBQWdCa0IsVUFBVUosZUFBZTtrQ0FBRzs7Ozs7O2tDQUNqRyw4REFBQ2E7d0JBQUtkLFdBQVcsR0FBc0JsQixPQUFuQkEseUVBQWUsRUFBQyxLQUF5QixPQUF0QkEsK0VBQXFCOzs0QkFBSTs0QkFDeERtQjs0QkFBVzs0QkFBS2hCOzs7Ozs7O2tDQUV4Qiw4REFBQ2lCO3dCQUFPRixXQUFXbEIsaUZBQXVCO3dCQUFFc0IsU0FBU2Q7d0JBQVllLFVBQVVKLGVBQWVoQjtrQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlHO0tBeEVNRjtBQTBFTixpRUFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXERldm9wc1xcVGVzdFByb2plY3RcXHNyY1xcY29tcG9uZW50c1xcUGFnaW5hdGlvblxcUGFnaW5hdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1BhZ2luYXRpb24ubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IFBhZ2luYXRpb24gPSAoeyBjdXJyZW50UGFnZSwgdG90YWxQYWdlcywgcGFnaW5hdGUgfSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgcGFnaW5hdGUoTWF0aC5tYXgoY3VycmVudFBhZ2UgLSAxLCAxKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuICAgIHBhZ2luYXRlKE1hdGgubWluKGN1cnJlbnRQYWdlICsgMSwgdG90YWxQYWdlcykpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFBhZ2luYXRpb25SYW5nZSA9ICgpID0+IHtcclxuICAgIGlmICh0b3RhbFBhZ2VzIDw9IDYpIHtcclxuICAgICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHRvdGFsUGFnZXMgfSwgKF8sIGkpID0+IGkgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPD0gMykge1xyXG4gICAgICByZXR1cm4gWzEsIDIsIDMsIFwiLi4uXCIsIHRvdGFsUGFnZXMgLSAxLCB0b3RhbFBhZ2VzXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPiB0b3RhbFBhZ2VzIC0gMykge1xyXG4gICAgICByZXR1cm4gWzEsIDIsIFwiLi4uXCIsIHRvdGFsUGFnZXMgLSAyLCB0b3RhbFBhZ2VzIC0gMSwgdG90YWxQYWdlc107XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgMSxcclxuICAgICAgXCIuLi5cIixcclxuICAgICAgY3VycmVudFBhZ2UgLSAxLFxyXG4gICAgICBjdXJyZW50UGFnZSxcclxuICAgICAgY3VycmVudFBhZ2UgKyAxLFxyXG4gICAgICBcIi4uLlwiLFxyXG4gICAgICB0b3RhbFBhZ2VzLFxyXG4gICAgXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwYWdpbmF0aW9uUmFuZ2UgPSBnZXRQYWdpbmF0aW9uUmFuZ2UoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbn0+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0aW9uQnV0dG9ufVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzfVxyXG4gICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gMX1cclxuICAgICAgPlxyXG4gICAgICAgIFByZXZpb3VzXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0aW9uQnV0dG9uc30+XHJcbiAgICAgICAge3BhZ2luYXRpb25SYW5nZS5tYXAoKHBhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGFnZSA9PT0gY3VycmVudFBhZ2UgPyBzdHlsZXMuYWN0aXZlIDogc3R5bGVzLnBhZ31gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0eXBlb2YgcGFnZSA9PT0gXCJudW1iZXJcIiAmJiBwYWdpbmF0ZShwYWdlKX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IFwiLi4uXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2luYXRpb25CdXR0b259XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cclxuICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IHRvdGFsUGFnZXN9XHJcbiAgICAgID5cclxuICAgICAgICBOZXh0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2luYXRpb25Gb3JQaG9uZX0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0aW9uQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVQcmV2aW91c30gZGlzYWJsZWQ9e3BhZ2luYXRpb24gPT09IDF9PuKGkDwvYnV0dG9uPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBhZ2VJbmZvfSAke3N0eWxlcy5tb2JpbGVQYWdlSW5mb31gfT5cclxuICAgICAgICAgIFBhZ2Uge3BhZ2luYXRpb259IG9mIHt0b3RhbFBhZ2VzfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2luYXRpb25CdXR0b259IG9uQ2xpY2s9e2hhbmRsZU5leHR9IGRpc2FibGVkPXtwYWdpbmF0aW9uID09PSB0b3RhbFBhZ2VzfT7ihpI8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlBhZ2luYXRpb24iLCJjdXJyZW50UGFnZSIsInRvdGFsUGFnZXMiLCJwYWdpbmF0ZSIsImhhbmRsZVByZXZpb3VzIiwiTWF0aCIsIm1heCIsImhhbmRsZU5leHQiLCJtaW4iLCJnZXRQYWdpbmF0aW9uUmFuZ2UiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsInBhZ2luYXRpb25SYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2luYXRpb24iLCJidXR0b24iLCJwYWdpbmF0aW9uQnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwic2VjdGlvbiIsInBhZ2luYXRpb25CdXR0b25zIiwibWFwIiwicGFnZSIsImluZGV4IiwiYWN0aXZlIiwicGFnIiwicGFnaW5hdGlvbkZvclBob25lIiwic3BhbiIsInBhZ2VJbmZvIiwibW9iaWxlUGFnZUluZm8iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pagination/Pagination.tsx\n"));

/***/ })

});
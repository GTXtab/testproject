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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.module.scss */ \"./src/components/Pagination/Pagination.module.scss\");\n/* harmony import */ var _Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Pagination = ()=>{\n    _s();\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);\n    const totalPages = 10;\n    const handlePageClick = (page)=>{\n        setCurrentPage(page);\n    };\n    const getPaginationRange = ()=>{\n        if (totalPages <= 6) {\n            return Array.from({\n                length: totalPages\n            }, (_, i)=>i + 1);\n        }\n        if (currentPage <= 3) {\n            return [\n                1,\n                2,\n                3,\n                \"...\",\n                totalPages - 1,\n                totalPages\n            ];\n        }\n        if (currentPage > totalPages - 3) {\n            return [\n                1,\n                2,\n                \"...\",\n                totalPages - 2,\n                totalPages - 1,\n                totalPages\n            ];\n        }\n        return [\n            1,\n            \"...\",\n            currentPage - 1,\n            currentPage,\n            currentPage + 1,\n            \"...\",\n            totalPages\n        ];\n    };\n    const paginationRange = getPaginationRange();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center space-x-2 mt-4\",\n        children: paginationRange.map((page, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"px-3 py-1 text-sm font-medium \".concat(page === currentPage ? \"\" : \"\", \" \").concat(page === \"...\" ? \"cursor-default\" : \"cursor-pointer\"),\n                onClick: ()=>typeof page === \"number\" && handlePageClick(page),\n                disabled: page === \"...\",\n                children: page\n            }, index, false, {\n                fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\Devops\\\\TestProject\\\\src\\\\components\\\\Pagination\\\\Pagination.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Pagination, \"ldihyfsI3tELPDWIoiklmFhaPBI=\");\n_c = Pagination;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNOO0FBRWxDLE1BQU1FLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNSSxhQUFhO0lBRW5CLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkgsZUFBZUc7SUFDakI7SUFFQSxNQUFNQyxxQkFBcUI7UUFDekIsSUFBSUgsY0FBYyxHQUFHO1lBQ25CLE9BQU9JLE1BQU1DLElBQUksQ0FBQztnQkFBRUMsUUFBUU47WUFBVyxHQUFHLENBQUNPLEdBQUdDLElBQU1BLElBQUk7UUFDMUQ7UUFFQSxJQUFJVixlQUFlLEdBQUc7WUFDcEIsT0FBTztnQkFBQztnQkFBRztnQkFBRztnQkFBRztnQkFBT0UsYUFBYTtnQkFBR0E7YUFBVztRQUNyRDtRQUVBLElBQUlGLGNBQWNFLGFBQWEsR0FBRztZQUNoQyxPQUFPO2dCQUFDO2dCQUFHO2dCQUFHO2dCQUFPQSxhQUFhO2dCQUFHQSxhQUFhO2dCQUFHQTthQUFXO1FBQ2xFO1FBRUEsT0FBTztZQUFDO1lBQUc7WUFBT0YsY0FBYztZQUFHQTtZQUFhQSxjQUFjO1lBQUc7WUFBT0U7U0FBVztJQUNyRjtJQUVBLE1BQU1TLGtCQUFrQk47SUFFeEIscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7a0JBQ1pGLGdCQUFnQkcsR0FBRyxDQUFDLENBQUNWLE1BQU1XLHNCQUMxQiw4REFBQ0M7Z0JBRUNILFdBQVcsaUNBSVBULE9BSEZBLFNBQVNKLGNBQ0wsS0FDQSxJQUNMLEtBQXdELE9BQXJESSxTQUFTLFFBQVEsbUJBQW1CO2dCQUN4Q2EsU0FBUyxJQUFNLE9BQU9iLFNBQVMsWUFBWUQsZ0JBQWdCQztnQkFDM0RjLFVBQVVkLFNBQVM7MEJBRWxCQTtlQVRJVzs7Ozs7Ozs7OztBQWNmO0dBNUNNaEI7S0FBQUE7QUE4Q04saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxEZXZvcHNcXFRlc3RQcm9qZWN0XFxzcmNcXGNvbXBvbmVudHNcXFBhZ2luYXRpb25cXFBhZ2luYXRpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJy4vUGFnaW5hdGlvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMik7XHJcbiAgY29uc3QgdG90YWxQYWdlcyA9IDEwO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2xpY2sgPSAocGFnZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFBhZ2UocGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UGFnaW5hdGlvblJhbmdlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRvdGFsUGFnZXMgPD0gNikge1xyXG4gICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogdG90YWxQYWdlcyB9LCAoXywgaSkgPT4gaSArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50UGFnZSA8PSAzKSB7XHJcbiAgICAgIHJldHVybiBbMSwgMiwgMywgXCIuLi5cIiwgdG90YWxQYWdlcyAtIDEsIHRvdGFsUGFnZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50UGFnZSA+IHRvdGFsUGFnZXMgLSAzKSB7XHJcbiAgICAgIHJldHVybiBbMSwgMiwgXCIuLi5cIiwgdG90YWxQYWdlcyAtIDIsIHRvdGFsUGFnZXMgLSAxLCB0b3RhbFBhZ2VzXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gWzEsIFwiLi4uXCIsIGN1cnJlbnRQYWdlIC0gMSwgY3VycmVudFBhZ2UsIGN1cnJlbnRQYWdlICsgMSwgXCIuLi5cIiwgdG90YWxQYWdlc107XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGFnaW5hdGlvblJhbmdlID0gZ2V0UGFnaW5hdGlvblJhbmdlKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXgtMiBtdC00XCI+XHJcbiAgICAgIHtwYWdpbmF0aW9uUmFuZ2UubWFwKChwYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEgdGV4dC1zbSBmb250LW1lZGl1bSAke1xyXG4gICAgICAgICAgICBwYWdlID09PSBjdXJyZW50UGFnZVxyXG4gICAgICAgICAgICAgID8gXCJcIlxyXG4gICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgfSAke3BhZ2UgPT09IFwiLi4uXCIgPyBcImN1cnNvci1kZWZhdWx0XCIgOiBcImN1cnNvci1wb2ludGVyXCJ9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHR5cGVvZiBwYWdlID09PSBcIm51bWJlclwiICYmIGhhbmRsZVBhZ2VDbGljayhwYWdlKX1cclxuICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSBcIi4uLlwifVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhZ2luYXRpb24iLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsImhhbmRsZVBhZ2VDbGljayIsInBhZ2UiLCJnZXRQYWdpbmF0aW9uUmFuZ2UiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsInBhZ2luYXRpb25SYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImluZGV4IiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pagination/Pagination.tsx\n"));

/***/ })

});
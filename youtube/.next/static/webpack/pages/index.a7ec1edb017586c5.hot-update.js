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

/***/ "./componets/ConnectButton.js":
/*!************************************!*\
  !*** ./componets/ConnectButton.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConnectButton; }\n/* harmony export */ });\n/* harmony import */ var _Users_javiermirandaflores_code_youtube_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_javiermirandaflores_code_youtube_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_javiermirandaflores_code_youtube_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction getAccount() {\n    return _getAccount.apply(this, arguments);\n}\nfunction _getAccount() {\n    _getAccount = _asyncToGenerator(_Users_javiermirandaflores_code_youtube_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var accounts, account;\n        return _Users_javiermirandaflores_code_youtube_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return window.ethereum.request({\n                        method: \"eth_requestAccounts\"\n                    });\n                case 2:\n                    accounts = _ctx.sent;\n                    account = accounts[0];\n                    return _ctx.abrupt(\"return\", account);\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getAccount.apply(this, arguments);\n}\nfunction ConnectButton() {\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default()(\"\"), 2), accountAddress = ref[0], setAccountAddress = ref[1];\n    var connectButtonOnClick = function() {\n        if ( true && typeof window.ethereum !== \"undefined\") {\n            getAccount().then(function(response) {\n                setAccountAddress(response);\n            });\n            console.log(accountAddress);\n        } else {\n            console.log(\"error\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        variant: \"contained\",\n        onClick: connectButtonOnClick,\n        __source: {\n            fileName: \"/Users/javiermirandaflores/code/youtube/componets/ConnectButton.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        },\n        __self: this,\n        children: \"Connect Button\"\n    }));\n};\n_s1(ConnectButton, \"14hF1Lq/0P3EHKraHjxvyakqWXQ=\");\n_c = ConnectButton;\nvar _c;\n$RefreshReg$(_c, \"ConnectButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25ldHMvQ29ubmVjdEJ1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUUxQkUsVUFBVTtXQUFWQSxXQUFVOztTQUFWQSxXQUFVO0lBQVZBLFdBQVUscUpBQXpCLFFBQVEsV0FBb0IsQ0FBQztZQUNyQkMsUUFBUSxFQUdSQyxPQUFPOzs7OzsyQkFIVUMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDO3dCQUM5Q0MsTUFBTSxFQUFFLENBQXFCO29CQUMvQixDQUFDOztvQkFGS0wsUUFBUTtvQkFHUkMsT0FBTyxHQUFHRCxRQUFRLENBQUMsQ0FBQztpREFFbkJDLE9BQU87Ozs7OztJQUNoQixDQUFDO1dBUGNGLFdBQVU7O0FBU1YsUUFBUSxDQUFDTyxhQUFhLEdBQUcsQ0FBQzs7SUFDdkMsR0FBSyxDQUF1Q1QsR0FBWSxrQkFBWkEsNENBQVEsQ0FBQyxDQUFFLFFBQWhEVSxjQUFjLEdBQXVCVixHQUFZLEtBQWpDVyxpQkFBaUIsR0FBSVgsR0FBWTtJQUV4RCxHQUFLLENBQUNZLG9CQUFvQixHQUFHLFFBQy9CLEdBRHFDLENBQUM7UUFDbEMsRUFBRSxFQUNBLEtBQTZCLElBQzdCLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDQyxRQUFRLEtBQUssQ0FBVyxZQUN0QyxDQUFDO1lBQ0RKLFVBQVUsR0FBR1csSUFBSSxDQUFDLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7Z0JBQy9CSCxpQkFBaUIsQ0FBQ0csUUFBUTtZQUM1QixDQUFDO1lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixjQUFjO1FBQzVCLENBQUMsTUFBTSxDQUFDO1lBQ05LLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU87UUFDckIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLHNFQUNIZiw0REFBTTtRQUFDZ0IsT0FBTyxFQUFDLENBQVc7UUFBQ0MsT0FBTyxFQUFFTixvQkFBb0I7Ozs7Ozs7a0JBQUUsQ0FFM0Q7O0FBRUosQ0FBQztJQXRCdUJILGFBQWE7S0FBYkEsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25ldHMvQ29ubmVjdEJ1dHRvbi5qcz9hZWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdGF0ZSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFjY291bnQoKSB7XG4gIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gIH0pO1xuICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG5cbiAgcmV0dXJuIGFjY291bnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbm5lY3RCdXR0b24oKSB7XG4gIGNvbnN0IFthY2NvdW50QWRkcmVzcywgc2V0QWNjb3VudEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY29ubmVjdEJ1dHRvbk9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgdHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICkge1xuICAgICAgZ2V0QWNjb3VudCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldEFjY291bnRBZGRyZXNzKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coYWNjb3VudEFkZHJlc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2Nvbm5lY3RCdXR0b25PbkNsaWNrfT5cbiAgICAgIENvbm5lY3QgQnV0dG9uXG4gICAgPC9CdXR0b24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJnZXRBY2NvdW50IiwiYWNjb3VudHMiLCJhY2NvdW50Iiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiQ29ubmVjdEJ1dHRvbiIsImFjY291bnRBZGRyZXNzIiwic2V0QWNjb3VudEFkZHJlc3MiLCJjb25uZWN0QnV0dG9uT25DbGljayIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./componets/ConnectButton.js\n");

/***/ })

});
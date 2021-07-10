/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/media/l7x/Files/Projects/my-portfolio/src/components/TimeLine/TimeLine.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\n\nvar Timeline = function Timeline() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      activeItem = _useState[0],\n      setActiveItem = _useState[1];\n\n  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // const scroll = (node, left) => {\n  //   return node.scrollTo({ left, behavior: 'smooth' });\n  // }\n\n  var handleClick = function handleClick(e, i) {\n    e.preventDefault();\n\n    if (carouselRef.current) {\n      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n      scroll(carouselRef.current, scrollLeft);\n    }\n  }; // const handleScroll = () => {\n  //   if (carouselRef.current) {\n  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);\n  //     setActiveItem(index);\n  //   }\n  // }\n  // // snap back to beginning of scroll when window is resized\n  // // avoids a bug where content is covered up if coming from smaller screen\n  // useEffect(() => {\n  //   const handleResize = () => {\n  //     scroll(carouselRef.current, 0);\n  //   }\n  //   window.addEventListener('resize', handleResize);\n  // }, []);\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n    id: \"about\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n      children: \"About Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n      children: \"The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n      ref: carouselRef,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n            \"final\": index === TOTAL_CAROUSEL_COUNT - 1,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n              index: index,\n              id: \"carousel__item\".concat(index),\n              active: activeItem,\n              onClick: function onClick(e) {\n                return handleClick(e, index);\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                children: [item.year, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                  width: \"208\",\n                  height: \"6\",\n                  viewBox: \"0 0 208 6\",\n                  fill: \"none\",\n                  xmlns: \"http://www.w3.org/2000/svg\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    \"fill-rule\": \"evenodd\",\n                    \"clip-rule\": \"evenodd\",\n                    d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                    fill: \"url(#paint0_linear)\",\n                    \"fill-opacity\": \"0.33\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 93,\n                    columnNumber: 23\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                      id: \"paint0_linear\",\n                      x1: \"-4.30412e-10\",\n                      y1: \"0.5\",\n                      x2: \"208\",\n                      y2: \"0.500295\",\n                      gradientUnits: \"userSpaceOnUse\",\n                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                        \"stop-color\": \"white\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 109,\n                        columnNumber: 27\n                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                        offset: \"0.79478\",\n                        \"stop-color\": \"white\",\n                        \"stop-opacity\": \"0\"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 110,\n                        columnNumber: 27\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 101,\n                      columnNumber: 25\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 100,\n                    columnNumber: 23\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 17\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n          index: index,\n          active: activeItem\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Timeline, \"BeWKxKc1qZViFSD7/MFNqtRFzqM=\");\n\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanM/ODQ5MSJdLCJuYW1lcyI6WyJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsIlRpbWVMaW5lRGF0YSIsIlRpbWVsaW5lIiwidXNlU3RhdGUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwiaGFuZGxlQ2xpY2siLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsInNjcm9sbCIsIml0ZW0iLCJpbmRleCIsInllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBV0E7QUFNQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxxRUFBN0I7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNlQywrQ0FBUSxDQUFDLENBQUQsQ0FEdkI7QUFBQSxNQUNkQyxVQURjO0FBQUEsTUFDRkMsYUFERTs7QUFFckIsTUFBTUMsV0FBVyxHQUFHQyw2Q0FBTSxFQUExQixDQUZxQixDQUlyQjtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDNUJELEtBQUMsQ0FBQ0UsY0FBRjs7QUFFQSxRQUFJTCxXQUFXLENBQUNNLE9BQWhCLEVBQXlCO0FBQ3ZCLFVBQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQ2pCVCxXQUFXLENBQUNNLE9BQVosQ0FBb0JJLFdBQXBCLEdBQWtDLEdBQWxDLElBQXlDTixDQUFDLEdBQUdULHFFQUE3QyxDQURpQixDQUFuQjtBQUlBZ0IsWUFBTSxDQUFDWCxXQUFXLENBQUNNLE9BQWIsRUFBc0JDLFVBQXRCLENBQU47QUFDRDtBQUNGLEdBVkQsQ0FScUIsQ0FvQnJCO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQU9FLDhEQUFDLDhEQUFEO0FBQW1CLFNBQUcsRUFBRVAsV0FBeEI7QUFBQSw2QkFDRTtBQUFBLGtCQUNHTCxrRUFBQSxDQUFpQixVQUFDaUIsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ2pDLDhCQUNFLDhEQUFDLHFFQUFEO0FBRUUscUJBQU9BLEtBQUssS0FBS25CLG9CQUFvQixHQUFHLENBRjFDO0FBQUEsbUNBSUUsOERBQUMseURBQUQ7QUFDRSxtQkFBSyxFQUFFbUIsS0FEVDtBQUVFLGdCQUFFLDBCQUFtQkEsS0FBbkIsQ0FGSjtBQUdFLG9CQUFNLEVBQUVmLFVBSFY7QUFJRSxxQkFBTyxFQUFFLGlCQUFBSyxDQUFDO0FBQUEsdUJBQUlELFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJVSxLQUFKLENBQWY7QUFBQSxlQUpaO0FBQUEscUNBTUUsOERBQUMsOERBQUQ7QUFBQSwyQkFDR0QsSUFBSSxDQUFDRSxJQURSLGVBRUUsOERBQUMsNERBQUQ7QUFDRSx1QkFBSyxFQUFDLEtBRFI7QUFFRSx3QkFBTSxFQUFDLEdBRlQ7QUFHRSx5QkFBTyxFQUFDLFdBSFY7QUFJRSxzQkFBSSxFQUFDLE1BSlA7QUFLRSx1QkFBSyxFQUFDLDRCQUxSO0FBQUEsMENBT0U7QUFDRSxpQ0FBVSxTQURaO0FBRUUsaUNBQVUsU0FGWjtBQUdFLHFCQUFDLEVBQUMsMkpBSEo7QUFJRSx3QkFBSSxFQUFDLHFCQUpQO0FBS0Usb0NBQWE7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGLGVBY0U7QUFBQSwyQ0FDRTtBQUNFLHdCQUFFLEVBQUMsZUFETDtBQUVFLHdCQUFFLEVBQUMsY0FGTDtBQUdFLHdCQUFFLEVBQUMsS0FITDtBQUlFLHdCQUFFLEVBQUMsS0FKTDtBQUtFLHdCQUFFLEVBQUMsVUFMTDtBQU1FLG1DQUFhLEVBQUMsZ0JBTmhCO0FBQUEsOENBUUU7QUFBTSxzQ0FBVztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVJGLGVBU0U7QUFDRSw4QkFBTSxFQUFDLFNBRFQ7QUFFRSxzQ0FBVyxPQUZiO0FBR0Usd0NBQWE7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixhQUNPRCxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFpREQsU0FsREE7QUFESDtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQThERSw4REFBQyw0REFBRDtBQUFBLGdCQUNHbEIsa0VBQUEsQ0FBaUIsVUFBQ2lCLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNqQyw0QkFDRSw4REFBQywyREFBRDtBQUE0QixlQUFLLEVBQUVBLEtBQW5DO0FBQTBDLGdCQUFNLEVBQUVmO0FBQWxELFdBQXFCZSxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBR0QsT0FKQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RUQsQ0E5R0Q7O0dBQU1qQixROztLQUFBQSxRO0FBZ0hOLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIENhcm91c2VsQnV0dG9uLFxuICBDYXJvdXNlbEJ1dHRvbkRvdCxcbiAgQ2Fyb3VzZWxCdXR0b25zLFxuICBDYXJvdXNlbENvbnRhaW5lcixcbiAgQ2Fyb3VzZWxJdGVtLFxuICBDYXJvdXNlbEl0ZW1JbWcsXG4gIENhcm91c2VsSXRlbVRleHQsXG4gIENhcm91c2VsSXRlbVRpdGxlLFxuICBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUsXG59IGZyb20gXCIuL1RpbWVMaW5lU3R5bGVzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRleHQsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IFRpbWVMaW5lRGF0YS5sZW5ndGg7XG5cbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcblxuICAvLyBjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xuICAvLyAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAvLyB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aClcbiAgICAgICk7XG5cbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAvLyAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gIC8vICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcblxuICAvLyAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAvLyAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAvLyAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xuICAvLyAgIH1cblxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XG4gICAgICA8U2VjdGlvblRpdGxlPkFib3V0IE1lPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgIFRoZSBwdXJwb3NlIG9mIEphdmFTY3JpcHQgTWFzdGVyeSBpcyB0byBoZWxwIGFzcGlyaW5nIGFuZCBlc3RhYmxpc2hlZFxuICAgICAgICBkZXZlbG9wZXJzIHRvIHRha2UgdGhlaXIgZGV2ZWxvcG1lbnQgc2tpbGxzIHRvIHRoZSBuZXh0IGxldmVsIGFuZCBidWlsZFxuICAgICAgICBhd2Vzb21lIGFwcHMuXG4gICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9PlxuICAgICAgICA8PlxuICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSBUT1RBTF9DQVJPVVNFTF9DT1VOVCAtIDF9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX19pdGVtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS55ZWFyfVxuICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjIwOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XG4gICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b24ga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4fSBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/student";
exports.ids = ["pages/student"];
exports.modules = {

/***/ "./components/CASDdrop.js":
/*!********************************!*\
  !*** ./components/CASDdrop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_timetable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/timetable */ \"./pages/timetable.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass CASDdrop extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(){\n        super();\n        this.state = {\n            DDL1: [],\n            DDL2: [],\n            selectddl: \"\"\n        };\n    }\n    componentDidMount() {\n        this.setState({\n            DDL1: [\n                {\n                    name: \"Course\",\n                    DDL2: [\n                        \"IT\",\n                        \"CS\",\n                        \"Biotech\",\n                        \"BAF\"\n                    ]\n                },\n                {\n                    name: \"Year\",\n                    DDL2: [\n                        \"2018\",\n                        \"2019\",\n                        \"2020\",\n                        \"2021\",\n                        \"2022\",\n                        \"2023\"\n                    ]\n                },\n                {\n                    name: \"Semester\",\n                    DDL2: [\n                        \"Semeter1\",\n                        \"Semeter2\",\n                        \"Semeter3\",\n                        \"Semeter4\",\n                        \"Semeter5\",\n                        \"Semeter6\"\n                    ]\n                },\n                {\n                    name: \"Division\",\n                    DDL2: [\n                        \"A\",\n                        \"B\",\n                        \"C\",\n                        \"D\"\n                    ]\n                }\n            ]\n        });\n    }\n    selectChange(e) {\n        this.setState({\n            selectddl: e.target.value\n        });\n        this.setState({\n            DDL2: this.state.DDL1.find((x)=>x.name === e.target.value).DDL2\n        });\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Auto Timetable Generator\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                    lineNumber: 34,\n                    columnNumber: 23\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                    lineNumber: 35,\n                    columnNumber: 23\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Select field\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: this.state.selectddl,\n                            onChange: this.selectChange.bind(this),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \" --Select-- \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, this),\n                                this.state.DDL1.map((x)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: x.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 37\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"-------------------\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 21\n                                }, this),\n                                this.state.DDL2.map((x)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        children: x\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 36\n                                    }, this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                    lineNumber: 64,\n                    columnNumber: 1\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                    lineNumber: 64,\n                    columnNumber: 6\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                    lineNumber: 64,\n                    columnNumber: 16\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                    lineNumber: 64,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                    lineNumber: 64,\n                    columnNumber: 26\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                        lineNumber: 67,\n                        columnNumber: 5\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n                    lineNumber: 65,\n                    columnNumber: 1\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\components\\\\CASDdrop.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CASDdrop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NBU0Rkcm9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNHO0FBQ0w7QUFFdkMsTUFBTUksaUJBQWlCSCw0Q0FBU0E7SUFDNUJJLGFBQWM7UUFDVixLQUFLO1FBQ0wsSUFBSSxDQUFDQyxLQUFLLEdBQUc7WUFDVEMsTUFBTSxFQUFFO1lBQ1JDLE1BQU8sRUFBRTtZQUNUQyxXQUFXO1FBQ2Y7SUFDSjtJQUVBQyxvQkFBb0I7UUFDaEIsSUFBSSxDQUFDQyxRQUFRLENBQUM7WUFDVkosTUFBTztnQkFDSDtvQkFBQ0ssTUFBSztvQkFBVUosTUFBTzt3QkFBQzt3QkFBSzt3QkFBSzt3QkFBVTtxQkFBTTtnQkFBQTtnQkFDbEQ7b0JBQUNJLE1BQUs7b0JBQVFKLE1BQU87d0JBQUM7d0JBQU87d0JBQU87d0JBQU87d0JBQU87d0JBQU87cUJBQU87Z0JBQUE7Z0JBQ2hFO29CQUFDSSxNQUFLO29CQUFZSixNQUFPO3dCQUFDO3dCQUFXO3dCQUFXO3dCQUFXO3dCQUFXO3dCQUFXO3FCQUFXO2dCQUFBO2dCQUM1RjtvQkFBQ0ksTUFBSztvQkFBWUosTUFBTzt3QkFBQzt3QkFBSTt3QkFBSTt3QkFBSTtxQkFBSTtnQkFBQTthQUM3QztRQUNMO0lBQ0o7SUFFQUssYUFBYUMsQ0FBQyxFQUFFO1FBQ1osSUFBSSxDQUFDSCxRQUFRLENBQUM7WUFBQ0YsV0FBWUssRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1FBQUM7UUFDMUMsSUFBSSxDQUFDTCxRQUFRLENBQUM7WUFBRUgsTUFBTSxJQUFJLENBQUNGLEtBQUssQ0FBQ0MsSUFBSSxDQUFDVSxJQUFJLENBQUNDLENBQUFBLElBQUtBLEVBQUVOLElBQUksS0FBS0UsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLEVBQUVSLElBQUk7UUFBQztJQUNwRjtJQUVBVyxTQUFTO1FBQ0wscUJBQ0ksOERBQUNDOzs4QkFDUyw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7Ozs7OzhCQUNQLDhEQUFDQzs7c0NBQ0csOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ1IsOERBQUNDOzRCQUFPVCxPQUFPLElBQUksQ0FBQ1YsS0FBSyxDQUFDRyxTQUFTOzRCQUFHaUIsVUFBVSxJQUFJLENBQUNiLFlBQVksQ0FBQ2MsSUFBSSxDQUFDLElBQUk7OzhDQUN2RSw4REFBQ0M7OENBQU87Ozs7OztnQ0FDUCxJQUFJLENBQUN0QixLQUFLLENBQUNDLElBQUksQ0FBQ3NCLEdBQUcsQ0FBQ1gsQ0FBQUEsSUFBSztvQ0FDakIscUJBQU8sOERBQUNVO2tEQUFRVixFQUFFTixJQUFJOzs7Ozs7Z0NBQzlCOzs7Ozs7O3NDQUdMLDhEQUFDYTs7OENBS0csOERBQUNHOzhDQUFPOzs7Ozs7Z0NBSUosSUFBSSxDQUFDdEIsS0FBSyxDQUFDRSxJQUFJLENBQUNxQixHQUFHLENBQUNYLENBQUFBLElBQUs7b0NBQ3JCLHFCQUFPLDhEQUFDVTtrREFBUVY7Ozs7OztnQ0FDcEI7Ozs7Ozs7Ozs7Ozs7OEJBUXhCLDhEQUFDWTs7Ozs7OEJBQUksOERBQUNBOzs7Ozs4QkFBSSw4REFBQ0E7Ozs7OzhCQUFJLDhEQUFDQTs7Ozs7OEJBQUksOERBQUNBOzs7Ozs4QkFBSSw4REFBQ0E7Ozs7OzhCQUMxQiw4REFBQ1A7OEJBRUcsNEVBQUNRO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztJQUtSO0FBR0o7QUFNQSxpRUFBZTNCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWFwcC8uL2NvbXBvbmVudHMvQ0FTRGRyb3AuanM/NjQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dGltZXRhYmxlfSBmcm9tIFwiLi4vcGFnZXMvdGltZXRhYmxlXCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jbGFzcyBDQVNEZHJvcCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgRERMMSA6W10sXHJcbiAgICAgICAgICAgIERETDIgOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0ZGRsOiAnJyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBEREwxIDogW1xyXG4gICAgICAgICAgICAgICAge25hbWU6J0NvdXJzZScsIERETDIgOiBbJ0lUJywnQ1MnLCdCaW90ZWNoJywnQkFGJ119LFxyXG4gICAgICAgICAgICAgICAge25hbWU6J1llYXInLCBEREwyIDogWycyMDE4JywnMjAxOScsJzIwMjAnLCcyMDIxJywnMjAyMicsJzIwMjMnXX0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTonU2VtZXN0ZXInLCBEREwyIDogWydTZW1ldGVyMScsJ1NlbWV0ZXIyJywnU2VtZXRlcjMnLCdTZW1ldGVyNCcsJ1NlbWV0ZXI1JywnU2VtZXRlcjYnXX0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTonRGl2aXNpb24nLCBEREwyIDogWydBJywnQicsJ0MnLCdEJ119LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0Q2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RkZGwgOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgRERMMjogdGhpcy5zdGF0ZS5EREwxLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGUudGFyZ2V0LnZhbHVlKS5EREwyIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDE+QXV0byBUaW1ldGFibGUgR2VuZXJhdG9yPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5TZWxlY3QgZmllbGQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RkZGx9ICBvbkNoYW5nZT17dGhpcy5zZWxlY3RDaGFuZ2UuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj4gLS1TZWxlY3QtLSA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5EREwxLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbj57eC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxvcHRpb24gc2VsZWN0ZWQgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAgICAgICAgICAgb3IgeW91IGNhbiB1c2UgdGhpcyAgPC9vcHRpb24+ICovfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5EREwyLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uPnt4fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbnsvKiBjb25zdCBoYW5kbGVTdWJtaXRDbGljayA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKCcvc3R1ZGVudCcpXHJcbiAgfSAqL31cclxuXHJcbjxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPlxyXG48Y2VudGVyPlxyXG4gICAgey8qIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0Q2xpY2t9PlN1Ym1pdDwvYnV0dG9uPiAqL31cclxuICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XHJcblxyXG48L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgXHJcbn1cclxuXHJcbiAgXHJcblxyXG4gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ0FTRGRyb3A7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidGltZXRhYmxlIiwidXNlUm91dGVyIiwiQ0FTRGRyb3AiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiRERMMSIsIkRETDIiLCJzZWxlY3RkZGwiLCJjb21wb25lbnREaWRNb3VudCIsInNldFN0YXRlIiwibmFtZSIsInNlbGVjdENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbmQiLCJ4IiwicmVuZGVyIiwiZGl2IiwiaDEiLCJociIsImNlbnRlciIsImgzIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJiaW5kIiwib3B0aW9uIiwibWFwIiwiYnIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CASDdrop.js\n");

/***/ }),

/***/ "./pages/student.js":
/*!**************************!*\
  !*** ./pages/student.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CASDdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CASDdrop */ \"./components/CASDdrop.js\");\n\n\n// import { Cascader } from \"rsuite\"\nconst StudentPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CASDdrop__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\pages\\\\student.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\pages\\\\student.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHVkZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQzdDLG9DQUFvQztBQUNwQyxNQUFNQyxjQUFjLElBQU07SUFDeEIscUJBQ0UsOERBQUNDO2tCQUVDLDRFQUFDRiw0REFBUUE7Ozs7Ozs7Ozs7QUFLYjtBQUNGLGlFQUFlQyxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC1hcHAvLi9wYWdlcy9zdHVkZW50LmpzP2U3Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENBU0Rkcm9wIGZyb20gJy4uL2NvbXBvbmVudHMvQ0FTRGRyb3AnXHJcbi8vIGltcG9ydCB7IENhc2NhZGVyIH0gZnJvbSBcInJzdWl0ZVwiXHJcbmNvbnN0IFN0dWRlbnRQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogPGgxPlN0dWRlbnQgUGFnZTwvaDE+ICovfVxyXG4gICAgICA8Q0FTRGRyb3AgLz5cclxuICAgICAgey8qIDxDYXNjYWRlcj48L0Nhc2NhZGVyPiAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbiAgfVxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50UGFnZVxyXG4iXSwibmFtZXMiOlsiQ0FTRGRyb3AiLCJTdHVkZW50UGFnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/student.js\n");

/***/ }),

/***/ "./pages/timetable.js":
/*!****************************!*\
  !*** ./pages/timetable.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TimetablePage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Timetable\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\pages\\\\timetable.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\vanshita patil\\\\Desktop\\\\TTProject\\\\my-next-app\\\\pages\\\\timetable.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimetablePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aW1ldGFibGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLGdCQUFnQixJQUFNO0lBQzFCLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7c0JBQUc7Ozs7Ozs7Ozs7O0FBR1Y7QUFFQSxpRUFBZUYsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQtYXBwLy4vcGFnZXMvdGltZXRhYmxlLmpzPzhjYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgVGltZXRhYmxlUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlRpbWV0YWJsZTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWV0YWJsZVBhZ2VcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGltZXRhYmxlUGFnZSIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/timetable.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/student.js"));
module.exports = __webpack_exports__;

})();
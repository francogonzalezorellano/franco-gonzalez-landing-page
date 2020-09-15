exports.ids = [2];
exports.modules = {

/***/ "./components/projectPage/project_page.js":
/*!************************************************!*\
  !*** ./components/projectPage/project_page.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer */ "framer");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var _project_page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project_page.module.css */ "./components/projectPage/project_page.module.css");
/* harmony import */ var _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_project_page_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/projectPage/project_page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProjectPage(props) {
  const widthLayer = Math.min(Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_2__["getWindowWidth"])(), 1400);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_1__["Frame"], {
    top: 225,
    width: widthLayer,
    center: true,
    background: "1b1b1b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contenedor_general,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contenedor_header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, props.dataProject.title), __jsx("h4", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, props.dataProject.type)), props.dataProject.content.map(aContentPath => __jsx("img", {
    src: aContentPath,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contenedor_back,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: _project_page_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.back,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, " Back to Projects "))))));
}

/***/ }),

/***/ "./components/projectPage/project_page.module.css":
/*!********************************************************!*\
  !*** ./components/projectPage/project_page.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contenedor_general": "project_page_contenedor_general__3gzUf",
	"contenedor_header": "project_page_contenedor_header__1Jj3T",
	"title": "project_page_title__1U8-2",
	"type": "project_page_type__tt6nn",
	"contenedor_back": "project_page_contenedor_back__3qSlj",
	"back": "project_page_back__L62mm"
};

/***/ }),

/***/ "./components/window/window_dimensions.js":
/*!************************************************!*\
  !*** ./components/window/window_dimensions.js ***!
  \************************************************/
/*! exports provided: getWindowHeight, getWindowWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowHeight", function() { return getWindowHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowWidth", function() { return getWindowWidth; });
const hasWindow = false;
function getWindowHeight() {
  const height = hasWindow ? window.innerHeight : null;
  return height;
}
function getWindowWidth() {
  const width = hasWindow ? window.innerWidth : null;
  return width;
}

/***/ })

};;
//# sourceMappingURL=2.js.map
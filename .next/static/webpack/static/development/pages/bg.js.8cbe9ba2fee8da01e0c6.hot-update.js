webpackHotUpdate("static/development/pages/bg.js",{

/***/ "./components/home/bg_scroll/bg_scroll.js":
/*!************************************************!*\
  !*** ./components/home/bg_scroll/bg_scroll.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BgScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer */ "./node_modules/framer/build/framer.js");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/home/bg_scroll/bg_scroll.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import { Frame, Scroll } from "framer";



 // import Color from 'framer'

var Frame = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! framer */ "./node_modules/framer/build/framer.js", 7)).then(function (mod) {
    return mod.Frame;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! framer */ "./node_modules/framer/build/framer.js")];
    },
    modules: ['framer']
  }
});
var Scroll = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! framer */ "./node_modules/framer/build/framer.js", 7)).then(function (mod) {
    return mod.Scroll;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! framer */ "./node_modules/framer/build/framer.js")];
    },
    modules: ['framer']
  }
});
var Color = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! framer */ "./node_modules/framer/build/framer.js", 7)).then(function (mod) {
    return mod.Color;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! framer */ "./node_modules/framer/build/framer.js")];
    },
    modules: ['framer']
  }
});
function BgScroll() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      ssrDone = _useState[0],
      setSsrDone = _useState[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useElementScroll = Object(framer__WEBPACK_IMPORTED_MODULE_3__["useElementScroll"])(ref),
      scrollYProgress = _useElementScroll.scrollYProgress;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setSsrDone(true);
  }, []);
  var widthBg = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])() * (7680 / 4320);
  var heightBg = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])();

  if (ssrDone) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx(Frame, {
      height: heightBg,
      width: widthBg,
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/shadow.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        mixBlendMode: "multiply"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }), __jsx(Frame, {
      height: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])(),
      width: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])() * (7680 / 4320),
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/layer_3.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }), __jsx(Frame, {
      height: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])(),
      width: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])() * (7680 / 4320),
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/layer_2.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }), __jsx(Frame, {
      height: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])(),
      width: Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowHeight"])() * (7680 / 4320),
      top: 0,
      left: (Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_1__["getWindowWidth"])() - widthBg) / 2,
      image: "/background_parallax/layer_1.png",
      style: {
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }));
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Loading...");
}
/*

*/

/***/ })

})
//# sourceMappingURL=bg.js.8cbe9ba2fee8da01e0c6.hot-update.js.map
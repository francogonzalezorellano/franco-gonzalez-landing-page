exports.ids = [0];
exports.modules = {

/***/ "./components/contact/contact.js":
/*!***************************************!*\
  !*** ./components/contact/contact.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.module.css */ "./components/contact/contact.module.css");
/* harmony import */ var _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contact_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer */ "framer");
/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../window/window_dimensions.js */ "./components/window/window_dimensions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contact_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact_animation */ "./components/contact/contact_animation.js");
/* harmony import */ var _png_sequence_animation_png_secuence_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../png_sequence_animation/png_secuence_animation */ "./components/png_sequence_animation/png_secuence_animation.js");
/* harmony import */ var _contact_animation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact_animation.module.css */ "./components/contact/contact_animation.module.css");
/* harmony import */ var _contact_animation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_contact_animation_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/contact/contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Contact() {
  const widthLayer = Math.min(Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__["getWindowWidth"])(), 1920);
  const heightLayer = Object(_window_window_dimensions_js__WEBPACK_IMPORTED_MODULE_4__["getWindowHeight"])();
  const social = [{
    link: '',
    src: '/sw_icons_svg/BE.svg',
    alt: 'logo behanse'
  }, {
    link: '',
    src: '/sw_icons_svg/Insta_2.svg',
    alt: 'logo behanse'
  }, {
    link: '',
    src: '/sw_icons_svg/Linked.svg',
    alt: 'logo behanse'
  }, {
    link: '',
    src: '/sw_icons_svg/Tw.svg',
    alt: 'logo behanse'
  }];
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    exit: "exit",
    initial: "initial",
    animate: "animate",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationContactPage"])(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: widthLayer,
    height: heightLayer,
    center: true,
    background: "200a48",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    center: true,
    width: "100%",
    background: "200a48",
    direction: "vertical",
    gap: "0px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: "100%",
    height: "0px",
    center: "x",
    background: "red",
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contact,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationElement"])(0.2),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: "1027px",
    height: "0px",
    top: "-50px",
    center: "x",
    background: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }, __jsx(_png_sequence_animation_png_secuence_animation__WEBPACK_IMPORTED_MODULE_7__["default"], {
    styles: _contact_animation_module_css__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  })))), __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    center: "x",
    bottom: 0,
    width: "100%",
    background: "200a48",
    direction: "vertical",
    gap: "px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(framer__WEBPACK_IMPORTED_MODULE_2__["Frame"], {
    width: "100%",
    background: "200a48",
    height: "50px",
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationElement"])(0.6),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, "Social"), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social_container,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: Object(_contact_animation__WEBPACK_IMPORTED_MODULE_6__["animationElement"])(0.8),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, social.map(x => __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: x.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 37
    }
  }, __jsx("img", {
    src: x.src,
    alt: x.alt,
    className: _contact_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.social_logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }))))))));
}
/*
*/

/***/ }),

/***/ "./components/contact/contact.module.css":
/*!***********************************************!*\
  !*** ./components/contact/contact.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "contact_container__MyePu",
	"contact": "contact_contact__2mLcb",
	"mail": "contact_mail__1Ys6r",
	"social": "contact_social__1cKKB",
	"social_container": "contact_social_container__3Er-7",
	"social_logo": "contact_social_logo__31o0h",
	"center_items": "contact_center_items__2-kyY"
};

/***/ }),

/***/ "./components/contact/contact_animation.js":
/*!*************************************************!*\
  !*** ./components/contact/contact_animation.js ***!
  \*************************************************/
/*! exports provided: animationElement, animationContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationElement", function() { return animationElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationContactPage", function() { return animationContactPage; });
const easing = [0.6, -0.05, 0.01, 0.99];

function animationElement(unDelay) {
  return {
    initial: {
      opacity: 0,
      x: -40
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
        delay: unDelay
      }
    },
    exit: {
      opacity: 0,
      x: 0
    }
  };
}

function animationContactPage() {
  return {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
        delay: 0
      }
    },
    exit: {
      opacity: 0
    }
  };
}



/***/ }),

/***/ "./components/contact/contact_animation.module.css":
/*!*********************************************************!*\
  !*** ./components/contact/contact_animation.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"animation": "contact_animation_animation__3X1G0",
	"animation_play": "contact_animation_animation_play__1U8US",
	"play_animation": "contact_animation_play_animation__1_HDS",
	"animation_play_again": "contact_animation_animation_play_again__39zrm",
	"play_animation_again": "contact_animation_play_animation_again__2DnhS"
};

/***/ }),

/***/ "./components/png_sequence_animation/png_secuence_animation.js":
/*!*********************************************************************!*\
  !*** ./components/png_sequence_animation/png_secuence_animation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PngSecuenceAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/franco-gonzalez-landing-page/components/png_sequence_animation/png_secuence_animation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PngSecuenceAnimation(props) {
  const {
    0: playAnimation,
    1: setPlayAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: playAgainAnimation,
    1: setPlayAgainAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const defaultStyle = props.styles.animation;
  const animationStyle1 = props.styles.animation_play;
  const animationStyle2 = props.styles.animation_play_again;

  function playAnimationOneTime() {
    setPlayAnimation(true);
    setPlayAgainAnimation(!playAgainAnimation);
  }

  function getStyle() {
    return playAnimation ? getStyleAgain() : defaultStyle;
  }

  function getStyleAgain() {
    if (playAgainAnimation) {
      return animationStyle1;
    } else {
      return animationStyle2;
    }
  }

  return __jsx("div", {
    onClick: () => playAnimationOneTime(),
    className: getStyle(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  });
}

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
//# sourceMappingURL=0.js.map
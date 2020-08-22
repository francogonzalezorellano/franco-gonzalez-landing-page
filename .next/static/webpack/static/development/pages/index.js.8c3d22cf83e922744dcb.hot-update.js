webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/background.js":
/*!***************************************!*\
  !*** ./components/home/background.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _background_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.module.css */ "./components/home/background.module.css");
/* harmony import */ var _background_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_background_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-parallax-mousemove */ "./node_modules/react-parallax-mousemove/build/index.js");
/* harmony import */ var react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/background.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Background() {
  var style = {
    outter: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      marginLeft: 'auto',
      marginRigth: 'auto'
    },
    infoLayerStyle: {
      position: 'relative'
    },
    bgLayerStyle: {
      position: 'absolute',
      height: '100%'
    }
  };
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a, {
    containerStyle: style.outter,
    fullHeight: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: -0.03,
      yFactor: 0.03,
      springSettings: {
        stiffness: 50,
        damping: 50
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.shadow,
    src: "/background_parallax/shadow.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: 0.03,
      yFactor: -0.03,
      springSettings: {
        stiffness: 50,
        damping: 50
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/layer_3.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: 0.06,
      yFactor: -0.03,
      springSettings: {
        stiffness: 50,
        damping: 50
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/layer_2.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })), __jsx(react_parallax_mousemove__WEBPACK_IMPORTED_MODULE_2___default.a.Layer, {
    layerStyle: style.bgLayerStyle,
    config: {
      xFactor: 0.09,
      yFactor: -0.03,
      springSettings: {
        stiffness: 50,
        damping: 50
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: _background_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.img_style,
    src: "/background_parallax/layer_1.png",
    alt: "Parallax Layer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }))));
}

/***/ }),

/***/ "./components/home/background.module.css":
/*!***********************************************!*\
  !*** ./components/home/background.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./background.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/background.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./background.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/background.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./background.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/background.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/home/home.js":
/*!*********************************!*\
  !*** ./components/home/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module.css */ "./components/home/home.module.css");
/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.js */ "./components/home/background.js");
var _jsxFileName = "/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home(_ref) {
  var children = _ref.children,
      home = _ref.home;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_regular,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "I,m "), __jsx("h1", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Franco"), __jsx("h1", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_bold,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Gonzalez"), __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title_regular,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, " .")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Motion graphics designer and"), __jsx("h2", {
    className: _home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "web developer."))), __jsx(_background_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/home/background.module.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/home/background.module.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".background_contenedor_img__2o8qQ{\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.background_img_style__AI4j_{\n    max-height: 100vh;\n    max-width: 100%;\n}\n\n.background_shadow__2VsQV{\n    max-height: 100vh;\n    max-width: 100%;\n    mix-blend-mode: multiply;\n    opacity: 40%;\n}\n\n.background_contenedor_bg__1HhY-{\n    display: flex;\n    justify-items: center;\n}\n\n.background_div_background_image__18xD6{\n    background-image: url(\"/background_parallax/layer_3.png\"); /* The image used */\n    background-color: #cccccc; /* Used if the image is unavailable */\n    height: 500px; /* You must set a specified height */\n    background-position: center; /* Center the image */\n    background-repeat: no-repeat; /* Do not repeat the image */\n    background-size: cover; /* Resize the background image to cover the entire container */\n}", "",{"version":3,"sources":["/Users/francogonzalez/Documents/Trabajo/my-landing-page/components/home/background.module.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,yDAAyD,EAAE,mBAAmB;IAC9E,yBAAyB,EAAE,qCAAqC;IAChE,aAAa,EAAE,oCAAoC;IACnD,2BAA2B,EAAE,qBAAqB;IAClD,4BAA4B,EAAE,4BAA4B;IAC1D,sBAAsB,EAAE,8DAA8D;AAC1F","file":"background.module.css","sourcesContent":[".contenedor_img{\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.img_style{\n    max-height: 100vh;\n    max-width: 100%;\n}\n\n.shadow{\n    max-height: 100vh;\n    max-width: 100%;\n    mix-blend-mode: multiply;\n    opacity: 40%;\n}\n\n.contenedor_bg{\n    display: flex;\n    justify-items: center;\n}\n\n.div_background_image{\n    background-image: url(\"/background_parallax/layer_3.png\"); /* The image used */\n    background-color: #cccccc; /* Used if the image is unavailable */\n    height: 500px; /* You must set a specified height */\n    background-position: center; /* Center the image */\n    background-repeat: no-repeat; /* Do not repeat the image */\n    background-size: cover; /* Resize the background image to cover the entire container */\n}"]}]);
// Exports
exports.locals = {
	"contenedor_img": "background_contenedor_img__2o8qQ",
	"img_style": "background_img_style__AI4j_",
	"shadow": "background_shadow__2VsQV",
	"contenedor_bg": "background_contenedor_bg__1HhY-",
	"div_background_image": "background_div_background_image__18xD6"
};

/***/ }),

/***/ "./node_modules/react-parallax-mousemove/build/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-parallax-mousemove/build/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js"));else { var r, n; }}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=14)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){m&&d&&(m=!1,d.length?y=d.concat(y):h=-1,y.length&&u())}function u(){if(!m){var e=o(i);m=!0;for(var t=y.length;t;){for(d=y,y=[];++h<t;)d&&d[h].run();h=-1,t=y.length}d=null,m=!1,a(e)}}function l(e,t){this.fun=e,this.array=t}function s(){}var c,f,p=e.exports={};!function(){try{c="function"===typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"===typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,y=[],m=!1,h=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new l(e,t)),1!==y.length||m||o(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"===typeof e[n]?e[n]:e[n].val);return t}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e,t,n,r,a,i,u){var l=-a*(t-r),s=-i*n,c=l+s,f=n+c*e,p=t+f*e;return Math.abs(f)<u&&Math.abs(p-r)<u?(o[0]=r,o[1]=0,o):(o[0]=p,o[1]=f,o)}t.__esModule=!0,t.default=r;var o=[0,0];e.exports=t.default},function(e,t,n){(function(t){(function(){var n,r,o;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n()):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(0))},function(e,t,n){(function(t){for(var r=n(18),o="undefined"===typeof window?t:window,a=["moz","webkit"],i="AnimationFrame",u=o["request"+i],l=o["cancel"+i]||o["cancelRequest"+i],s=0;!u&&s<a.length;s++)u=o[a[s]+"Request"+i],l=o[a[s]+"Cancel"+i]||o[a[s]+"CancelRequest"+i];if(!u||!l){var c=0,f=0,p=[];u=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},l=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return u.call(o,e)},e.exports.cancel=function(){l.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=u,e.cancelAnimationFrame=l}}).call(t,n(17))},function(e,t,n){"use strict";function r(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var o="number"===typeof t[r]?t[r]:t[r].val;if(e[r]!==o)return!1}return!0}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r};e.exports=n(19)(o,!0)}else e.exports=n(22)()}).call(t,n(0))},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){function n(e,t,n,o,a,i,u,l){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,o,a,i,u,l],f=0;s=new Error(t.replace(/%s/g,function(){return c[f++]})),s.name="Invariant Violation"}throw s.framesToPop=1,s}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";(function(t){var r=n(9),o=r;if("production"!==t.env.NODE_ENV){var a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!==typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];a.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(0))},function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),u=n.n(i),l=n(15),s=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return f.call(n),n.state={isReady:!1},n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.setState({isReady:!0}),window.addEventListener("resize",this.adjustContainer,!1)}},{key:"render",value:function(){var e=this.props.children;return this.state.isReady?(this.props.fullHeight&&(this.props.containerStyle.height=window.innerHeight),u.a.createElement("div",{ref:"container",style:this.props.containerStyle}," ",e," ")):u.a.createElement("div",null,"Parallax hover is not yet ready.")}}]),t}(u.a.Component);c.Layer=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.updatePosition=function(e){n.resizeTimeout||(n.resizeTimeout=setTimeout(function(){n.resizeTimeout=null;var t=n.config.xFactor,r=n.config.yFactor,o=r*(e.view.innerHeight/2-e.clientY),a=t*(e.view.innerWidth/2-e.clientX);n.setState({toStyle:{bottom:Object(l.spring)(o,n.config.springSettings),left:Object(l.spring)(a,n.config.springSettings)}})},75))},n.resizeTimeout=!1,n.config=n.props.config,n.state={toStyle:{bottom:0,left:0}},n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){window.addEventListener("mousemove",this.updatePosition,!1)}},{key:"render",value:function(){var e=this,t=this.props.children;return u.a.createElement(l.Motion,{defaultStyle:this.props.layerStyle,style:this.state.toStyle},function(n){return u.a.createElement("div",{ref:"layer",style:Object.assign({},n,e.props.layerStyle)},t)})}}]),t}(u.a.Component);var f=function(){var e=this;this.adjustContainer=function(t){e.setState({height:Object(l.spring)(t.currentTarget.innerHeight)})}};t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var o=n(16);t.Motion=r(o);var a=n(23);t.StaggeredMotion=r(a);var i=n(24);t.TransitionMotion=r(i);var u=n(26);t.spring=r(u);var l=n(13);t.presets=r(l);var s=n(2);t.stripStyle=r(s);var c=n(27);t.reorderKeys=r(c)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(3),s=r(l),c=n(2),f=r(c),p=n(4),d=r(p),y=n(5),m=r(y),h=n(6),v=r(h),b=n(7),g=r(b),w=n(1),O=r(w),S=n(8),T=r(S),P=1e3/60,j=function(e){function t(n){var r=this;o(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=r.state,o=n.currentStyle,a=n.currentVelocity,u=n.lastIdealStyle,l=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"===typeof c&&(t||(t=!0,o=i({},o),a=i({},a),u=i({},u),l=i({},l)),o[s]=c,a[s]=0,u[s]=c,l[s]=0)}t&&r.setState({currentStyle:o,currentVelocity:a,lastIdealStyle:u,lastIdealVelocity:l})},this.startAnimationIfNecessary=function(){r.animationID=v.default(function(e){var t=r.props.style;if(g.default(r.state.currentStyle,t,r.state.currentVelocity))return r.wasAnimating&&r.props.onRest&&r.props.onRest(),r.animationID=null,r.wasAnimating=!1,void(r.accumulatedTime=0);r.wasAnimating=!0;var n=e||m.default(),o=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+o,r.accumulatedTime>10*P&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();var a=(r.accumulatedTime-Math.floor(r.accumulatedTime/P)*P)/P,i=Math.floor(r.accumulatedTime/P),u={},l={},s={},c={};for(var f in t)if(Object.prototype.hasOwnProperty.call(t,f)){var p=t[f];if("number"===typeof p)s[f]=p,c[f]=0,u[f]=p,l[f]=0;else{for(var y=r.state.lastIdealStyle[f],h=r.state.lastIdealVelocity[f],v=0;v<i;v++){var b=d.default(P/1e3,y,h,p.val,p.stiffness,p.damping,p.precision);y=b[0],h=b[1]}var w=d.default(P/1e3,y,h,p.val,p.stiffness,p.damping,p.precision),O=w[0],S=w[1];s[f]=y+(O-y)*a,c[f]=h+(S-h)*a,u[f]=y,l[f]=h}}r.animationID=null,r.accumulatedTime-=i*P,r.setState({currentStyle:s,currentVelocity:c,lastIdealStyle:u,lastIdealVelocity:l}),r.unreadPropStyle=null,r.startAnimationIfNecessary()})},this.state=this.defaultState()}return a(t,e),u(t,null,[{key:"propTypes",value:{defaultStyle:T.default.objectOf(T.default.number),style:T.default.objectOf(T.default.oneOfType([T.default.number,T.default.object])).isRequired,children:T.default.func.isRequired,onRest:T.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||f.default(n),o=s.default(r);return{currentStyle:r,currentVelocity:o,lastIdealStyle:r,lastIdealVelocity:o}},t.prototype.componentDidMount=function(){this.prevTime=m.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=m.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(v.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&O.default.Children.only(e)},t}(O.default.Component);t.default=j,e.exports=t.default},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(t){(function(){var n,r,o,a,i,u;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},a=n(),u=1e9*t.uptime(),i=a-u):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(9),o=n(10),a=n(12),i=n(20),u=n(11),l=n(21);e.exports=function(e,n){function s(e){var t=e&&(_&&e[_]||e[k]);if("function"===typeof t)return t}function c(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function p(e){function r(r,s,c,p,d,y,m){if(p=p||x,y=y||c,m!==u)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!==typeof console){var h=p+":"+c;!i[h]&&l<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,p),i[h]=!0,l++)}return null==s[c]?r?new f(null===s[c]?"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(s,c,p,d,y)}if("production"!==t.env.NODE_ENV)var i={},l=0;var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}function d(e){function t(t,n,r,o,a,i){var u=t[n];if(T(u)!==e)return new f("Invalid "+o+" `"+a+"` of type `"+P(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return p(t)}function y(e){function t(t,n,r,o,a){if("function"!==typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i)){return new f("Invalid "+o+" `"+a+"` of type `"+T(i)+"` supplied to `"+r+"`, expected an array.")}for(var l=0;l<i.length;l++){var s=e(i,l,r,o,a+"["+l+"]",u);if(s instanceof Error)return s}return null}return p(t)}function m(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||x;return new f("Invalid "+o+" `"+a+"` of type `"+I(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}return p(t)}function h(e){function n(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(c(i,e[u]))return null;return new f("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?p(n):("production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function v(e){function t(t,n,r,o,a){if("function"!==typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],l=T(i);if("object"!==l)return new f("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var s in i)if(i.hasOwnProperty(s)){var c=e(i,s,r,o,a+"."+s,u);if(c instanceof Error)return c}return null}return p(t)}function b(e){function n(t,n,r,o,a){for(var i=0;i<e.length;i++){if(null==(0,e[i])(t,n,r,o,a,u))return null}return new f("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var o=0;o<e.length;o++){var i=e[o];if("function"!==typeof i)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",j(i),o),r.thatReturnsNull}return p(n)}function g(e){function t(t,n,r,o,a){var i=t[n],l=T(i);if("object"!==l)return new f("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var c=e[s];if(c){var p=c(i,s,r,o,a+"."+s,u);if(p)return p}}return null}return p(t)}function w(e){function t(t,n,r,o,a){var l=t[n],s=T(l);if("object"!==s)return new f("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var c=i({},t[n],e);for(var p in c){var d=e[p];if(!d)return new f("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(l,p,r,o,a+"."+p,u);if(y)return y}return null}return p(t)}function O(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(O);if(null===t||e(t))return!0;var n=s(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!O(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!O(a[1]))return!1}return!0;default:return!1}}function S(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}function T(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":S(t,e)?"symbol":t}function P(e){if("undefined"===typeof e||null===e)return""+e;var t=T(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function j(e){var t=P(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function I(e){return e.constructor&&e.constructor.name?e.constructor.name:x}var _="function"===typeof Symbol&&Symbol.iterator,k="@@iterator",x="<<anonymous>>",E={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:function(){return p(r.thatReturnsNull)}(),arrayOf:y,element:function(){function t(t,n,r,o,a){var i=t[n];if(!e(i)){return new f("Invalid "+o+" `"+a+"` of type `"+T(i)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return p(t)}(),instanceOf:m,node:function(){function e(e,t,n,r,o){return O(e[t])?null:new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return p(e)}(),objectOf:v,oneOf:h,oneOfType:b,shape:g,exact:w};return f.prototype=Error.prototype,E.checkPropTypes=l,E.PropTypes=E,E}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,l=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var c in n)a.call(n,c)&&(l[c]=n[c]);if(o){u=o(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(l[u[f]]=n[u[f]])}}return l}},function(e,t,n){"use strict";(function(t){function r(e,n,r,l,s){if("production"!==t.env.NODE_ENV)for(var c in e)if(e.hasOwnProperty(c)){var f;try{o("function"===typeof e[c],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",l||"React class",r,c,typeof e[c]),f=e[c](n,c,l,r,null,i)}catch(e){f=e}if(a(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",l||"React class",r,c,typeof f),f instanceof Error&&!(f.message in u)){u[f.message]=!0;var p=s?s():"";a(!1,"Failed %s type: %s%s",r,f.message,null!=p?p:"")}}}if("production"!==t.env.NODE_ENV)var o=n(10),a=n(12),i=n(11),u={};e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";var r=n(9),o=n(10),a=n(11);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){for(var r=0;r<e.length;r++)if(!w.default(e[r],t[r],n[r]))return!1;return!0}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(3),c=r(s),f=n(2),p=r(f),d=n(4),y=r(d),m=n(5),h=r(m),v=n(6),b=r(v),g=n(7),w=r(g),O=n(1),S=r(O),T=n(8),P=r(T),j=1e3/60,I=function(e){function t(n){var r=this;o(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=r.state,n=t.currentStyles,o=t.currentVelocities,a=t.lastIdealStyles,i=t.lastIdealVelocities,l=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"===typeof d&&(f||(f=!0,l=!0,n[s]=u({},n[s]),o[s]=u({},o[s]),a[s]=u({},a[s]),i[s]=u({},i[s])),n[s][p]=d,o[s][p]=0,a[s][p]=d,i[s][p]=0)}}l&&r.setState({currentStyles:n,currentVelocities:o,lastIdealStyles:a,lastIdealVelocities:i})},this.startAnimationIfNecessary=function(){r.animationID=b.default(function(e){var t=r.props.styles(r.state.lastIdealStyles);if(i(r.state.currentStyles,t,r.state.currentVelocities))return r.animationID=null,void(r.accumulatedTime=0);var n=e||h.default(),o=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+o,r.accumulatedTime>10*j&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var a=(r.accumulatedTime-Math.floor(r.accumulatedTime/j)*j)/j,u=Math.floor(r.accumulatedTime/j),l=[],s=[],c=[],f=[],p=0;p<t.length;p++){var d=t[p],m={},v={},b={},g={};for(var w in d)if(Object.prototype.hasOwnProperty.call(d,w)){var O=d[w];if("number"===typeof O)m[w]=O,v[w]=0,b[w]=O,g[w]=0;else{for(var S=r.state.lastIdealStyles[p][w],T=r.state.lastIdealVelocities[p][w],P=0;P<u;P++){var I=y.default(j/1e3,S,T,O.val,O.stiffness,O.damping,O.precision);S=I[0],T=I[1]}var _=y.default(j/1e3,S,T,O.val,O.stiffness,O.damping,O.precision),k=_[0],x=_[1];m[w]=S+(k-S)*a,v[w]=T+(x-T)*a,b[w]=S,g[w]=T}}c[p]=m,f[p]=v,l[p]=b,s[p]=g}r.animationID=null,r.accumulatedTime-=u*j,r.setState({currentStyles:c,currentVelocities:f,lastIdealStyles:l,lastIdealVelocities:s}),r.unreadPropStyles=null,r.startAnimationIfNecessary()})},this.state=this.defaultState()}return a(t,e),l(t,null,[{key:"propTypes",value:{defaultStyles:P.default.arrayOf(P.default.objectOf(P.default.number)),styles:P.default.func.isRequired,children:P.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(p.default),o=r.map(function(e){return c.default(e)});return{currentStyles:r,currentVelocities:o,lastIdealStyles:r,lastIdealVelocities:o}},t.prototype.componentDidMount=function(){this.prevTime=h.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=h.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(b.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&S.default.Children.only(e)},t}(S.default.Component);t.default=I,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){var r=t;return null==r?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var o=0;o<r.length;o++)if(r[o].key===e.key)return{key:r[o].key,data:r[o].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function u(e,t,n,r){if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(r[o].key!==t[o].key)return!1;for(var o=0;o<r.length;o++)if(!P.default(e[o],t[o].style,n[o]))return!1;return!0}function l(e,t,n,r,o,a,i,u,l){for(var s=b.default(r,o,function(e,r){var o=t(r);return null==o?(n({key:r.key,data:r.data}),null):P.default(a[e],o,i[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:o}}),c=[],f=[],d=[],y=[],m=0;m<s.length;m++){for(var h=s[m],v=null,g=0;g<r.length;g++)if(r[g].key===h.key){v=g;break}if(null==v){var w=e(h);c[m]=w,d[m]=w;var O=p.default(h.style);f[m]=O,y[m]=O}else c[m]=a[v],d[m]=u[v],f[m]=i[v],y[m]=l[v]}return[s,c,f,d,y]}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(3),p=r(f),d=n(2),y=r(d),m=n(4),h=r(m),v=n(25),b=r(v),g=n(5),w=r(g),O=n(6),S=r(O),T=n(7),P=r(T),j=n(1),I=r(j),_=n(8),k=r(_),x=1e3/60,E=function(e){function t(n){var r=this;o(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=l(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,e,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),n=t[0],o=t[1],a=t[2],i=t[3],u=t[4],c=0;c<e.length;c++){var f=e[c].style,p=!1;for(var d in f)if(Object.prototype.hasOwnProperty.call(f,d)){var y=f[d];"number"===typeof y&&(p||(p=!0,o[c]=s({},o[c]),a[c]=s({},a[c]),i[c]=s({},i[c]),u[c]=s({},u[c]),n[c]={key:n[c].key,data:n[c].data,style:s({},n[c].style)}),o[c][d]=y,a[c][d]=0,i[c][d]=y,u[c][d]=0,n[c].style[d]=y)}}r.setState({currentStyles:o,currentVelocities:a,mergedPropsStyles:n,lastIdealStyles:i,lastIdealVelocities:u})},this.startAnimationIfNecessary=function(){r.unmounting||(r.animationID=S.default(function(e){if(!r.unmounting){var t=r.props.styles,n="function"===typeof t?t(i(r.state.mergedPropsStyles,r.unreadPropStyles,r.state.lastIdealStyles)):t;if(u(r.state.currentStyles,n,r.state.currentVelocities,r.state.mergedPropsStyles))return r.animationID=null,void(r.accumulatedTime=0);var o=e||w.default(),a=o-r.prevTime;if(r.prevTime=o,r.accumulatedTime=r.accumulatedTime+a,r.accumulatedTime>10*x&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var s=(r.accumulatedTime-Math.floor(r.accumulatedTime/x)*x)/x,c=Math.floor(r.accumulatedTime/x),f=l(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,n,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),p=f[0],d=f[1],y=f[2],m=f[3],v=f[4],b=0;b<p.length;b++){var g=p[b].style,O={},S={},T={},P={};for(var j in g)if(Object.prototype.hasOwnProperty.call(g,j)){var I=g[j];if("number"===typeof I)O[j]=I,S[j]=0,T[j]=I,P[j]=0;else{for(var _=m[b][j],k=v[b][j],E=0;E<c;E++){var D=h.default(x/1e3,_,k,I.val,I.stiffness,I.damping,I.precision);_=D[0],k=D[1]}var N=h.default(x/1e3,_,k,I.val,I.stiffness,I.damping,I.precision),R=N[0],V=N[1];O[j]=_+(R-_)*s,S[j]=k+(V-k)*s,T[j]=_,P[j]=k}}m[b]=T,v[b]=P,d[b]=O,y[b]=S}r.animationID=null,r.accumulatedTime-=c*x,r.setState({currentStyles:d,currentVelocities:y,lastIdealStyles:m,lastIdealVelocities:v,mergedPropsStyles:p}),r.unreadPropStyles=null,r.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return a(t,e),c(t,null,[{key:"propTypes",value:{defaultStyles:k.default.arrayOf(k.default.shape({key:k.default.string.isRequired,data:k.default.any,style:k.default.objectOf(k.default.number).isRequired})),styles:k.default.oneOfType([k.default.func,k.default.arrayOf(k.default.shape({key:k.default.string.isRequired,data:k.default.any,style:k.default.objectOf(k.default.oneOfType([k.default.number,k.default.object])).isRequired}))]).isRequired,children:k.default.func.isRequired,willEnter:k.default.func,willLeave:k.default.func,didLeave:k.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return y.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,o=e.willLeave,a=e.didLeave,i="function"===typeof n?n(t):n,u=void 0;u=null==t?i:t.map(function(e){for(var t=0;t<i.length;t++)if(i[t].key===e.key)return i[t];return e});var s=null==t?i.map(function(e){return y.default(e.style)}):t.map(function(e){return y.default(e.style)}),c=null==t?i.map(function(e){return p.default(e.style)}):t.map(function(e){return p.default(e.style)}),f=l(r,o,a,u,i,s,c,s,c),d=f[0];return{currentStyles:f[1],currentVelocities:f[2],lastIdealStyles:f[3],lastIdealVelocities:f[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=w.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"===typeof t?t(i(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=w.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(S.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=i(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&I.default.Children.only(t)},t}(I.default.Component);t.default=E,e.exports=t.default},function(e,t,n){"use strict";function r(e,t,n){for(var r={},o=0;o<e.length;o++)r[e[o].key]=o;for(var a={},o=0;o<t.length;o++)a[t[o].key]=o;for(var i=[],o=0;o<t.length;o++)i[o]=t[o];for(var o=0;o<e.length;o++)if(!Object.prototype.hasOwnProperty.call(a,e[o].key)){var u=n(o,e[o]);null!=u&&i.push(u)}return i.sort(function(e,n){var o=a[e.key],i=a[n.key],u=r[e.key],l=r[n.key];if(null!=o&&null!=i)return a[e.key]-a[n.key];if(null!=u&&null!=l)return r[e.key]-r[n.key];if(null!=o){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(o<a[c]&&l>r[c])return-1;if(o>a[c]&&l<r[c])return 1}}return 1}for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(i<a[c]&&u>r[c])return 1;if(i>a[c]&&u<r[c])return-1}}return-1})}t.__esModule=!0,t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e,t){return o({},u,t,{val:e})}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r;var a=n(13),i=function(e){return e&&e.__esModule?e:{default:e}}(a),u=o({},i.default.noWobble,{precision:.01});e.exports=t.default},function(e,t,n){"use strict";(function(n){function r(){"development"===n.env.NODE_ENV&&(o||(o=!0,console.error("`reorderKeys` has been removed, since it is no longer needed for TransitionMotion's new styles array API.")))}t.__esModule=!0,t.default=r;var o=!1;e.exports=t.default}).call(t,n(0))}])});

/***/ })

})
//# sourceMappingURL=index.js.8c3d22cf83e922744dcb.hot-update.js.map
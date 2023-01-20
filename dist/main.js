/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/image1.jpg */ "./src/images/image1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Remove default margin */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul,\r\nol {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Set core root defaults */\r\nhtml:focus-within {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n   scroll-behavior: auto;\r\n  }\r\n  \r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n\r\n/* multiple used class */\r\n\r\n#content{\r\n\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: relative;\r\n\r\n}\r\n#content::before{\r\n\r\n  content: ' ';\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  z-index: -1;\r\n\r\n}\r\n.container{\r\n\r\n  padding: 3% 8%;\r\n  display: relative;\r\n\r\n}\r\n.flex{\r\n\r\n  display: flex;\r\n\r\n}\r\n.text-Inside-Image{\r\n\r\n  text-shadow: 0px 0px 6px black;\r\n\r\n}\r\n.logo{\r\n\r\n  width: 20px;\r\n  height: 20px;\r\n\r\n}\r\n.absolute{\r\n\r\n  position:relative;\r\n  top: 27vh;\r\n  left: 50%;\r\n  height: 100%;\r\n  transform: translate(-50%, -50%);\r\n\r\n}\r\n\r\n/* basic use */\r\n\r\nbody{\r\n\r\n  font-family: Roboto, serif;\r\n\r\n}\r\nli{\r\n\r\n  cursor:pointer;\r\n\r\n}\r\n\r\nli:hover{\r\n\r\n  color: rgba(255, 255, 255, .8);\r\n\r\n}\r\nli:active{\r\n\r\n  color: rgba(255, 255, 255, .1);\r\n\r\n}\r\nfooter{\r\n  bottom: 0em;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 2%;\r\n  transform: translateY(-50%);\r\n  text-align: center;\r\n  color: rgba(255, 255, 255, .9);\r\n  padding-block: 2em .5em;\r\n\r\n}\r\n\r\n/* classes and id */\r\n\r\nnav{\r\n\r\n  position: fixed;\r\n  width: 85%;\r\n  z-index: 2;\r\n\r\n}\r\nnav ul{\r\n\r\n  font-size: 1.3em;\r\n  gap: 3em;\r\n  justify-content: right;\r\n  color: white;\r\n\r\n}\r\nnav ul li{\r\n\r\n  padding: .5em;\r\n  transition: .2s ease-in-out;\r\n\r\n}\r\n\r\nnav ul li:hover{\r\n\r\n  outline: 2px solid white;\r\n\r\n}\r\n\r\n#homePageDiv{\r\n\r\n  font-family: 'Libre Baskerville';\r\n\r\n}\r\n\r\n.resturent-name{\r\n\r\n  color: white;\r\n  font-size: 3.8em;\r\n  font-weight: 400;\r\n  word-spacing: .5em;\r\n  text-align: center;\r\n\r\n}\r\n\r\n.resturent-slogan{\r\n\r\n  font-size: 2.3em;\r\n  color: white;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  word-spacing: .07em;\r\n  margin-top: .8em;\r\n  font-family: 'Dancing Script';\r\n\r\n}\r\n.logos li{\r\n\r\n  margin-top: 1.5em;\r\n  padding: .4em .5em .2em .5em;\r\n  border-radius: 100%;\r\n  background-color: white;\r\n  transition: .4s ease-in-out;\r\n\r\n}\r\n.logos li:hover{\r\n\r\n  background-color: rgba(255, 255, 255, .8);\r\n  outline: 2px solid white;\r\n  outline-offset: 5px;\r\n\r\n}\r\n.logos li:active{\r\n\r\n  background-color: rgba(255, 255, 255, .1);\r\n\r\n}\r\n#menuH1{\r\n\r\n  color: white;\r\n  font-size: 3em;\r\n\r\n}\r\n#menuP{\r\n\r\n  color: white;\r\n  font-size: 1.4em;\r\n\r\n}\r\n#menuPageDiv{\r\n\r\n  color: white;\r\n  text-align: center;\r\n  padding-bottom: 10em;\r\n\r\n}\r\n#menuPageDiv h1{\r\n\r\n  font-size: 3em;\r\n  font-weight: 400;\r\n  padding-top: 2em;\r\n\r\n}\r\n#menuPageDiv h4{\r\n\r\n  margin-top: .6em;\r\n\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;AACjB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;GACC,qBAAqB;EACtB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;;AAEA,wBAAwB;;AAExB;;IAEI,YAAY;IACZ,aAAa;IACb,iBAAiB;;AAErB;AACA;;EAEE,YAAY;EACZ,yDAA4C;EAC5C,eAAe;EACf,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,2BAA2B;EAC3B,WAAW;;AAEb;AACA;;EAEE,cAAc;EACd,iBAAiB;;AAEnB;AACA;;EAEE,aAAa;;AAEf;AACA;;EAEE,8BAA8B;;AAEhC;AACA;;EAEE,WAAW;EACX,YAAY;;AAEd;AACA;;EAEE,iBAAiB;EACjB,SAAS;EACT,SAAS;EACT,YAAY;EACZ,gCAAgC;;AAElC;;AAEA,cAAc;;AAEd;;EAEE,0BAA0B;;AAE5B;AACA;;EAEE,cAAc;;AAEhB;;AAEA;;EAEE,8BAA8B;;AAEhC;AACA;;EAEE,8BAA8B;;AAEhC;AACA;EACE,WAAW;EACX,eAAe;EACf,QAAQ;EACR,QAAQ;EACR,2BAA2B;EAC3B,kBAAkB;EAClB,8BAA8B;EAC9B,uBAAuB;;AAEzB;;AAEA,mBAAmB;;AAEnB;;EAEE,eAAe;EACf,UAAU;EACV,UAAU;;AAEZ;AACA;;EAEE,gBAAgB;EAChB,QAAQ;EACR,sBAAsB;EACtB,YAAY;;AAEd;AACA;;EAEE,aAAa;EACb,2BAA2B;;AAE7B;;AAEA;;EAEE,wBAAwB;;AAE1B;;AAEA;;EAEE,gCAAgC;;AAElC;;AAEA;;EAEE,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;;AAEpB;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,6BAA6B;;AAE/B;AACA;;EAEE,iBAAiB;EACjB,4BAA4B;EAC5B,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;;AAE7B;AACA;;EAEE,yCAAyC;EACzC,wBAAwB;EACxB,mBAAmB;;AAErB;AACA;;EAEE,yCAAyC;;AAE3C;AACA;;EAEE,YAAY;EACZ,cAAc;;AAEhB;AACA;;EAEE,YAAY;EACZ,gBAAgB;;AAElB;AACA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;;AAEtB;AACA;;EAEE,cAAc;EACd,gBAAgB;EAChB,gBAAgB;;AAElB;AACA;;EAEE,gBAAgB;;AAElB","sourcesContent":["/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Remove default margin */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul,\r\nol {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Set core root defaults */\r\nhtml:focus-within {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n   scroll-behavior: auto;\r\n  }\r\n  \r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n\r\n/* multiple used class */\r\n\r\n#content{\r\n\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: relative;\r\n\r\n}\r\n#content::before{\r\n\r\n  content: ' ';\r\n  background-image: url('./images/image1.jpg');\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  z-index: -1;\r\n\r\n}\r\n.container{\r\n\r\n  padding: 3% 8%;\r\n  display: relative;\r\n\r\n}\r\n.flex{\r\n\r\n  display: flex;\r\n\r\n}\r\n.text-Inside-Image{\r\n\r\n  text-shadow: 0px 0px 6px black;\r\n\r\n}\r\n.logo{\r\n\r\n  width: 20px;\r\n  height: 20px;\r\n\r\n}\r\n.absolute{\r\n\r\n  position:relative;\r\n  top: 27vh;\r\n  left: 50%;\r\n  height: 100%;\r\n  transform: translate(-50%, -50%);\r\n\r\n}\r\n\r\n/* basic use */\r\n\r\nbody{\r\n\r\n  font-family: Roboto, serif;\r\n\r\n}\r\nli{\r\n\r\n  cursor:pointer;\r\n\r\n}\r\n\r\nli:hover{\r\n\r\n  color: rgba(255, 255, 255, .8);\r\n\r\n}\r\nli:active{\r\n\r\n  color: rgba(255, 255, 255, .1);\r\n\r\n}\r\nfooter{\r\n  bottom: 0em;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 2%;\r\n  transform: translateY(-50%);\r\n  text-align: center;\r\n  color: rgba(255, 255, 255, .9);\r\n  padding-block: 2em .5em;\r\n\r\n}\r\n\r\n/* classes and id */\r\n\r\nnav{\r\n\r\n  position: fixed;\r\n  width: 85%;\r\n  z-index: 2;\r\n\r\n}\r\nnav ul{\r\n\r\n  font-size: 1.3em;\r\n  gap: 3em;\r\n  justify-content: right;\r\n  color: white;\r\n\r\n}\r\nnav ul li{\r\n\r\n  padding: .5em;\r\n  transition: .2s ease-in-out;\r\n\r\n}\r\n\r\nnav ul li:hover{\r\n\r\n  outline: 2px solid white;\r\n\r\n}\r\n\r\n#homePageDiv{\r\n\r\n  font-family: 'Libre Baskerville';\r\n\r\n}\r\n\r\n.resturent-name{\r\n\r\n  color: white;\r\n  font-size: 3.8em;\r\n  font-weight: 400;\r\n  word-spacing: .5em;\r\n  text-align: center;\r\n\r\n}\r\n\r\n.resturent-slogan{\r\n\r\n  font-size: 2.3em;\r\n  color: white;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  word-spacing: .07em;\r\n  margin-top: .8em;\r\n  font-family: 'Dancing Script';\r\n\r\n}\r\n.logos li{\r\n\r\n  margin-top: 1.5em;\r\n  padding: .4em .5em .2em .5em;\r\n  border-radius: 100%;\r\n  background-color: white;\r\n  transition: .4s ease-in-out;\r\n\r\n}\r\n.logos li:hover{\r\n\r\n  background-color: rgba(255, 255, 255, .8);\r\n  outline: 2px solid white;\r\n  outline-offset: 5px;\r\n\r\n}\r\n.logos li:active{\r\n\r\n  background-color: rgba(255, 255, 255, .1);\r\n\r\n}\r\n#menuH1{\r\n\r\n  color: white;\r\n  font-size: 3em;\r\n\r\n}\r\n#menuP{\r\n\r\n  color: white;\r\n  font-size: 1.4em;\r\n\r\n}\r\n#menuPageDiv{\r\n\r\n  color: white;\r\n  text-align: center;\r\n  padding-bottom: 10em;\r\n\r\n}\r\n#menuPageDiv h1{\r\n\r\n  font-size: 3em;\r\n  font-weight: 400;\r\n  padding-top: 2em;\r\n\r\n}\r\n#menuPageDiv h4{\r\n\r\n  margin-top: .6em;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
function about(){

    const mainDiv = document.querySelector('.container');

    const aboutPageDiv = document.createElement('div');
    aboutPageDiv.setAttribute('id','aboutPageDiv');
    aboutPageDiv.classList.add('absolute','text-Inside-Image');
    const head = document.createElement('h1');
    head.setAttribute('id','menuH1');
    head.innerHTML = 'About';

    const p = document.createElement('p');
    p.setAttribute('id','menuP');
    p.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    aboutPageDiv.appendChild(head);
    aboutPageDiv.appendChild(p);
    mainDiv.appendChild(aboutPageDiv);

}

/***/ }),

/***/ "./src/footerHeader.js":
/*!*****************************!*\
  !*** ./src/footerHeader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footerHeader)
/* harmony export */ });
/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/facebook.svg */ "./src/images/facebook.svg");
/* harmony import */ var _images_instagram_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/instagram.svg */ "./src/images/instagram.svg");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/twitter.svg */ "./src/images/twitter.svg");
/* harmony import */ var _images_gmail_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/gmail.svg */ "./src/images/gmail.svg");





function footerHeader(){

    const footer = document.createElement('footer');
    const mainDiv = document.createElement('div');
    const content = document.getElementById('content');

    // header
    mainDiv.classList.add('container');
    content.appendChild(mainDiv);

    const nav = document.createElement('nav');

    const ul = document.createElement('ul');

    const menu = document.createElement('li');
    menu.setAttribute('id','menu');
    menu.innerHTML = 'Menu';

    const home = document.createElement('li');
    home.setAttribute('id','home');
    home.innerHTML = 'Home';

    const About = document.createElement('li');
    About.setAttribute('id','about');
    About.innerHTML = 'About';

    mainDiv.appendChild(nav);

    ul.classList.add('flex');
    ul.appendChild(menu);
    ul.appendChild(home);
    ul.appendChild(About);
    nav.appendChild(ul);

    // footer
    const footerDiv = document.createElement('div');
    footer.appendChild(footerDiv);
    content.appendChild(footer);

    const footerContainer = document.querySelector('footer');

    const logos = document.createElement('ul');
    logos.classList.add('logos');
    footerContainer.appendChild(logos);

    const facebookLi = document.createElement('li');
    facebookLi.classList.add('facebook');
    let img = document.createElement('img');
    img.classList.add('logo');
    img.src = _images_facebook_svg__WEBPACK_IMPORTED_MODULE_0__;
    facebookLi.appendChild(img);
    logos.appendChild(facebookLi);

    const twitterLi = document.createElement('li');
    twitterLi.classList.add('twitter');
    img = document.createElement('img');
    img.classList.add('logo');
    img.src = _images_twitter_svg__WEBPACK_IMPORTED_MODULE_2__;
    twitterLi.appendChild(img);
    logos.appendChild(twitterLi);

    const gmailLi = document.createElement('li');
    gmailLi.classList.add('gmail');
    img = document.createElement('img');
    img.classList.add('logo');
    img.src = _images_gmail_svg__WEBPACK_IMPORTED_MODULE_3__;
    gmailLi.appendChild(img);
    logos.appendChild(gmailLi);

    const instagramLi = document.createElement('li');
    instagramLi.classList.add('instagram');
    img = document.createElement('img');
    img.classList.add('logo');
    img.src = _images_instagram_svg__WEBPACK_IMPORTED_MODULE_1__;
    instagramLi.appendChild(img);
    logos.appendChild(instagramLi);
    
}

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu(){

    const mainDiv = document.querySelector('.container');

    const homePageDiv = document.createElement('div');
    homePageDiv.classList.add('absolute','text-Inside-Image');
    homePageDiv.setAttribute('id','homePageDiv');
    mainDiv.appendChild(homePageDiv);

    const h1 = document.createElement('h1');
    h1.innerHTML = 'THE AVIARY';
    h1.classList.add('resturent-name', 'text-Inside-Image');
    homePageDiv.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.innerHTML = 'Where every flavor tells the story of the food.';
    h2.classList.add('resturent-slogan', 'text-Inside-Image');
    homePageDiv.appendChild(h2);

}



/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu(){

    const mainDiv = document.querySelector('.container');

    const menuPageDiv = document.createElement('div');
    menuPageDiv.setAttribute('id','menuPageDiv');
    menuPageDiv.classList.add('text-Inside-Image'); 
    
    let div = document.createElement('div');
    div.setAttribute('id','firstCourse');
    div.classList.add('text-Inside-Image');

    let h1 =  document.createElement('h1');
    h1.innerHTML='FIRST COURSE';
    div.appendChild(h1);

    let h4 = document.createElement('h4');
    h4.innerHTML='BENGALI BEET CHOP';
    div.appendChild(h4);
    
    let p = document.createElement('p');
    p.innerHTML='Winter Vegetables, Potatoes, Kasundi Mayo (V)*';
    div.appendChild(p);
    
    h4 = document.createElement('h4');
    h4.innerHTML='SHRIMP KOLIWADA';
    div.appendChild(h4);
    
    p = document.createElement('p');
    p.innerHTML='Popcorn Style Fritters, Pickled Mango Sauce (GF)';
    div.appendChild(p);

    menuPageDiv.appendChild(div);


    div = document.createElement('div');
    div.setAttribute('id','mainCourse');
    div.classList.add('text-Inside-Image');

    h1 =  document.createElement('h1');
    h1.innerHTML='MAIN COURSE';
    div.appendChild(h1);

    h4 = document.createElement('h4');
    h4.innerHTML='ANDHRA VEGETABLE CURRY';
    div.appendChild(h4);
    
    p = document.createElement('p');
    p.innerHTML='Seasonal Vegetables, Gongura Leaves, Coconut (V, GF)';
    div.appendChild(p);
    
    h4 = document.createElement('h4');
    h4.innerHTML='VINDALOO BBQ PORK RIBS';
    div.appendChild(h4);
    
    p = document.createElement('p');
    p.innerHTML='Sticky Chili Glaze, Mango, Pickled Onion (GF)';
    div.appendChild(p);

    menuPageDiv.appendChild(div);

    div = document.createElement('div');
    div.setAttribute('id','dessert');
    div.classList.add('text-Inside-Image');

    h1 =  document.createElement('h1');
    h1.innerHTML='TAKEAWAY DESSERT';
    div.appendChild(h1);

    h4 = document.createElement('h4');
    h4.innerHTML='Cookie';
    div.appendChild(h4);
    
    p = document.createElement('p');
    p.innerHTML='Chocolate Dipped Pistachio Shortbread Cookies';
    div.appendChild(p);
    

    menuPageDiv.appendChild(div);

    mainDiv.appendChild(menuPageDiv);

}

/***/ }),

/***/ "./src/pageLoader.js":
/*!***************************!*\
  !*** ./src/pageLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoader)
/* harmony export */ });
function pageLoader(loadedPage){

    const menu = document.getElementById('menu');
    const home = document.getElementById('home');
    const About = document.getElementById('about');

    if(loadedPage === 'menu'){

        let menuPageDiv = document.getElementById('menuPageDiv');
        menu.style.outline = 'none';
        menuPageDiv.remove();

    }else if(loadedPage === 'home'){

        let homePageDiv = document.getElementById('homePageDiv');
        home.style.outline = 'none';
        homePageDiv.remove();

    }else{

        let aboutPageDiv = document.getElementById('aboutPageDiv');
        About.style.outline = 'none';
        aboutPageDiv.remove();

    }

}

/***/ }),

/***/ "./src/images/facebook.svg":
/*!*********************************!*\
  !*** ./src/images/facebook.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5f20b7ba3d8bea74b67.svg";

/***/ }),

/***/ "./src/images/gmail.svg":
/*!******************************!*\
  !*** ./src/images/gmail.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfabb7a624e20946dd01.svg";

/***/ }),

/***/ "./src/images/image1.jpg":
/*!*******************************!*\
  !*** ./src/images/image1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37ba7ccfb24744ab2c4a.jpg";

/***/ }),

/***/ "./src/images/instagram.svg":
/*!**********************************!*\
  !*** ./src/images/instagram.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51874212bf1259d81c7e.svg";

/***/ }),

/***/ "./src/images/twitter.svg":
/*!********************************!*\
  !*** ./src/images/twitter.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "015d0ba4302c64429742.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");
/* harmony import */ var _footerHeader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footerHeader.js */ "./src/footerHeader.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _pageLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageLoader.js */ "./src/pageLoader.js");







(0,_footerHeader_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
 
const menu = document.getElementById('menu');
const home = document.getElementById('home');
const About = document.getElementById('about');

let loadedPage = 'home';

home.style.outline = '2px solid white';

menu.addEventListener('click', function(){

    (0,_pageLoader_js__WEBPACK_IMPORTED_MODULE_5__["default"])(loadedPage);
    (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    menu.style.outline = '2px solid white';
    loadedPage = 'menu';

});

home.addEventListener('click', function(){

    (0,_pageLoader_js__WEBPACK_IMPORTED_MODULE_5__["default"])(loadedPage);
    (0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    home.style.outline = '2px solid white';
    loadedPage = 'home';

});

About.addEventListener('click', function(){

    (0,_pageLoader_js__WEBPACK_IMPORTED_MODULE_5__["default"])(loadedPage);
    (0,_about_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    About.style.outline = '2px solid white';
    loadedPage = 'about';

});




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxrR0FBa0csNkJBQTZCLEtBQUssdUhBQXVILGdCQUFnQixLQUFLLG1JQUFtSSx1QkFBdUIsZ0JBQWdCLGlCQUFpQixLQUFLLDJEQUEyRCw4QkFBOEIsS0FBSyw4Q0FBOEMsd0JBQXdCLG9DQUFvQyx1QkFBdUIsS0FBSyx1RkFBdUYscUNBQXFDLEtBQUssa0VBQWtFLHNCQUFzQixLQUFLLGdHQUFnRyxvQkFBb0IsS0FBSyxzSkFBc0oseUJBQXlCLDZCQUE2QixPQUFPLDhDQUE4Qyw4Q0FBOEMsZ0RBQWdELCtDQUErQyx5Q0FBeUMsT0FBTyxLQUFLLGtEQUFrRCx5QkFBeUIsc0JBQXNCLDBCQUEwQixTQUFTLHFCQUFxQix1QkFBdUIsd0VBQXdFLHNCQUFzQixvQkFBb0Isa0JBQWtCLDZCQUE2QixrQ0FBa0Msa0JBQWtCLFNBQVMsZUFBZSx5QkFBeUIsd0JBQXdCLFNBQVMsVUFBVSx3QkFBd0IsU0FBUyx1QkFBdUIseUNBQXlDLFNBQVMsVUFBVSxzQkFBc0IsbUJBQW1CLFNBQVMsY0FBYyw0QkFBNEIsZ0JBQWdCLGdCQUFnQixtQkFBbUIsdUNBQXVDLFNBQVMsb0NBQW9DLHFDQUFxQyxTQUFTLE9BQU8seUJBQXlCLFNBQVMsaUJBQWlCLHlDQUF5QyxTQUFTLGNBQWMseUNBQXlDLFNBQVMsV0FBVyxrQkFBa0Isc0JBQXNCLGVBQWUsZUFBZSxrQ0FBa0MseUJBQXlCLHFDQUFxQyw4QkFBOEIsU0FBUyx3Q0FBd0MsMEJBQTBCLGlCQUFpQixpQkFBaUIsU0FBUyxXQUFXLDJCQUEyQixlQUFlLDZCQUE2QixtQkFBbUIsU0FBUyxjQUFjLHdCQUF3QixrQ0FBa0MsU0FBUyx3QkFBd0IsbUNBQW1DLFNBQVMscUJBQXFCLDJDQUEyQyxTQUFTLHdCQUF3Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qix5QkFBeUIseUJBQXlCLFNBQVMsMEJBQTBCLDJCQUEyQixtQkFBbUIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsdUJBQXVCLG9DQUFvQyxTQUFTLGNBQWMsNEJBQTRCLG1DQUFtQywwQkFBMEIsOEJBQThCLGtDQUFrQyxTQUFTLG9CQUFvQixvREFBb0QsK0JBQStCLDBCQUEwQixTQUFTLHFCQUFxQixvREFBb0QsU0FBUyxZQUFZLHVCQUF1QixxQkFBcUIsU0FBUyxXQUFXLHVCQUF1Qix1QkFBdUIsU0FBUyxpQkFBaUIsdUJBQXVCLHlCQUF5QiwyQkFBMkIsU0FBUyxvQkFBb0IseUJBQXlCLHVCQUF1Qix1QkFBdUIsU0FBUyxvQkFBb0IsMkJBQTJCLFNBQVMsT0FBTyx1RkFBdUYsUUFBUSxZQUFZLE9BQU8sWUFBWSxlQUFlLFVBQVUsTUFBTSxZQUFZLE9BQU8sWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFVBQVUsT0FBTyxZQUFZLFNBQVMsVUFBVSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLGFBQWEsT0FBTyxVQUFVLFVBQVUsYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxZQUFZLEtBQUssTUFBTSxVQUFVLGFBQWEsTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLGFBQWEsTUFBTSxNQUFNLFVBQVUsV0FBVyxLQUFLLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxhQUFhLE9BQU8sV0FBVyxNQUFNLGFBQWEsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLGFBQWEsTUFBTSxNQUFNLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLGFBQWEsT0FBTyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sWUFBWSxXQUFXLFlBQVksWUFBWSxLQUFLLE1BQU0sVUFBVSxhQUFhLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLE1BQU0sWUFBWSxhQUFhLGNBQWMsTUFBTSxNQUFNLGFBQWEsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksY0FBYyxNQUFNLE1BQU0sVUFBVSxZQUFZLGNBQWMsTUFBTSxNQUFNLGFBQWEsa0ZBQWtGLDZCQUE2QixLQUFLLHVIQUF1SCxnQkFBZ0IsS0FBSyxtSUFBbUksdUJBQXVCLGdCQUFnQixpQkFBaUIsS0FBSywyREFBMkQsOEJBQThCLEtBQUssOENBQThDLHdCQUF3QixvQ0FBb0MsdUJBQXVCLEtBQUssdUZBQXVGLHFDQUFxQyxLQUFLLGtFQUFrRSxzQkFBc0IsS0FBSyxnR0FBZ0csb0JBQW9CLEtBQUssc0pBQXNKLHlCQUF5Qiw2QkFBNkIsT0FBTyw4Q0FBOEMsOENBQThDLGdEQUFnRCwrQ0FBK0MseUNBQXlDLE9BQU8sS0FBSyxrREFBa0QseUJBQXlCLHNCQUFzQiwwQkFBMEIsU0FBUyxxQkFBcUIsdUJBQXVCLG1EQUFtRCxzQkFBc0Isb0JBQW9CLGtCQUFrQiw2QkFBNkIsa0NBQWtDLGtCQUFrQixTQUFTLGVBQWUseUJBQXlCLHdCQUF3QixTQUFTLFVBQVUsd0JBQXdCLFNBQVMsdUJBQXVCLHlDQUF5QyxTQUFTLFVBQVUsc0JBQXNCLG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLGdCQUFnQixnQkFBZ0IsbUJBQW1CLHVDQUF1QyxTQUFTLG9DQUFvQyxxQ0FBcUMsU0FBUyxPQUFPLHlCQUF5QixTQUFTLGlCQUFpQix5Q0FBeUMsU0FBUyxjQUFjLHlDQUF5QyxTQUFTLFdBQVcsa0JBQWtCLHNCQUFzQixlQUFlLGVBQWUsa0NBQWtDLHlCQUF5QixxQ0FBcUMsOEJBQThCLFNBQVMsd0NBQXdDLDBCQUEwQixpQkFBaUIsaUJBQWlCLFNBQVMsV0FBVywyQkFBMkIsZUFBZSw2QkFBNkIsbUJBQW1CLFNBQVMsY0FBYyx3QkFBd0Isa0NBQWtDLFNBQVMsd0JBQXdCLG1DQUFtQyxTQUFTLHFCQUFxQiwyQ0FBMkMsU0FBUyx3QkFBd0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIseUJBQXlCLHlCQUF5QixTQUFTLDBCQUEwQiwyQkFBMkIsbUJBQW1CLHVCQUF1Qix5QkFBeUIsMEJBQTBCLHVCQUF1QixvQ0FBb0MsU0FBUyxjQUFjLDRCQUE0QixtQ0FBbUMsMEJBQTBCLDhCQUE4QixrQ0FBa0MsU0FBUyxvQkFBb0Isb0RBQW9ELCtCQUErQiwwQkFBMEIsU0FBUyxxQkFBcUIsb0RBQW9ELFNBQVMsWUFBWSx1QkFBdUIscUJBQXFCLFNBQVMsV0FBVyx1QkFBdUIsdUJBQXVCLFNBQVMsaUJBQWlCLHVCQUF1Qix5QkFBeUIsMkJBQTJCLFNBQVMsb0JBQW9CLHlCQUF5Qix1QkFBdUIsdUJBQXVCLFNBQVMsb0JBQW9CLDJCQUEyQixTQUFTLG1CQUFtQjtBQUNsdVU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkI2QztBQUNFO0FBQ0o7QUFDSjtBQUN2QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpREFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0RBQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhDQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrREFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQjtBQUNBO0FBQ1E7QUFDVjtBQUNNO0FBQ3pDO0FBQ0EsNERBQVk7QUFDWix3REFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFVO0FBQ2QsSUFBSSx3REFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFVO0FBQ2QsSUFBSSx3REFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFVO0FBQ2QsSUFBSSxxREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3RlckhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlTG9hZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9pbWFnZTEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQm94IHNpemluZyBydWxlcyAqL1xcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcclxcbmJvZHksXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxucCxcXHJcXG5maWd1cmUsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5kZCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcclxcbnVsLFxcclxcbm9sIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxyXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcclxcbmE6bm90KFtjbGFzc10pIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcclxcbmltZyxcXHJcXG5waWN0dXJlIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhLFxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxyXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXHJcXG4gIGh0bWw6Zm9jdXMtd2l0aGluIHtcXHJcXG4gICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICosXFxyXFxuICAqOjpiZWZvcmUsXFxyXFxuICAqOjphZnRlciB7XFxyXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxyXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXHJcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBtdWx0aXBsZSB1c2VkIGNsYXNzICovXFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogcmVsYXRpdmU7XFxyXFxuXFxyXFxufVxcclxcbiNjb250ZW50OjpiZWZvcmV7XFxyXFxuXFxyXFxuICBjb250ZW50OiAnICc7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcblxcclxcbn1cXHJcXG4uY29udGFpbmVye1xcclxcblxcclxcbiAgcGFkZGluZzogMyUgOCU7XFxyXFxuICBkaXNwbGF5OiByZWxhdGl2ZTtcXHJcXG5cXHJcXG59XFxyXFxuLmZsZXh7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbn1cXHJcXG4udGV4dC1JbnNpZGUtSW1hZ2V7XFxyXFxuXFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggYmxhY2s7XFxyXFxuXFxyXFxufVxcclxcbi5sb2dve1xcclxcblxcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5hYnNvbHV0ZXtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgdG9wOiAyN3ZoO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIGJhc2ljIHVzZSAqL1xcclxcblxcclxcbmJvZHl7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzZXJpZjtcXHJcXG5cXHJcXG59XFxyXFxubGl7XFxyXFxuXFxyXFxuICBjdXJzb3I6cG9pbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXJ7XFxyXFxuXFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOCk7XFxyXFxuXFxyXFxufVxcclxcbmxpOmFjdGl2ZXtcXHJcXG5cXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXHJcXG5cXHJcXG59XFxyXFxuZm9vdGVye1xcclxcbiAgYm90dG9tOiAwZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDIlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xcclxcbiAgcGFkZGluZy1ibG9jazogMmVtIC41ZW07XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIGNsYXNzZXMgYW5kIGlkICovXFxyXFxuXFxyXFxubmF2e1xcclxcblxcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxufVxcclxcbm5hdiB1bHtcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuICBnYXA6IDNlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxufVxcclxcbm5hdiB1bCBsaXtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IC41ZW07XFxyXFxuICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaTpob3ZlcntcXHJcXG5cXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVQYWdlRGl2e1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZSc7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5yZXN0dXJlbnQtbmFtZXtcXHJcXG5cXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMy44ZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgd29yZC1zcGFjaW5nOiAuNWVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucmVzdHVyZW50LXNsb2dhbntcXHJcXG5cXHJcXG4gIGZvbnQtc2l6ZTogMi4zZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd29yZC1zcGFjaW5nOiAuMDdlbTtcXHJcXG4gIG1hcmdpbi10b3A6IC44ZW07XFxyXFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JztcXHJcXG5cXHJcXG59XFxyXFxuLmxvZ29zIGxpe1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDogMS41ZW07XFxyXFxuICBwYWRkaW5nOiAuNGVtIC41ZW0gLjJlbSAuNWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbn1cXHJcXG4ubG9nb3MgbGk6aG92ZXJ7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIG91dGxpbmUtb2Zmc2V0OiA1cHg7XFxyXFxuXFxyXFxufVxcclxcbi5sb2dvcyBsaTphY3RpdmV7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcXHJcXG5cXHJcXG59XFxyXFxuI21lbnVIMXtcXHJcXG5cXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogM2VtO1xcclxcblxcclxcbn1cXHJcXG4jbWVudVB7XFxyXFxuXFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuNGVtO1xcclxcblxcclxcbn1cXHJcXG4jbWVudVBhZ2VEaXZ7XFxyXFxuXFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBlbTtcXHJcXG5cXHJcXG59XFxyXFxuI21lbnVQYWdlRGl2IGgxe1xcclxcblxcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZy10b3A6IDJlbTtcXHJcXG5cXHJcXG59XFxyXFxuI21lbnVQYWdlRGl2IGg0e1xcclxcblxcclxcbiAgbWFyZ2luLXRvcDogLjZlbTtcXHJcXG5cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQSwwQkFBMEI7QUFDMUI7Ozs7Ozs7Ozs7RUFVRSxTQUFTO0FBQ1g7O0FBRUEsMkdBQTJHO0FBQzNHOztFQUVFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQSwwREFBMEQ7QUFDMUQ7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsb0NBQW9DO0FBQ3BDOztFQUVFLGVBQWU7QUFDakI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBLGdHQUFnRztBQUNoRztFQUNFO0dBQ0MscUJBQXFCO0VBQ3RCOztFQUVBOzs7SUFHRSxxQ0FBcUM7SUFDckMsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQSx3QkFBd0I7O0FBRXhCOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCOztBQUVyQjtBQUNBOztFQUVFLFlBQVk7RUFDWix5REFBNEM7RUFDNUMsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixXQUFXOztBQUViO0FBQ0E7O0VBRUUsY0FBYztFQUNkLGlCQUFpQjs7QUFFbkI7QUFDQTs7RUFFRSxhQUFhOztBQUVmO0FBQ0E7O0VBRUUsOEJBQThCOztBQUVoQztBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZOztBQUVkO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsWUFBWTtFQUNaLGdDQUFnQzs7QUFFbEM7O0FBRUEsY0FBYzs7QUFFZDs7RUFFRSwwQkFBMEI7O0FBRTVCO0FBQ0E7O0VBRUUsY0FBYzs7QUFFaEI7O0FBRUE7O0VBRUUsOEJBQThCOztBQUVoQztBQUNBOztFQUVFLDhCQUE4Qjs7QUFFaEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsUUFBUTtFQUNSLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5Qix1QkFBdUI7O0FBRXpCOztBQUVBLG1CQUFtQjs7QUFFbkI7O0VBRUUsZUFBZTtFQUNmLFVBQVU7RUFDVixVQUFVOztBQUVaO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixzQkFBc0I7RUFDdEIsWUFBWTs7QUFFZDtBQUNBOztFQUVFLGFBQWE7RUFDYiwyQkFBMkI7O0FBRTdCOztBQUVBOztFQUVFLHdCQUF3Qjs7QUFFMUI7O0FBRUE7O0VBRUUsZ0NBQWdDOztBQUVsQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCOztBQUVwQjs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw2QkFBNkI7O0FBRS9CO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjs7QUFFN0I7QUFDQTs7RUFFRSx5Q0FBeUM7RUFDekMsd0JBQXdCO0VBQ3hCLG1CQUFtQjs7QUFFckI7QUFDQTs7RUFFRSx5Q0FBeUM7O0FBRTNDO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGNBQWM7O0FBRWhCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGdCQUFnQjs7QUFFbEI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9CQUFvQjs7QUFFdEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7QUFFbEI7QUFDQTs7RUFFRSxnQkFBZ0I7O0FBRWxCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXHJcXG5ib2R5LFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbnAsXFxyXFxuZmlndXJlLFxcclxcbmJsb2NrcXVvdGUsXFxyXFxuZGwsXFxyXFxuZGQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXHJcXG51bCxcXHJcXG5vbCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xcclxcbmh0bWw6Zm9jdXMtd2l0aGluIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXHJcXG5hOm5vdChbY2xhc3NdKSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXHJcXG5pbWcsXFxyXFxucGljdHVyZSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcclxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxyXFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxyXFxuICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAqLFxcclxcbiAgKjo6YmVmb3JlLFxcclxcbiAgKjo6YWZ0ZXIge1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogbXVsdGlwbGUgdXNlZCBjbGFzcyAqL1xcclxcblxcclxcbiNjb250ZW50e1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xcclxcblxcclxcbn1cXHJcXG4jY29udGVudDo6YmVmb3Jle1xcclxcblxcclxcbiAgY29udGVudDogJyAnO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9pbWFnZTEuanBnJyk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuXFxyXFxufVxcclxcbi5jb250YWluZXJ7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAzJSA4JTtcXHJcXG4gIGRpc3BsYXk6IHJlbGF0aXZlO1xcclxcblxcclxcbn1cXHJcXG4uZmxleHtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxufVxcclxcbi50ZXh0LUluc2lkZS1JbWFnZXtcXHJcXG5cXHJcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjaztcXHJcXG5cXHJcXG59XFxyXFxuLmxvZ297XFxyXFxuXFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuLmFic29sdXRle1xcclxcblxcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICB0b3A6IDI3dmg7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogYmFzaWMgdXNlICovXFxyXFxuXFxyXFxuYm9keXtcXHJcXG5cXHJcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNlcmlmO1xcclxcblxcclxcbn1cXHJcXG5saXtcXHJcXG5cXHJcXG4gIGN1cnNvcjpwb2ludGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlcntcXHJcXG5cXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTtcXHJcXG5cXHJcXG59XFxyXFxubGk6YWN0aXZle1xcclxcblxcclxcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcclxcblxcclxcbn1cXHJcXG5mb290ZXJ7XFxyXFxuICBib3R0b206IDBlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogMiU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuOSk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAyZW0gLjVlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogY2xhc3NlcyBhbmQgaWQgKi9cXHJcXG5cXHJcXG5uYXZ7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG5cXHJcXG59XFxyXFxubmF2IHVse1xcclxcblxcclxcbiAgZm9udC1zaXplOiAxLjNlbTtcXHJcXG4gIGdhcDogM2VtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG59XFxyXFxubmF2IHVsIGxpe1xcclxcblxcclxcbiAgcGFkZGluZzogLjVlbTtcXHJcXG4gIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpOmhvdmVye1xcclxcblxcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHdoaXRlO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jaG9tZVBhZ2VEaXZ7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogJ0xpYnJlIEJhc2tlcnZpbGxlJztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnJlc3R1cmVudC1uYW1le1xcclxcblxcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAzLjhlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB3b3JkLXNwYWNpbmc6IC41ZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5yZXN0dXJlbnQtc2xvZ2Fue1xcclxcblxcclxcbiAgZm9udC1zaXplOiAyLjNlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3b3JkLXNwYWNpbmc6IC4wN2VtO1xcclxcbiAgbWFyZ2luLXRvcDogLjhlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnO1xcclxcblxcclxcbn1cXHJcXG4ubG9nb3MgbGl7XFxyXFxuXFxyXFxuICBtYXJnaW4tdG9wOiAxLjVlbTtcXHJcXG4gIHBhZGRpbmc6IC40ZW0gLjVlbSAuMmVtIC41ZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxufVxcclxcbi5sb2dvcyBsaTpob3ZlcntcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgb3V0bGluZS1vZmZzZXQ6IDVweDtcXHJcXG5cXHJcXG59XFxyXFxuLmxvZ29zIGxpOmFjdGl2ZXtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjEpO1xcclxcblxcclxcbn1cXHJcXG4jbWVudUgxe1xcclxcblxcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAzZW07XFxyXFxuXFxyXFxufVxcclxcbiNtZW51UHtcXHJcXG5cXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuXFxyXFxufVxcclxcbiNtZW51UGFnZURpdntcXHJcXG5cXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMGVtO1xcclxcblxcclxcbn1cXHJcXG4jbWVudVBhZ2VEaXYgaDF7XFxyXFxuXFxyXFxuICBmb250LXNpemU6IDNlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBwYWRkaW5nLXRvcDogMmVtO1xcclxcblxcclxcbn1cXHJcXG4jbWVudVBhZ2VEaXYgaDR7XFxyXFxuXFxyXFxuICBtYXJnaW4tdG9wOiAuNmVtO1xcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKXtcclxuXHJcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGFib3V0UGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRQYWdlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdhYm91dFBhZ2VEaXYnKTtcclxuICAgIGFib3V0UGFnZURpdi5jbGFzc0xpc3QuYWRkKCdhYnNvbHV0ZScsJ3RleHQtSW5zaWRlLUltYWdlJyk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGhlYWQuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnVIMScpO1xyXG4gICAgaGVhZC5pbm5lckhUTUwgPSAnQWJvdXQnO1xyXG5cclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51UCcpO1xyXG4gICAgcC5pbm5lckhUTUwgPSBcIkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cIjtcclxuXHJcbiAgICBhYm91dFBhZ2VEaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBhYm91dFBhZ2VEaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGFib3V0UGFnZURpdik7XHJcblxyXG59IiwiaW1wb3J0IGZhY2Vib29rIGZyb20gJy4vaW1hZ2VzL2ZhY2Vib29rLnN2Zyc7XHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnLi9pbWFnZXMvaW5zdGFncmFtLnN2Zyc7XHJcbmltcG9ydCB0d2l0dGVyIGZyb20gJy4vaW1hZ2VzL3R3aXR0ZXIuc3ZnJztcclxuaW1wb3J0IGdtYWlsIGZyb20gJy4vaW1hZ2VzL2dtYWlsLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb290ZXJIZWFkZXIoKXtcclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICAgIC8vIGhlYWRlclxyXG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkRpdik7XHJcblxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcblxyXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudScpO1xyXG4gICAgbWVudS5pbm5lckhUTUwgPSAnTWVudSc7XHJcblxyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCdob21lJyk7XHJcbiAgICBob21lLmlubmVySFRNTCA9ICdIb21lJztcclxuXHJcbiAgICBjb25zdCBBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBBYm91dC5zZXRBdHRyaWJ1dGUoJ2lkJywnYWJvdXQnKTtcclxuICAgIEFib3V0LmlubmVySFRNTCA9ICdBYm91dCc7XHJcblxyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChuYXYpO1xyXG5cclxuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcclxuICAgIHVsLmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgdWwuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgICB1bC5hcHBlbmRDaGlsZChBYm91dCk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICAgIC8vIGZvb3RlclxyXG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcclxuXHJcbiAgICBjb25zdCBsb2dvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBsb2dvcy5jbGFzc0xpc3QuYWRkKCdsb2dvcycpO1xyXG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29zKTtcclxuXHJcbiAgICBjb25zdCBmYWNlYm9va0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGZhY2Vib29rTGkuY2xhc3NMaXN0LmFkZCgnZmFjZWJvb2snKTtcclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XHJcbiAgICBpbWcuc3JjID0gZmFjZWJvb2s7XHJcbiAgICBmYWNlYm9va0xpLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBsb2dvcy5hcHBlbmRDaGlsZChmYWNlYm9va0xpKTtcclxuXHJcbiAgICBjb25zdCB0d2l0dGVyTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgdHdpdHRlckxpLmNsYXNzTGlzdC5hZGQoJ3R3aXR0ZXInKTtcclxuICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICAgIGltZy5zcmMgPSB0d2l0dGVyO1xyXG4gICAgdHdpdHRlckxpLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBsb2dvcy5hcHBlbmRDaGlsZCh0d2l0dGVyTGkpO1xyXG5cclxuICAgIGNvbnN0IGdtYWlsTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgZ21haWxMaS5jbGFzc0xpc3QuYWRkKCdnbWFpbCcpO1xyXG4gICAgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xyXG4gICAgaW1nLnNyYyA9IGdtYWlsO1xyXG4gICAgZ21haWxMaS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgbG9nb3MuYXBwZW5kQ2hpbGQoZ21haWxMaSk7XHJcblxyXG4gICAgY29uc3QgaW5zdGFncmFtTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaW5zdGFncmFtTGkuY2xhc3NMaXN0LmFkZCgnaW5zdGFncmFtJyk7XHJcbiAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XHJcbiAgICBpbWcuc3JjID0gaW5zdGFncmFtO1xyXG4gICAgaW5zdGFncmFtTGkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGxvZ29zLmFwcGVuZENoaWxkKGluc3RhZ3JhbUxpKTtcclxuICAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpe1xyXG5cclxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgaG9tZVBhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVQYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ2Fic29sdXRlJywndGV4dC1JbnNpZGUtSW1hZ2UnKTtcclxuICAgIGhvbWVQYWdlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdob21lUGFnZURpdicpO1xyXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChob21lUGFnZURpdik7XHJcblxyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaDEuaW5uZXJIVE1MID0gJ1RIRSBBVklBUlknO1xyXG4gICAgaDEuY2xhc3NMaXN0LmFkZCgncmVzdHVyZW50LW5hbWUnLCAndGV4dC1JbnNpZGUtSW1hZ2UnKTtcclxuICAgIGhvbWVQYWdlRGl2LmFwcGVuZENoaWxkKGgxKTtcclxuXHJcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoMi5pbm5lckhUTUwgPSAnV2hlcmUgZXZlcnkgZmxhdm9yIHRlbGxzIHRoZSBzdG9yeSBvZiB0aGUgZm9vZC4nO1xyXG4gICAgaDIuY2xhc3NMaXN0LmFkZCgncmVzdHVyZW50LXNsb2dhbicsICd0ZXh0LUluc2lkZS1JbWFnZScpO1xyXG4gICAgaG9tZVBhZ2VEaXYuYXBwZW5kQ2hpbGQoaDIpO1xyXG5cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpe1xyXG5cclxuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgbWVudVBhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVQYWdlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51UGFnZURpdicpO1xyXG4gICAgbWVudVBhZ2VEaXYuY2xhc3NMaXN0LmFkZCgndGV4dC1JbnNpZGUtSW1hZ2UnKTsgXHJcbiAgICBcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywnZmlyc3RDb3Vyc2UnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LUluc2lkZS1JbWFnZScpO1xyXG5cclxuICAgIGxldCBoMSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaDEuaW5uZXJIVE1MPSdGSVJTVCBDT1VSU0UnO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGgxKTtcclxuXHJcbiAgICBsZXQgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgaDQuaW5uZXJIVE1MPSdCRU5HQUxJIEJFRVQgQ0hPUCc7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDQpO1xyXG4gICAgXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAuaW5uZXJIVE1MPSdXaW50ZXIgVmVnZXRhYmxlcywgUG90YXRvZXMsIEthc3VuZGkgTWF5byAoVikqJztcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIFxyXG4gICAgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgaDQuaW5uZXJIVE1MPSdTSFJJTVAgS09MSVdBREEnO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGg0KTtcclxuICAgIFxyXG4gICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAuaW5uZXJIVE1MPSdQb3Bjb3JuIFN0eWxlIEZyaXR0ZXJzLCBQaWNrbGVkIE1hbmdvIFNhdWNlIChHRiknO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIG1lbnVQYWdlRGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cclxuICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdtYWluQ291cnNlJyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGV4dC1JbnNpZGUtSW1hZ2UnKTtcclxuXHJcbiAgICBoMSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaDEuaW5uZXJIVE1MPSdNQUlOIENPVVJTRSc7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDEpO1xyXG5cclxuICAgIGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIGg0LmlubmVySFRNTD0nQU5ESFJBIFZFR0VUQUJMRSBDVVJSWSc7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDQpO1xyXG4gICAgXHJcbiAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC5pbm5lckhUTUw9J1NlYXNvbmFsIFZlZ2V0YWJsZXMsIEdvbmd1cmEgTGVhdmVzLCBDb2NvbnV0IChWLCBHRiknO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG4gICAgXHJcbiAgICBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBoNC5pbm5lckhUTUw9J1ZJTkRBTE9PIEJCUSBQT1JLIFJJQlMnO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGg0KTtcclxuICAgIFxyXG4gICAgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHAuaW5uZXJIVE1MPSdTdGlja3kgQ2hpbGkgR2xhemUsIE1hbmdvLCBQaWNrbGVkIE9uaW9uIChHRiknO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIG1lbnVQYWdlRGl2LmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsJ2Rlc3NlcnQnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0LUluc2lkZS1JbWFnZScpO1xyXG5cclxuICAgIGgxID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoMS5pbm5lckhUTUw9J1RBS0VBV0FZIERFU1NFUlQnO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGgxKTtcclxuXHJcbiAgICBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBoNC5pbm5lckhUTUw9J0Nvb2tpZSc7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDQpO1xyXG4gICAgXHJcbiAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC5pbm5lckhUTUw9J0Nob2NvbGF0ZSBEaXBwZWQgUGlzdGFjaGlvIFNob3J0YnJlYWQgQ29va2llcyc7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBcclxuXHJcbiAgICBtZW51UGFnZURpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQobWVudVBhZ2VEaXYpO1xyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkZXIobG9hZGVkUGFnZSl7XHJcblxyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcclxuICAgIGNvbnN0IEFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XHJcblxyXG4gICAgaWYobG9hZGVkUGFnZSA9PT0gJ21lbnUnKXtcclxuXHJcbiAgICAgICAgbGV0IG1lbnVQYWdlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVQYWdlRGl2Jyk7XHJcbiAgICAgICAgbWVudS5zdHlsZS5vdXRsaW5lID0gJ25vbmUnO1xyXG4gICAgICAgIG1lbnVQYWdlRGl2LnJlbW92ZSgpO1xyXG5cclxuICAgIH1lbHNlIGlmKGxvYWRlZFBhZ2UgPT09ICdob21lJyl7XHJcblxyXG4gICAgICAgIGxldCBob21lUGFnZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lUGFnZURpdicpO1xyXG4gICAgICAgIGhvbWUuc3R5bGUub3V0bGluZSA9ICdub25lJztcclxuICAgICAgICBob21lUGFnZURpdi5yZW1vdmUoKTtcclxuXHJcbiAgICB9ZWxzZXtcclxuXHJcbiAgICAgICAgbGV0IGFib3V0UGFnZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dFBhZ2VEaXYnKTtcclxuICAgICAgICBBYm91dC5zdHlsZS5vdXRsaW5lID0gJ25vbmUnO1xyXG4gICAgICAgIGFib3V0UGFnZURpdi5yZW1vdmUoKTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lUGFnZS5qcyc7XHJcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL21lbnVQYWdlLmpzJztcclxuaW1wb3J0IGZvb3RlckhlYWRlciBmcm9tICcuL2Zvb3RlckhlYWRlci5qcyc7XHJcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSAnLi9hYm91dC5qcyc7XHJcbmltcG9ydCBwYWdlTG9hZGVyIGZyb20gJy4vcGFnZUxvYWRlci5qcyc7XHJcblxyXG5mb290ZXJIZWFkZXIoKTtcclxuaG9tZVBhZ2UoKTtcclxuIFxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XHJcbmNvbnN0IEFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XHJcblxyXG5sZXQgbG9hZGVkUGFnZSA9ICdob21lJztcclxuXHJcbmhvbWUuc3R5bGUub3V0bGluZSA9ICcycHggc29saWQgd2hpdGUnO1xyXG5cclxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgcGFnZUxvYWRlcihsb2FkZWRQYWdlKTtcclxuICAgIG1lbnVQYWdlKCk7XHJcbiAgICBtZW51LnN0eWxlLm91dGxpbmUgPSAnMnB4IHNvbGlkIHdoaXRlJztcclxuICAgIGxvYWRlZFBhZ2UgPSAnbWVudSc7XHJcblxyXG59KTtcclxuXHJcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHBhZ2VMb2FkZXIobG9hZGVkUGFnZSk7XHJcbiAgICBob21lUGFnZSgpO1xyXG4gICAgaG9tZS5zdHlsZS5vdXRsaW5lID0gJzJweCBzb2xpZCB3aGl0ZSc7XHJcbiAgICBsb2FkZWRQYWdlID0gJ2hvbWUnO1xyXG5cclxufSk7XHJcblxyXG5BYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgcGFnZUxvYWRlcihsb2FkZWRQYWdlKTtcclxuICAgIGFib3V0UGFnZSgpO1xyXG4gICAgQWJvdXQuc3R5bGUub3V0bGluZSA9ICcycHggc29saWQgd2hpdGUnO1xyXG4gICAgbG9hZGVkUGFnZSA9ICdhYm91dCc7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
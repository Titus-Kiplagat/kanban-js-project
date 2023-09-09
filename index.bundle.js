/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkkanban_js_project"] = self["webpackChunkkanban_js_project"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.container {\n  padding: 0 40px;\n  max-width: 1440px;\n  margin: auto;\n}\n\n.foot {\n  background-color: black;\n  bottom: 0;\n}\n\n.foot .container {\n  font-family: \"Poppins\", sans-serif;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n}\n\n.custom-color {\n  color: #fff;\n}\n\n.card {\n  width: 15rem;\n  border: none;\n}\n\n.image {\n  height: 15rem;\n}\n\n.text-overflow {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.like-button {\n  cursor: pointer;\n}\n\n/* popup */\n.popupContainer {\n  width: 55%;\n  height: 90%;\n  display: none;\n  background: gray;\n  position: fixed;\n  border-radius: 10px;\n  top: 4%;\n  left: 25%;\n  text-align: center;\n  justify-content: center;\n  color: #333;\n  overflow-y: scroll;\n  transition: filter 0.3s ease-in-out;\n}\n\n.popupContainer2 {\n  height: 95%;\n}\n\n.blur-background {\n  filter: blur(8px);\n  pointer-events: none;\n  transition: filter 0.3s ease-in-out;\n}\n\n.close-btn {\n  position: absolute;\n  right: 0;\n  width: 45px;\n  border-radius: 22px;\n  height: 45px;\n  background: floralwhite;\n  margin-right: 14px;\n  margin-top: -54px;\n  font-size: 24px;\n  font-family: monospace;\n  font-weight: 600;\n  border: 5px solid rgb(26, 94, 156);\n}\n\n.subDivOne {\n  display: flex;\n  height: 55%;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  margin-top: 66px;\n}\n\nimg.movie-img {\n  width: 50%;\n  height: 450px;\n  border-radius: 20px;\n}\n\nh2.movieName {\n  margin-top: 16px;\n  background-color: bisque;\n  color: black;\n  border-radius: 6px;\n  padding: 14px;\n  font-size: 22px;\n  width: 38%;\n}\n\n.subDivTwo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  border-radius: 6px;\n  background: bisque;\n  padding: 12px;\n  margin: 12px 8%;\n}\n\n.commentHeading {\n  margin-top: 12px;\n  background-color: bisque;\n  color: black;\n  border-radius: 6px;\n  padding: 4px;\n  width: 30%;\n}\n\ninput.typeName {\n  width: 90%;\n  padding: 4px;\n  height: 28px;\n}\n\ninput.typeComment {\n  width: 90%;\n  padding: 4px;\n  height: 28px;\n  margin-top: 6px;\n}\n\n.submitComment {\n  margin-top: 6px;\n  width: 62px;\n  height: 32px;\n  box-shadow: 3px 3px lightgray;\n  border-radius: 6px;\n}\n\n.description {\n  width: 75%;\n  background: bisque;\n  border-radius: 8px;\n}\n\np#sumTxt {\n  font-size: 24px;\n  color: darkblue;\n  font-weight: 800;\n}\n\n.smallItems {\n  background: beige;\n  width: 52%;\n  margin-top: 5px;\n  border-radius: 8px;\n}\n\n.comment-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  border-radius: 6px;\n  background: bisque;\n  padding: 12px;\n  margin: 12px 8%;\n}\n\np.comments {\n  background: black;\n  color: white;\n  width: 114px;\n  border-radius: 8px;\n  margin: 7px;\n}\n\n.inputComments {\n  width: 52%;\n  padding: 8px;\n  margin-top: 26px;\n}\n\n.forStyling {\n  height: 8px;\n}\n\nli.comment-li {\n  display: flex;\n  background: lightgrey;\n  margin: 6px;\n  gap: 18px;\n  padding: 4px;\n  border-radius: 10px;\n}\n\n.fa-solid {\n  color: grey;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanban-js-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://kanban-js-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanban-js-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanban-js-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanban-js-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanban-js-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanban-js-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanban-js-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanban-js-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanban-js-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((module) => {

eval("const moviesURL = 'https://api.tvmaze.com/shows';\nconst involvementURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\nconst involvementAPIKEY = 'Niv2tF2ppqE5tVmXpEqZ';\n\nmodule.exports = { moviesURL, involvementAPIKEY, involvementURL };\n\n//# sourceURL=webpack://kanban-js-project/./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_renderMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderMovies.js */ \"./src/modules/renderMovies.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_renderMovies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n//# sourceURL=webpack://kanban-js-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/allItemsCount.js":
/*!**************************************!*\
  !*** ./src/modules/allItemsCount.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData.js */ \"./src/modules/fetchData.js\");\n\n\nconst allItemsCount = () => {\n  const countSpan = document.getElementById('count-span');\n  (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\n    countSpan.textContent = `(${data.length})`;\n  }).catch((error) => {\n    throw new Error(error.message);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allItemsCount);\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/allItemsCount.js?");

/***/ }),

/***/ "./src/modules/cardMarkup.js":
/*!***********************************!*\
  !*** ./src/modules/cardMarkup.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardMarkup = ({ image, name, id }) => `\n          <div class=\"card col\">\n            <img\n              src= ${image.medium}\n              class=\"card-img-top rounded-4 image\"\n              alt= ${name}\n            />\n            <div class=\"card-body px-1\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <h6 class=\"card-title m-0 pe-2 fs-6 text-overflow\">\n                  ${name}\n                </h6>\n                <div class=\"col-4 text-center\">\n                  <svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    width=\"16\"\n                    height=\"16\"\n                    fill=\"currentColor\"\n                    class=\"bi bi-suit-heart like-button\"\n                    id=${id}\n                    viewBox=\"0 0 16 16\"\n                  >\n                    <path\n                      d=\"m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z\"\n                    />\n                  </svg>\n                  <p id=\"likes-count-${id}\"></p>\n                </div>\n              </div>\n              <div class=\"d-flex justify-content-between mt-3\">\n                <a\n                  href=\"https://www.tvmaze.com/shows/1/under-the-dome\"\n                  class=\"btn btn-sm btn-secondary\"\n                  >watch</a\n                >\n                <button id=${id} class=\"btn btn-sm btn-secondary btn-comments\">comments</button>\n              </div>\n            </div>\n          </div>\n`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardMarkup);\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/cardMarkup.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentCount: () => (/* binding */ commentCount),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst totalCommentsCount = () => {\n  const cmntCheck = document.getElementById('comments-section').children.length;\n  return cmntCheck;\n};\n\nconst commentCount = (commentList) => commentList.length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalCommentsCount);\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/createPopupMarkup.js":
/*!******************************************!*\
  !*** ./src/modules/createPopupMarkup.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNewComment: () => (/* binding */ createNewComment),\n/* harmony export */   createPopup: () => (/* binding */ createPopup)\n/* harmony export */ });\n/* harmony import */ var _fetchAndPostComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAndPostComments.js */ \"./src/modules/fetchAndPostComments.js\");\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/modules/commentsCounter.js\");\n\n\n\nconst createPopup = ({\n  image, name, summary, genres, officialSite, id, rating,\n}) => {\n  const popupContent = document.createElement('div');\n  popupContent.setAttribute('class', 'popupContainer2');\n  popupContent.innerHTML = `\n  \n  <div class=\"wholePopup\">\n\n  <button class=\"close-btn\">X</button>\n\n      <div class=\"subDivOne\">\n          <img class=\"movie-img\" src=\"${image.medium}\" alt=\"Poster\"></img>\n          <h2 class=\"movieName\">${name}</h2>\n          <form action=\"\" class=\"form\"></form>\n      </div>\n\n      <div class=\"subDivTwo\">\n\n          <div class=\"description\">\n              <p id=\"sumTxt\">Description:</p> ${summary}\n          </div>\n          <div class=\"smallItems\"><span class=\"generes\">Genre: </span> ${genres}</div>\n\n          <div class=\"smallItems\"><span class=\"titles\">OfficialSite: </span> <a href=\"${officialSite}\"\n                  target=\"_blank\">OfficialSite</a>\n          </div>\n\n          <div class=\"smallItems\"><span class=\"titles\">ID: </span> ${id}</div>\n          <div class=\"smallItems\"><span class=\"titles\">IMDb Rating: </span> ${rating.average}</div>\n\n      </div>\n\n      <div class=\"comment-container\">\n\n          <p class=\"comments\">Comments(<span class=\"commentsCount\"></span>)</p>\n\n          <form class=\"inputComment\">\n              <input required type=\"text\" class=\"typeName\" id=\"typeName\" placeholder=\"Your Name\"><br>\n              <input required type=\"text\" class=\"typeComment\" id=\"typeComment\" placeholder=\"Your comment\"><br>\n              <button type=\"submit\" class=\"submitComment\" id=\"${id}\">Submit</button>\n          </form>\n\n          <div class=\"commentDisplay\">\n          </div>\n\n      </div>\n\n      <div class=\"forStyling\n      \"></div>\n\n  </div>\n\n  `;\n\n  return popupContent;\n};\n\nconst createNewComment = async () => {\n  const formNewCmnt = document.querySelector('.inputComment');\n  const btnSubmit = document.querySelector('.submitComment');\n  const commentCounter = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const displayAllCmnt = document.querySelector('.commentDisplay');\n\n  document.querySelector('.commentsCount').innerHTML = commentCounter;\n  formNewCmnt.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    const name = formNewCmnt.elements[0];\n    const cDate = new Date();\n\n    const formattedDate = cDate.toISOString().split('T')[0];\n\n    const comment = formNewCmnt.elements[1];\n    if (!(name === '' || comment === '')) {\n      await (0,_fetchAndPostComments_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(btnSubmit.id, name.value, formattedDate, comment.value);\n      const allListCmnt = await (0,_fetchAndPostComments_js__WEBPACK_IMPORTED_MODULE_0__.createComment)(btnSubmit.id);\n      displayAllCmnt.innerHTML = '';\n      displayAllCmnt.append(allListCmnt);\n      const commentCounter = (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      document.querySelector('.commentsCount').innerHTML = commentCounter;\n      formNewCmnt.reset();\n    }\n  });\n};\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/createPopupMarkup.js?");

/***/ }),

/***/ "./src/modules/displayPopup.js":
/*!*************************************!*\
  !*** ./src/modules/displayPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createPopupMarkup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPopupMarkup.js */ \"./src/modules/createPopupMarkup.js\");\n/* harmony import */ var _fetchAndPostComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchAndPostComments.js */ \"./src/modules/fetchAndPostComments.js\");\n/* harmony import */ var _handlePopupCloseBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlePopupCloseBtn.js */ \"./src/modules/handlePopupCloseBtn.js\");\n\n\n\n\nconst displayPopup = async (id) => {\n  const allpopup = document.querySelector('.popupContainer');\n  const { body } = document;\n  body.style.overflow = 'hidden';\n\n  allpopup.innerHTML = '';\n\n  const movieDetail = await (0,_handlePopupCloseBtn_js__WEBPACK_IMPORTED_MODULE_2__.detailsAll)(id);\n  allpopup.append((0,_createPopupMarkup_js__WEBPACK_IMPORTED_MODULE_0__.createPopup)(movieDetail));\n  allpopup.style.display = 'flex';\n\n  const commentLine = document.querySelector('.commentDisplay');\n  const comments = await (0,_fetchAndPostComments_js__WEBPACK_IMPORTED_MODULE_1__.createComment)(id);\n  commentLine.append(comments);\n\n  (0,_handlePopupCloseBtn_js__WEBPACK_IMPORTED_MODULE_2__.popupCloseBtn)();\n  (0,_createPopupMarkup_js__WEBPACK_IMPORTED_MODULE_0__.createNewComment)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopup);\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/displayPopup.js?");

/***/ }),

/***/ "./src/modules/fetchAndDisplayLikes.js":
/*!*********************************************!*\
  !*** ./src/modules/fetchAndDisplayLikes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\n\nconst fetchAndDisplayLikes = (movieID) => {\n  (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.fetchLikes)().then((data) => {\n    const likesData = data.find((item) => item.item_id === movieID);\n    let likesCount = 0;\n    if (likesData) {\n      likesCount = likesData.likes;\n    }\n    const likesSpan = document.getElementById(`likes-count-${movieID}`);\n    likesSpan.textContent = `${likesCount} likes`;\n  }).catch((error) => {\n    throw new Error(error.message);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAndDisplayLikes);\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/fetchAndDisplayLikes.js?");

/***/ }),

/***/ "./src/modules/fetchAndPostComments.js":
/*!*********************************************!*\
  !*** ./src/modules/fetchAndPostComments.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createComment: () => (/* binding */ createComment),\n/* harmony export */   postComment: () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst postComment = async (id, name, date, comment) => {\n  const apiFetch = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}/apps/${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPIKEY}/comments`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id, creation_date: date, username: name, comment,\n    }),\n  });\n  return apiFetch;\n};\n\nconst fetchComments = async (id) => {\n  const gotCmt = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}/apps/${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPIKEY}/comments?item_id=${id}`);\n  const intD = await gotCmt.json();\n\n  if (!gotCmt.ok) {\n    return null;\n  }\n  return intD;\n};\n\nconst newComment = ({ comment, username, creation_date: date }) => {\n  const cmtliEle = document.createElement('li');\n  cmtliEle.className = 'comment-li';\n  cmtliEle.innerHTML = `\n  <p class=\"date\"><span><i class=\"fa-solid fa-user\"> </i><span>${date} </span> </span><span>${username}: </span></p>\n  <p class = \"user-comment\"><span> ${comment} </span></p>\n  `;\n  return cmtliEle;\n};\n\nconst createComment = async (id) => {\n  const allComment = document.createElement('ul');\n  allComment.id = 'comments-section';\n  allComment.innerHTML = '';\n  const comments = await fetchComments(id);\n\n  if (comments === null) {\n    const nocmtliEle = document.createElement('p');\n    nocmtliEle.className = 'no_comment_li';\n    nocmtliEle.textContent = 'Be the first to comment';\n    allComment.append(nocmtliEle);\n  } else {\n    comments.forEach((comment) => {\n      allComment.append(newComment(comment));\n    });\n  }\n  return allComment;\n};\n\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/fetchAndPostComments.js?");

/***/ }),

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst fetchData = async () => {\n  const response = await fetch(_config_js__WEBPACK_IMPORTED_MODULE_0__.moviesURL);\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/fetchData.js?");

/***/ }),

/***/ "./src/modules/handleLikeBtnClick.js":
/*!*******************************************!*\
  !*** ./src/modules/handleLikeBtnClick.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchAndDisplayLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAndDisplayLikes.js */ \"./src/modules/fetchAndDisplayLikes.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\n\n\nconst handleLikeBtnClick = () => {\n  const likeButtons = document.querySelectorAll('.like-button');\n  likeButtons.forEach((likeButton) => {\n    likeButton.addEventListener('click', async (event) => {\n      const likeButtonID = parseInt(event.target.id, 10);\n      await (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(likeButtonID);\n      (0,_fetchAndDisplayLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(likeButtonID);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleLikeBtnClick);\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/handleLikeBtnClick.js?");

/***/ }),

/***/ "./src/modules/handlePopupCloseBtn.js":
/*!********************************************!*\
  !*** ./src/modules/handlePopupCloseBtn.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   detailsAll: () => (/* binding */ detailsAll),\n/* harmony export */   popupCloseBtn: () => (/* binding */ popupCloseBtn)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst detailsAll = async (id) => {\n  const fetched = await fetch(`${_config_js__WEBPACK_IMPORTED_MODULE_0__.moviesURL}/${id}`);\n  if (!fetched.ok) {\n    throw new Error(`HTTP error! Status: ${fetched.status}`);\n  }\n  return fetched.json();\n};\n\nconst popupCloseBtn = () => {\n  const crossBtn = document.querySelector('.close-btn');\n  crossBtn.addEventListener('click', () => {\n    const popupModal = document.querySelector('.popupContainer');\n    popupModal.style.display = 'none';\n    document.body.style.overflow = 'scroll';\n  });\n};\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/handlePopupCloseBtn.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchLikes: () => (/* binding */ fetchLikes),\n/* harmony export */   postLikes: () => (/* binding */ postLikes)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst URL = `${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementURL}/apps/${_config_js__WEBPACK_IMPORTED_MODULE_0__.involvementAPIKEY}/likes`;\n\nconst postLikes = (movieID) => fetch(URL, {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({ item_id: movieID }),\n})\n  .then((response) => {\n    if (!response.ok) {\n      throw new Error('Failed to post like');\n    }\n  })\n  .catch((error) => {\n    throw new Error(error.message);\n  });\n\nconst fetchLikes = async () => {\n  const response = await fetch(URL);\n  return response.json();\n};\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/renderMovies.js":
/*!*************************************!*\
  !*** ./src/modules/renderMovies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _allItemsCount_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allItemsCount.js */ \"./src/modules/allItemsCount.js\");\n/* harmony import */ var _cardMarkup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardMarkup.js */ \"./src/modules/cardMarkup.js\");\n/* harmony import */ var _displayPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayPopup.js */ \"./src/modules/displayPopup.js\");\n/* harmony import */ var _fetchAndDisplayLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchAndDisplayLikes.js */ \"./src/modules/fetchAndDisplayLikes.js\");\n/* harmony import */ var _fetchData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchData.js */ \"./src/modules/fetchData.js\");\n/* harmony import */ var _handleLikeBtnClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleLikeBtnClick.js */ \"./src/modules/handleLikeBtnClick.js\");\n\n\n\n\n\n\n\nconst renderMovies = async () => {\n  const cardsContainer = document.getElementById('cards-container');\n  cardsContainer.innerHTML = '';\n\n  await (0,_fetchData_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().then((movies) => {\n    movies.forEach((movie) => {\n      const card = (0,_cardMarkup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie);\n      cardsContainer.innerHTML += card;\n\n      (0,_fetchAndDisplayLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movie.id);\n    });\n  }).catch((error) => {\n    throw new Error(error.message);\n  });\n  const openPopup = () => {\n    const commentBtns = document.querySelectorAll('.btn-comments');\n    commentBtns.forEach((btn) => {\n      btn.addEventListener('click', async (e) => {\n        e.preventDefault();\n        const commentId = btn.getAttribute('id');\n        (0,_displayPopup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentId);\n      });\n    });\n  };\n\n  openPopup();\n\n  (0,_handleLikeBtnClick_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  (0,_allItemsCount_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMovies);\n\n//# sourceURL=webpack://kanban-js-project/./src/modules/renderMovies.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
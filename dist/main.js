/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html {\n  background: linear-gradient(#ddeeff, #d2e2f2);\n  color: #456;\n  height: 100%;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nh2, h3, h4, h5, h6 {\n  margin: 0;\n  width: 100%;\n}\n\nheader {\n  width: 90%;\n  text-align: center;\n  align-self: center;\n  grid-area: 1 / 1 / 2 / 3;\n  background-color: rgba(200, 100, 255, 0.3);\n  padding: 2em;\n  border-radius: 1em;}\n\n#content {\n  display: flex;\n  flex-direction: column;  \n  height: 100%;\n}\n\n#interface {\n  display: flex;\n  height: 100%;\n  gap: 10px;\n  padding: 10px;\n}\n\n#projects {\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(100, 200, 255, 0.3);\n  padding: 2em;\n  border-radius: 1em;\n}\n\n#project-list {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 1em 0;\n  gap: 1em;\n}\n\nbutton {\n  background: #ddeeff;\n  color: inherit;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\nbutton:hover {\n  background: #d2e2f2;\n}\n\n.x-btn {\n  background: #fdd;\n  color: #c00;\n  border: none;\n  border-radius: 1em;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.x-btn:hover {\n  background: #fcc;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n\ninput {\n  border: none;\n  border-radius: 0.5em;\n  padding: 5px;\n  font-size: 1em;\n  background-color: #ddeeff;\n}\n\n\n.project {\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 1.5em;\n  padding: 1em;\n}\n\n#todos {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(100, 255, 200, 0.3);\n  padding: 2em;\n  border-radius: 1em;\n}\n\n#todo-list {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 1em 0;\n  gap: 1em;\n}\n\n.todo {\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 1.5em;\n  padding: 1em;\n}\n\n.high {\n  background: #fdd;\n}\n\n.low {\n  background: #def;\n}\n\n.active-project {\n  color: yellowgreen;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_onLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/onLoad */ \"./src/modules/onLoad.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n(0,_modules_onLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom/addEventListeners.js":
/*!**********************************************!*\
  !*** ./src/modules/dom/addEventListeners.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEventListeners)\n/* harmony export */ });\n/* harmony import */ var _rerenderProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rerenderProjectList */ \"./src/modules/dom/rerenderProjectList.js\");\n/* harmony import */ var _rerenderTodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rerenderTodoList */ \"./src/modules/dom/rerenderTodoList.js\");\n\n\n\nfunction addEventListeners(projectListModule) {\n  const addProjectBtn = document.getElementById(\"add-project-btn\");\n  const addProjectText = document.getElementById(\"project-name\");\n\n  addProjectBtn.addEventListener(\"click\", (e) => {\n    if (addProjectText.value !== \"\") {\n      (0,_rerenderProjectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectListModule, addProjectText);\n      document.getElementById(\"todo-list\").innerHTML = \"\";\n    }\n  });\n\n  addProjectText.addEventListener(\"keypress\", (e) => {\n    if (e.key === \"Enter\" && addProjectText.value !== \"\") {\n      (0,_rerenderProjectList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectListModule, addProjectText);\n      document.getElementById(\"todo-list\").innerHTML = \"\";\n    }\n  });\n\n  const addTodoBtn = document.getElementById(\"add-todo-btn\");\n  const addTodoText = document.getElementById(\"todo-name\");\n\n  addTodoBtn.addEventListener(\"click\", (e) => {\n    if (addTodoText.value !== \"\") {\n      (0,_rerenderTodoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectListModule.getCurrentProject(), addTodoText);\n    }\n  });\n\n  addTodoText.addEventListener(\"keypress\", (e) => {\n    if (e.key === \"Enter\" && addTodoText.value !== \"\") {\n      (0,_rerenderTodoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectListModule.getCurrentProject(), addTodoText);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/dom/addEventListeners.js?");

/***/ }),

/***/ "./src/modules/dom/addProjectToDom.js":
/*!********************************************!*\
  !*** ./src/modules/dom/addProjectToDom.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProject)\n/* harmony export */ });\n/* harmony import */ var _clearTodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearTodoList */ \"./src/modules/dom/clearTodoList.js\");\n/* harmony import */ var _renderTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTodos */ \"./src/modules/dom/renderTodos.js\");\n\n\n\nfunction addProject(name, projectListModule) {\n  const project = document.createElement(\"div\");\n  project.classList.add(\"project\");\n  const projectTitle = document.createElement(\"h3\");\n  projectTitle.textContent = name;\n  const activeProject = document.querySelector(\".active-project\");\n  if (activeProject) {\n    activeProject.classList.remove(\"active-project\");\n  }\n  projectTitle.classList.add(\"active-project\");\n  projectTitle.addEventListener(\"click\", (e) => {\n    projectListModule.setCurrentProject(projectListModule.getProject(name));\n\n    const activeProject = document.querySelector(\".active-project\");\n    activeProject.classList.remove(\"active-project\");\n\n    e.target.classList.add(\"active-project\");\n    (0,_clearTodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_renderTodos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectListModule.getCurrentProject());\n  });\n  const removeProjectBtn = document.createElement(\"button\");\n  removeProjectBtn.textContent = \"X\";\n  removeProjectBtn.classList.add(\"x-btn\");\n  removeProjectBtn.addEventListener(\"click\", () => {\n    if (projectListModule.getProjects().length === 1) {\n      return;\n    }\n    projectListModule.removeProject(name);\n    project.remove();\n    projectListModule.setCurrentProject(projectListModule.getProjects()[0]);\n    (0,_clearTodoList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_renderTodos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectListModule.getCurrentProject());\n  });\n\n  project.appendChild(projectTitle);\n  project.appendChild(removeProjectBtn);\n  document.getElementById(\"project-list\").appendChild(project);\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/dom/addProjectToDom.js?");

/***/ }),

/***/ "./src/modules/dom/addTodoToDom.js":
/*!*****************************************!*\
  !*** ./src/modules/dom/addTodoToDom.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _cyclePriority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cyclePriority */ \"./src/modules/dom/cyclePriority.js\");\n\n\nfunction addTodo(todoObj, project) {\n  const todoInfo = todoObj.getTodo();\n  const todo = document.createElement(\"li\");\n  todo.classList.add(\"todo\");\n  todo.classList.add(todoInfo.priority);\n  // todo.classList.add(\"show-details\");\n  todo.addEventListener(\"click\", () => {\n    console.log(todoObj);\n  });\n  const todoTitle = document.createElement(\"h4\");\n  todoTitle.textContent = todoInfo.title;\n  const todoDescription = document.createElement(\"p\");\n  const todoDueDate = document.createElement(\"p\");\n  const todoPriority = document.createElement(\"button\");\n  todoPriority.textContent = \"!\";\n  todoPriority.addEventListener(\"click\", (e) => {\n    (0,_cyclePriority__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target.parentNode);\n    todoObj.togglePriority();\n  });\n\n  const removeTodoBtn = document.createElement(\"button\");\n  removeTodoBtn.textContent = \"X\";\n  removeTodoBtn.classList.add(\"x-btn\");\n  removeTodoBtn.addEventListener(\"click\", () => {\n    project.removeTodo(todoInfo.title);\n    todo.remove();\n  });\n  todo.appendChild(todoTitle);\n  todo.appendChild(todoDescription);\n  todo.appendChild(todoDueDate);\n  todo.appendChild(todoPriority);\n  todo.appendChild(removeTodoBtn);\n  document.getElementById(\"todo-list\").appendChild(todo);\n  document.getElementById(\"todo-name\").value = \"\";\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/dom/addTodoToDom.js?");

/***/ }),

/***/ "./src/modules/dom/clearProjectList.js":
/*!*********************************************!*\
  !*** ./src/modules/dom/clearProjectList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearProjectList)\n/* harmony export */ });\nfunction clearProjectList() {\n  const projectList = document.getElementById(\"project-list\");\n  projectList.innerHTML = \"\";\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/dom/clearProjectList.js?");

/***/ }),

/***/ "./src/modules/dom/clearTodoList.js":
/*!******************************************!*\
  !*** ./src/modules/dom/clearTodoList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearTodoList)\n/* harmony export */ });\nfunction clearTodoList() {\n  const todoList = document.getElementById(\"todo-list\");\n  todoList.innerHTML = \"\";\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/dom/clearTodoList.js?");

/***/ }),

/***/ "./src/modules/dom/cyclePriority.js":
/*!******************************************!*\
  !*** ./src/modules/dom/cyclePriority.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cyclePriority)\n/* harmony export */ });\nfunction cyclePriority(target) {\n  if (target.classList.contains(\"normal\")) {\n    target.classList.remove(\"normal\");\n    target.classList.add(\"high\");\n  } else if (target.classList.contains(\"high\")) {\n    target.classList.remove(\"high\");\n    target.classList.add(\"low\");\n  } else if (target.classList.contains(\"low\")) {\n    target.classList.remove(\"low\");\n    target.classList.add(\"normal\");\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/dom/cyclePriority.js?");

/***/ }),

/***/ "./src/modules/dom/renderProjects.js":
/*!*******************************************!*\
  !*** ./src/modules/dom/renderProjects.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _addProjectToDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProjectToDom.js */ \"./src/modules/dom/addProjectToDom.js\");\n\n\nfunction renderProjects(projectListModule) {\n  const projects = projectListModule.getProjects();\n  projects.forEach((project) => {\n    (0,_addProjectToDom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(project.getProject().title, projectListModule);\n  });\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/dom/renderProjects.js?");

/***/ }),

/***/ "./src/modules/dom/renderTodos.js":
/*!****************************************!*\
  !*** ./src/modules/dom/renderTodos.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _addTodoToDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoToDom.js */ \"./src/modules/dom/addTodoToDom.js\");\n\n\nfunction renderTodos(project) {\n  const todos = project.getProject().todos;\n  console.log(todos);\n  todos.forEach((todo) => {\n    (0,_addTodoToDom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo, project);\n  });\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/dom/renderTodos.js?");

/***/ }),

/***/ "./src/modules/dom/rerenderProjectList.js":
/*!************************************************!*\
  !*** ./src/modules/dom/rerenderProjectList.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rerenderProjectList)\n/* harmony export */ });\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjects */ \"./src/modules/dom/renderProjects.js\");\n/* harmony import */ var _clearProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearProjectList */ \"./src/modules/dom/clearProjectList.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project */ \"./src/modules/project.js\");\n\n\n\n\nfunction rerenderProjectList(projectListModule, addProjectText) {\n  const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(addProjectText.value);\n  projectListModule.addProject(newProject);\n  projectListModule.setCurrentProject(newProject);\n  (0,_clearProjectList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_renderProjects__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectListModule);\n  addProjectText.value = \"\";\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/dom/rerenderProjectList.js?");

/***/ }),

/***/ "./src/modules/dom/rerenderTodoList.js":
/*!*********************************************!*\
  !*** ./src/modules/dom/rerenderTodoList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rerenderTodoList)\n/* harmony export */ });\n/* harmony import */ var _renderTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTodos */ \"./src/modules/dom/renderTodos.js\");\n/* harmony import */ var _clearTodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearTodoList */ \"./src/modules/dom/clearTodoList.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo */ \"./src/modules/todo.js\");\n\n\n\n\nfunction rerenderTodoList(project, addTodoText) {\n  project.addTodo((0,_todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(addTodoText.value));\n  (0,_clearTodoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_renderTodos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(project);\n  addTodoText.value = \"\";\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/dom/rerenderTodoList.js?");

/***/ }),

/***/ "./src/modules/onLoad.js":
/*!*******************************!*\
  !*** ./src/modules/onLoad.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onLoad)\n/* harmony export */ });\n/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectList.js */ \"./src/modules/projectList.js\");\n/* harmony import */ var _dom_addEventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/addEventListeners.js */ \"./src/modules/dom/addEventListeners.js\");\n/* harmony import */ var _dom_renderProjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/renderProjects.js */ \"./src/modules/dom/renderProjects.js\");\n\n\n\n\nfunction onLoad() {\n  const projectListModule = (0,_projectList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  projectListModule.setupProjects();\n\n  (0,_dom_addEventListeners_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectListModule);\n  (0,_dom_renderProjects_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projectListModule);\n  document\n    .getElementById(\"project-list\")\n    .firstChild.firstChild.classList.add(\"active-project\");\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/onLoad.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProject)\n/* harmony export */ });\nfunction createProject(title) {\n  let todos = [];\n  const addTodo = (todo) => {\n    todos.push(todo);\n  };\n  const removeTodo = (todo) => {\n    todos = todos.filter((t) => t.getTodo().title !== todo);\n  };\n  const getProject = () => {\n    return { title, todos };\n  };\n\n  const editTitle = (newTitle) => {\n    title = newTitle;\n  };\n\n  return {\n    addTodo,\n    removeTodo,\n    editTitle,\n    getProject,\n  };\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/projectList.js":
/*!************************************!*\
  !*** ./src/modules/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\nfunction projectList() {\n  let projects = [];\n  let currentProject;\n  const setupProjects = () => {\n    const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Main project\");\n    projects.push(defaultProject);\n    currentProject = projects[0];\n  };\n\n  const setCurrentProject = (project) => {\n    currentProject = project;\n  };\n  const getCurrentProject = () => currentProject;\n  const addProject = (project) => {\n    projects.push(project);\n  };\n  const removeProject = (project) => {\n    projects = projects.filter((p) => p.getProject().title !== project);\n  };\n\n  const getProject = (project) => {\n    return projects.find((p) => p.getProject().title === project);\n  };\n\n  const getProjects = () => projects;\n  return {\n    setupProjects,\n    addProject,\n    removeProject,\n    getProjects,\n    setCurrentProject,\n    getCurrentProject,\n    getProject,\n  };\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/projectList.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo(title, description, dueDate) {\n  let isComplete = false;\n  const toggleComplete = () => {\n    isComplete = !isComplete;\n  };\n\n  const editTitle = (newTitle) => {\n    title = newTitle;\n  };\n  const editDescription = (newDescription) => {\n    description = newDescription;\n  };\n  const editDueDate = (newDueDate) => {\n    dueDate = newDueDate;\n  };\n\n  const priorities = [\"low\", \"normal\", \"high\"];\n  let priority = \"normal\";\n  const togglePriority = () => {\n    priority =\n      priorities[(priorities.indexOf(priority) + 1) % priorities.length];\n  };\n\n  const getTodo = () => {\n    return {\n      title,\n      isComplete,\n      description,\n      dueDate,\n      priority,\n      togglePriority,\n    };\n  };\n\n  return {\n    editTitle,\n    toggleComplete,\n    getTodo,\n    editDescription,\n    editDueDate,\n    togglePriority,\n  };\n}\n\n// Path: src/todo.js\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/todo.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
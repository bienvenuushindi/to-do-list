"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  border: none;\\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nbody {\\n  background-color: #eee;\\n}\\n\\n.container {\\n  display: grid;\\n  grid-template-columns: 1fr 30% 1fr;\\n  margin-top: 5%;\\n}\\n\\n.list {\\n  grid-column: 2;\\n  border: 1px solid #b9b9b9;\\n  margin: auto;\\n  width: 100%;\\n}\\n\\n.d-none {\\n  display: none;\\n}\\n\\n.d-flex {\\n  display: flex;\\n}\\n\\n.grow-1 {\\n  flex-grow: 1;\\n}\\n\\n.list li {\\n  padding: 1rem 0.7rem;\\n  color: #000;\\n  background-color: #fff;\\n}\\n\\n.list li > * {\\n  height: 100%;\\n}\\n\\n.color-primary {\\n  color: #008000;\\n  font-size: 20px;\\n}\\n\\n.line-through {\\n  text-decoration: line-through;\\n  color: #7f7f7f;\\n}\\n\\n.dark-light {\\n  color: #7f7f7f;\\n}\\n\\n.clear {\\n  text-align: center;\\n  grid-column: 2;\\n  padding: 1rem 0.7rem;\\n  border: 1px solid rgba(180, 180, 180, 0.73);\\n}\\n\\n.link {\\n  color: #7f7f7f;\\n  text-decoration: none;\\n}\\n\\n.clear:hover {\\n  background-color: transparent;\\n}\\n\\n.link:hover {\\n  text-decoration: underline;\\n}\\n\\n.list li:not(:nth-child(1)) {\\n  border-top: 1px solid #b9b9b9;\\n}\\n\\n.list li > .form-group > * {\\n  margin: 0.2rem;\\n}\\n\\n.list li .checkbox {\\n  padding: 0.6rem 0.6rem;\\n  border: 2px solid #7f7f7f;\\n}\\n\\n.list li input[type=text] {\\n  font-size: 18px;\\n  font-style: italic;\\n  background-color: #fff;\\n}\\n\\n.add-task {\\n  width: 100%;\\n  border: none;\\n  padding-left: 0.5rem;\\n  color: #7f7f7f;\\n}\\n\\ninput:focus {\\n  border: none;\\n  outline: none;\\n}\\n\\n.icon:hover {\\n  cursor: pointer;\\n}\\n\\n.list li.bg-yellow,\\n.list li.bg-yellow input {\\n  background-color: #fffed3;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elements.js */ \"./src/modules/elements.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_list_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/list-item.js */ \"./src/modules/list-item.js\");\n\n\n\n\n\nconst init = () => {\n  (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();\n  _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerHTML += (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.list)();\n};\n\nwindow.addEventListener('load', () => {\n  init();\n});\ndocument.addEventListener('keypress', (ev) => {\n  const elmt = ev.target;\n  if (ev.key === 'Enter') {\n    if (elmt.classList.contains('add-task')) {\n      const text = document.getElementById('add-task').value;\n      if (!text) return;\n      const task = new _modules_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](text);\n      task.appendToList();\n      (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();\n      _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].innerHTML += (0,_modules_list_item_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(task);\n    } else if (elmt.classList.contains('update')) {\n      const text = elmt.value;\n      const parentNode = elmt.closest('.item');\n      const label = parentNode.querySelector('.item-label');\n      const itemId = parseInt(parentNode.getAttribute('id'), 10);\n      const task = (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.getTask)(itemId);\n      task.description = text;\n      (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();\n      parentNode.lastChild.classList.toggle('d-none');\n      parentNode.lastChild.previousSibling.classList.toggle('d-none');\n      parentNode.classList.remove('bg-yellow');\n      label.classList.remove('d-none');\n      label.nextElementSibling.classList.add('d-none');\n      label.innerHTML = text;\n    }\n  }\n});\n\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addEventListener('click', (ev) => {\n  const element = ev.target;\n  if (element.classList.contains('item') || element.classList.contains('add-task')) return;\n  const parentNode = element.closest('.item');\n  if (!parentNode) return;\n  const itemId = parseInt(parentNode.getAttribute('id'), 10);\n  const task = (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.getTask)(itemId);\n  if (element.classList.contains('checkbox') || element.classList.contains('check')) {\n    const completed = element.classList.contains('check');\n    task.completed = !completed;\n    (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();\n    parentNode.firstChild.classList.toggle('d-none');\n    parentNode.firstChild.nextSibling.classList.toggle('d-none');\n    if (element.classList.contains('check')) parentNode.querySelector('.item-label').classList.remove('line-through');\n    else parentNode.querySelector('.item-label').classList.add('line-through');\n  }\n\n  if (element.classList.contains('item-label')) {\n    const input = element.nextElementSibling;\n    const active = document.querySelector('.bg-yellow');\n\n    if (active) {\n      active.lastChild.classList.toggle('d-none');\n      active.lastChild.previousSibling.classList.toggle('d-none');\n      active.classList.remove('bg-yellow');\n      active.querySelector('.item-label').classList.toggle('d-none');\n      active.querySelector('.update').classList.toggle('d-none');\n    }\n\n    parentNode.classList.toggle('bg-yellow');\n    element.classList.toggle('d-none');\n    input.classList.toggle('d-none');\n    parentNode.lastChild.classList.toggle('d-none');\n    parentNode.lastChild.previousSibling.classList.toggle('d-none');\n    input.value = task.description;\n  }\n\n  if (element.classList.contains('icon') || element.classList.contains('trash')) {\n    if (element.classList.contains('trash')) {\n      (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.remove)(task.index);\n      (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();\n      parentNode.remove();\n    }\n  }\n});\n\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.clearBtn.addEventListener('click', () => {\n  (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.clearCompleted)();\n  (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_0__.updateStorage)();\n  // remove completed tasks\n  document.querySelectorAll('.line-through').forEach((elmt) => {\n    elmt.closest('.item').remove();\n  });\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearBtn\": () => (/* binding */ clearBtn),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst listBox = document.querySelector('.list');\nconst clearBtn = document.querySelector('.clear');\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listBox);\n\n//# sourceURL=webpack://to-do-list/./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/list-item.js":
/*!**********************************!*\
  !*** ./src/modules/list-item.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst listItem = (item) => `<li id='${item.index}' class='d-flex item'><span class='checkbox ${item.completed ? 'd-none' : ''}'></span><span class='fa fa-check color-primary ${item.completed ? '' : 'd-none'} check'></span>\n        <div class='form-group grow-1  d-flex'>\n            <label  for='task-${item.index}-description' class='item-label grow-1 ${item.completed ? 'line-through' : ''}'>${item.description}</label>\n            <input type='text' id='task-${item.index}-description' name='task-${item.index}-description' class='d-none grow-1 update'/>\n        </div>\n        <i class='fa-solid fa-ellipsis-vertical icon'></i><i class='fa-solid fa-trash icon d-none dark-light trash'></i></li>`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listItem);\n\n//# sourceURL=webpack://to-do-list/./src/modules/list-item.js?");

/***/ }),

/***/ "./src/modules/task-storage.js":
/*!*************************************!*\
  !*** ./src/modules/task-storage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* binding */ create),\n/* harmony export */   \"exist\": () => (/* binding */ exist),\n/* harmony export */   \"getItem\": () => (/* binding */ getItem)\n/* harmony export */ });\nconst exist = () => !!localStorage.getItem('tasks');\nconst getItem = () => (exist() ? JSON.parse(localStorage.getItem('tasks')) : []);\nconst create = (item) => localStorage.setItem('tasks', JSON.stringify(item));\n\n//# sourceURL=webpack://to-do-list/./src/modules/task-storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"default\": () => (/* binding */ Task),\n/* harmony export */   \"getTask\": () => (/* binding */ getTask),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"updateIndexes\": () => (/* binding */ updateIndexes),\n/* harmony export */   \"updateStorage\": () => (/* binding */ updateStorage)\n/* harmony export */ });\n/* harmony import */ var _list_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item.js */ \"./src/modules/list-item.js\");\n/* harmony import */ var _task_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-storage.js */ \"./src/modules/task-storage.js\");\n\n\n\nlet TaskList = _task_storage_js__WEBPACK_IMPORTED_MODULE_1__.getItem();\nclass Task {\n  constructor(description, completed = false) {\n    this.description = description;\n    this.completed = completed;\n    this.index = TaskList.length + 1;\n  }\n\n  appendToList() {\n    TaskList.push(this);\n  }\n}\n\nconst updateIndexes = () => {\n\n  TaskList.forEach((elmt, index) => {\n    elmt.index = index + 1;\n  });\n};\n\nconst updateStorage = () => {\n  _task_storage_js__WEBPACK_IMPORTED_MODULE_1__.create(TaskList);\n};\n\nconst remove = (index) => {\n  TaskList = [...TaskList.filter((x) => x.index !== index)];\n  updateIndexes();\n};\n\nconst getTask = (id) => TaskList.find((x) => x.index === id);\n\nconst list = () => TaskList.map((item) => (0,_list_item_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item)).join('');\n\nconst clearCompleted = () => {\n  TaskList = [...TaskList.filter((x) => !x.completed)];\n  updateIndexes();\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/task.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
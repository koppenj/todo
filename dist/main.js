/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "body {\\n  font-family:\'Roboto\',sans-serif;\\n  color: black;\\n  background-color: black;\\n}\\n\\nlabel.labelText {\\n  display: inline-block;\\n  width: 150px;\\n  text-align: right;\\n  padding: 1em 2em;\\n}\\n\\nform#projectInput {\\n  padding: 1em;\\n}\\n\\n.modal {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgb(0,0,0);\\n  background-color: rgba(0,0,0,0.4);\\n}\\n\\n.modalContent {\\n  background-color: #fefefebd;\\n  margin: 15% auto;\\n  padding: 20px;\\n  border: 1px solid #888;\\n  width: 500px;\\n}\\n\\nh3#modalTitle {\\n  text-align: center;\\n}\\n\\n.formModal {\\n  background-color: slateblue;\\n  margin: 10% auto;\\n  padding: 5px;\\n  border: 2px solid purple;\\n}\\n\\n.close {\\n  color: #aaa;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\ndiv#container {\\n  display: grid;\\n  grid-template-columns: 0.6fr 1.4fr;\\n  grid-template-rows: 1fr;\\n  grid-auto-flow: row;\\n  grid-template-areas:\\n    \\"sidebar main\\";\\n}\\n\\ndiv#sidebar {\\n  display: grid;\\n  grid-template-areas:\\n    \\"Action\\"\\n    \\"ProjectList\\";\\n  grid-area: sidebar;\\n}\\n\\ndiv#projectList {\\n  display: flex;\\n  flex-direction: column;\\n  border: solid #000 1px;\\n  background-color: #FFF;\\n  min-height: 100vh;\\n  width: auto;\\n  padding-top: 5%;\\n}\\n\\ndiv#noticeDiv {\\n  font-size: 3em;\\n  color: rgba(136, 136, 136, 0.507);\\n  width: fit-content;\\n  margin: auto;\\n  text-align: center;\\n}\\n\\ndiv#action {\\n  display: flex;\\n  justify-content: space-evenly;\\n\\n}\\n\\n.actionButtons {\\n  margin-bottom: 15px;\\n  appearance: none;\\n  border: 1px solid #000;\\n  color: #FFF;\\n  padding: 6px 8px;\\n  font-size: 1rem;\\n  background-color: #000;\\n  letter-spacing: 0.25px;\\n  text-transform: uppercase;\\n}\\n.actionButtons:hover {\\n  background-color: #FFFFFF;\\n  color: #000;\\n  transition: all 0.2s ease;\\n  cursor: pointer;\\n}\\ndiv#main {\\n  display: flex;\\n  grid-area: main;\\n  border: solid #FFF 5px;\\n  color: #FFF;\\n  overflow-y: auto;\\n}\\ndiv#visibleCard {\\n  flex-grow: 1;\\n  color: #000;\\n  padding: 2em;\\n  background-color: #FFF;\\n  border: 10px solid black;\\n  background-clip: border-box;\\n}\\n\\ndiv.listItems {\\n  display: flex;\\n  justify-content: center;\\n  font-size: 1.5em;\\n  text-transform: uppercase;\\n  transition: all 0.3s ease;\\n}\\n\\ndiv.listItems:hover {\\n  cursor: pointer;\\n  transform: scale(1.2) translateX(50px);\\n  transition: all 0.3s ease;\\n}\\n\\nli.task {\\n  list-style: none;\\n  cursor: pointer;\\n}\\ninput.radio:checked + input.userInput {\\n  /* Learn the logic behind this css selector. It\'s allowing the state of the radio to affect the text input next to it */\\n  text-decoration: line-through;\\n}\\ninput.userInput {\\n  border: none;\\n  border-bottom: solid black 1px;\\n  margin-left: 2em;\\n  padding: 1em;\\n  min-width: 20vw;\\n}", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/styles.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./src/styles.css":
      /*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/styles.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/createProject.js":
      /*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"currentProjectList\": () => (/* binding */ currentProjectList)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/loader.js\");\n\n\nclass Project {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.storage = [];\n  }\n  setToDo(task) {\n    this.storage.push(task);\n    (0,_loader__WEBPACK_IMPORTED_MODULE_0__.setProjects)();\n  }\n  getToDo() {\n    console.log(this.storage);\n  }\n}\n\nlet currentProjectList = [];\n\nfunction createProject() {\n  const project = new Project(\n    document.querySelector('#title').value,\n    document.querySelector('#description').value,\n    document.querySelector('#dueDate').value,\n    document.querySelector('#priority').value,\n  );\n  currentProjectList.push(project);\n  (0,_loader__WEBPACK_IMPORTED_MODULE_0__.renderList)(currentProjectList);\n  (0,_loader__WEBPACK_IMPORTED_MODULE_0__.setProjects)();\n}\n\n\n\n//# sourceURL=webpack://todo/./src/createProject.js?"
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");\n/* harmony import */ var _pageActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageActions */ "./src/pageActions.js");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./src/loader.js");\n\n\n\n\n\n\nwindow.onload = function() {\n  (0,_loader__WEBPACK_IMPORTED_MODULE_4__.getProjects)();\n}\n\n//# sourceURL=webpack://todo/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/loader.js":
      /*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setProjects\": () => (/* binding */ setProjects),\n/* harmony export */   \"getProjects\": () => (/* binding */ getProjects),\n/* harmony export */   \"renderList\": () => (/* binding */ renderList),\n/* harmony export */   \"activeObj\": () => (/* binding */ activeObj)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nfunction storageAvailable(type) {\n  var storage;\n  try {\n      storage = window[type];\n      var x = '__storage_test__';\n      storage.setItem(x, x);\n      storage.removeItem(x);\n      return true;\n  }\n  catch(e) {\n      return e instanceof DOMException && (\n          // everything except Firefox\n          e.code === 22 ||\n          // Firefox\n          e.code === 1014 ||\n          // test name field too, because code might not be present\n          // everything except Firefox\n          e.name === 'QuotaExceededError' ||\n          // Firefox\n          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\n          // acknowledge QuotaExceededError only if there's something already stored\n          (storage && storage.length !== 0);\n  }\n}\n\nfunction setProjects() {\n  if(storageAvailable('localStorage')) {\n    localStorage.setItem('projects', JSON.stringify(_createProject__WEBPACK_IMPORTED_MODULE_0__.currentProjectList));\n  }\n  else {\n    console.error(`Can't Access localStorage`);\n  }\n}\n\nfunction getProjects() {\n  if(localStorage.getItem('projects') !== null) {\n    const testObj = new _createProject__WEBPACK_IMPORTED_MODULE_0__.Project;\n    const old_data = JSON.parse(localStorage.getItem('projects'));\n      old_data.forEach(project => {\n        Object.setPrototypeOf(project, testObj);\n        _createProject__WEBPACK_IMPORTED_MODULE_0__.currentProjectList.push(project);\n    });\n    renderList(old_data);\n  } else {\n    console.log(_createProject__WEBPACK_IMPORTED_MODULE_0__.currentProjectList);\n    renderList(_createProject__WEBPACK_IMPORTED_MODULE_0__.currentProjectList);\n  }\n}\n\n// Draw to DOM every project that is available to the sidebar\nfunction renderList (fromStorage) {\n  const list = document.querySelector('#projectList');\n  if(fromStorage.length > 0) {\n    list.replaceChildren();\n    for (const project of fromStorage) {\n      const item = document.createElement('div');\n      item.textContent = `${project.title}`;\n      item.classList.add('listItems');\n      item.setAttribute('data-index', fromStorage.indexOf(project));\n      item.addEventListener('click', (event) => {\n        viewProject(event);\n      });\n      list.appendChild(item);\n    }\n  } else {\n    const noticeDiv = document.createElement('div');\n    noticeDiv.textContent = 'Nothing To See Here';\n    noticeDiv.id = 'noticeDiv';\n    list.append(noticeDiv);\n  }\n}\n\nlet activeObj;\n// Make selected project expand onto main div section\nfunction viewProject(event) {\n  const display = document.querySelector('#main');\n    display.replaceChildren();\n  activeObj = _createProject__WEBPACK_IMPORTED_MODULE_0__.currentProjectList[event.target.dataset.index];\n  const projectCard = document.createElement('div');\n    projectCard.id = 'visibleCard';\n    projectCard.innerHTML = `\n      <h2>${activeObj.title}</h2>\n      <p>${activeObj.description}</p>\n      <p>Due By: ${activeObj.dueDate}</p>\n      <button class = 'actionButtons' id = 'addTask'>Add Task</button>\n      <div id = 'taskArea'>\n        <ul id = 'taskList'>\n        </ul>\n      </div>`\n  display.appendChild(projectCard);\n  const enableAddTask = document.querySelector('#addTask');\n  enableAddTask.addEventListener('click', _task__WEBPACK_IMPORTED_MODULE_1__.addTask);\n  if(activeObj.storage) {\n    (0,_task__WEBPACK_IMPORTED_MODULE_1__.renderTasks)(activeObj.storage);\n  }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/loader.js?"
        );

        /***/
      },

    /***/ "./src/pageActions.js":
      /*!****************************!*\
  !*** ./src/pageActions.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/createProject.js\");\n\n\nconst formModal = document.getElementById('formModal');\nconst createBtn = document.getElementById('createProject');\nconst span = document.getElementsByClassName('close')[0];\nconst form = document.querySelector('#projectInput');\n\nform.addEventListener('submit', (event) => {\n  event.preventDefault();\n  (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.createProject)();\n  formModal.style.display = 'none';\n  form.reset();\n});\n\nspan.addEventListener('click', () => {\n  formModal.style.display = 'none';\n});\n\ncreateBtn.addEventListener('click', () => {\n  formModal.style.display = 'block';\n});\n\nwindow.addEventListener('click', (event) => {\n  if (event.target === formModal) {\n    formModal.style.display = 'none';\n  }\n});\n\n\n//# sourceURL=webpack://todo/./src/pageActions.js?"
        );

        /***/
      },

    /***/ "./src/task.js":
      /*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/loader.js\");\n\n\nfunction addTask() {\n  const taskList = document.querySelector('#taskList');\n  const task = document.createElement('li');\n  task.classList.add('task');\n  task.contentEditable = true;\n  taskList.appendChild(task);\n  task.focus();\n  task.addEventListener('keypress', (e) => {\n    if(e.key == 'Enter') {\n      storeTask(task);\n   }\n  });\n}\n\nfunction storeTask(task) {\n  let newTask = task.textContent;;\n  _loader__WEBPACK_IMPORTED_MODULE_0__.activeObj.setToDo(newTask);\n  task.contentEditable = false;\n  task.blur();\n}\n\nfunction renderTasks(array) {\n  const taskList = document.querySelector('#taskList');\n  array.forEach(value => {\n    const task = document.createElement('li');\n    task.classList.add('task');\n    task.textContent = value;\n    task.addEventListener('keypress', (e) => {\n      if(e.key == 'Enter' ) {\n        storeTask(task);\n      }\n    });\n    taskList.appendChild(task);\n  });\n}\n\n\n\n//# sourceURL=webpack://todo/./src/task.js?"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();

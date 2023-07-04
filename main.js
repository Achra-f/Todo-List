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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body {
  margin: auto 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  height: 100%;
  background-color: #07C7A4;
  color: #07C7A4;
}


.container {
  height: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 100%;
  padding: 80px 60px 80px 60px;
  box-sizing: border-box;
}

.navbar {
  background-color: white;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  padding: 30px 30px 30px 30px;
  overflow-y: auto;
  gap: 15px;
}

#lists {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#tasks {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 0 10px 10px 0;
}

.list-item {
  background-color: #DCF5E6;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.task-item {
  background-color: #DCF5E6;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.fa-trash-o {
  color: #FF6A6A;
}

.button-container {
  margin-top: 10px;
  text-align: center;

}

#add-project-btn {
  border: none;
  padding: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: white;
  font-weight: 900;
  background-color: #07C7A4;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;

}

.form-container {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.addBtn {
  grid-column: 1 / 2;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: white;
  font-weight: 900;
  background-color: #07C7A4;
  border-radius: 10px;
}

.cancelBtn {
  grid-column: 2 / 3;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: white;
  font-weight: 900;
  background-color: #FF6A6A;
  border-radius: 10px;
}

.form-container input[type="text"] {
  width: 98%;
  padding: 5px;
  margin-bottom: 10px;
  grid-column: 1/3;
  border-radius: 10px;
  border: none;
  background-color: #DCF5E6;
}

.form-container button {
  display: block;
  margin-top: 5px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

#tasks button {
  margin: auto;
  border: none;
  padding: 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: white;
  font-weight: 900;
  border-radius: 10px;
  cursor: pointer;
  width: 50%;
}


.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 4px;
  max-width: 500px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: red;
}

.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 4px;
  max-width: 500px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: red;
}

#taskTitle {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

#taskDescription {
  margin-bottom: 10px;
}

#taskDueDate {
  font-style: italic;
}

#taskPriority {
  font-weight: bold;
  margin-bottom: 10px;
}

#taskNotes {
  margin-bottom: 10px;
}

#taskChecklist {
  margin-bottom: 10px;
}

#taskStatus {
  font-weight: bold;
  margin-bottom: 10px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;900&display=swap');\n\nhtml,\nbody {\n  margin: auto 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n  height: 100%;\n  background-color: #07C7A4;\n  color: #07C7A4;\n}\n\n\n.container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 0.5fr 1fr;\n  grid-template-rows: 100%;\n  padding: 80px 60px 80px 60px;\n  box-sizing: border-box;\n}\n\n.navbar {\n  background-color: white;\n  border-radius: 10px 0 0 10px;\n  display: flex;\n  flex-direction: column;\n  padding: 30px 30px 30px 30px;\n  overflow-y: auto;\n  gap: 15px;\n}\n\n#lists {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#tasks {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.main {\n  background-color: #ffffff;\n  padding: 10px;\n  border-radius: 0 10px 10px 0;\n}\n\n.list-item {\n  background-color: #DCF5E6;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-item {\n  background-color: #DCF5E6;\n  padding: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.fa-trash-o {\n  color: #FF6A6A;\n}\n\n.button-container {\n  margin-top: 10px;\n  text-align: center;\n\n}\n\n#add-project-btn {\n  border: none;\n  padding: 15px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 15px;\n  color: white;\n  font-weight: 900;\n  background-color: #07C7A4;\n  border-radius: 10px;\n  cursor: pointer;\n  width: 100%;\n\n}\n\n.form-container {\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.addBtn {\n  grid-column: 1 / 2;\n  font-family: 'Roboto', sans-serif;\n  font-size: 15px;\n  color: white;\n  font-weight: 900;\n  background-color: #07C7A4;\n  border-radius: 10px;\n}\n\n.cancelBtn {\n  grid-column: 2 / 3;\n  font-family: 'Roboto', sans-serif;\n  font-size: 15px;\n  color: white;\n  font-weight: 900;\n  background-color: #FF6A6A;\n  border-radius: 10px;\n}\n\n.form-container input[type=\"text\"] {\n  width: 98%;\n  padding: 5px;\n  margin-bottom: 10px;\n  grid-column: 1/3;\n  border-radius: 10px;\n  border: none;\n  background-color: #DCF5E6;\n}\n\n.form-container button {\n  display: block;\n  margin-top: 5px;\n  padding: 5px 10px;\n  border: none;\n  cursor: pointer;\n}\n\n#tasks button {\n  margin: auto;\n  border: none;\n  padding: 15px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 15px;\n  color: white;\n  font-weight: 900;\n  border-radius: 10px;\n  cursor: pointer;\n  width: 50%;\n}\n\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 9999;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 10% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 4px;\n  max-width: 500px;\n}\n\n.close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: red;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 9999;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 10% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  border-radius: 4px;\n  max-width: 500px;\n}\n\n.close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.close:hover {\n  color: red;\n}\n\n#taskTitle {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n#taskDescription {\n  margin-bottom: 10px;\n}\n\n#taskDueDate {\n  font-style: italic;\n}\n\n#taskPriority {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n#taskNotes {\n  margin-bottom: 10px;\n}\n\n#taskChecklist {\n  margin-bottom: 10px;\n}\n\n#taskStatus {\n  font-weight: bold;\n  margin-bottom: 10px;\n}"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLoad: () => (/* binding */ PageLoad)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");


class PageLoad {
    constructor(todoList) {
        this.todoList = todoList;
        this.listsContainer = document.getElementById('lists');
        this.tasksContainer = document.getElementById('tasks');
        this.currentProject = null;
    }

    displayTodoLists() {
        this.clearListsContainer();
        this.clearTasksContainer();

        const inboxProject = this.todoList.getProject('Inbox');

        if (inboxProject) {
            const inboxListElement = document.createElement('div');
            inboxListElement.textContent = inboxProject.name;
            inboxListElement.classList.add('list-item');

            inboxListElement.addEventListener('click', () => {
                this.currentProject = inboxProject;
                this.displayTasks();
            });

            this.listsContainer.appendChild(inboxListElement);

            const projectsTitle = document.createElement('h2');
            projectsTitle.textContent = 'Projects';
            this.listsContainer.appendChild(projectsTitle);
        }

        const otherProjects = this.todoList.projects.filter(project => project.name !== 'Inbox');

        otherProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('list-item');

            const projectName = document.createElement('span');
            projectName.textContent = project.name;
            projectElement.appendChild(projectName);

            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa', 'fa-trash-o');

            deleteIcon.addEventListener('click', () => {
                this.deleteProject(project);
            });

            projectElement.appendChild(deleteIcon);

            projectElement.addEventListener('click', () => {
                this.currentProject = project;
                this.displayTasks();
            });

            this.listsContainer.appendChild(projectElement);
        });

        const addProjectButton = document.createElement('button');
        addProjectButton.textContent = 'Add Project';
        addProjectButton.id = 'add-project-btn';
        addProjectButton.addEventListener('click', () => {
            addProjectButton.style.display = 'none';
            this.displayProjectForm(buttonContainer, addProjectButton);
        });

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(addProjectButton);

        this.listsContainer.appendChild(buttonContainer);
    }

    deleteProject(project) {
        const projectIndex = this.todoList.projects.indexOf(project);
        if (projectIndex !== -1) {
            this.todoList.projects.splice(projectIndex, 1);
            if (this.currentProject === project) {
                this.currentProject = null;
                this.clearTasksContainer();
            }
            this.displayTodoLists();
            this.displayTasks()
            this.todoList.saveTodoList();
        }
    }

    displayTasks() {
        this.clearTasksContainer();

        if (this.currentProject) {
            const projectTitle = document.createElement('h2');
            projectTitle.textContent = this.currentProject.name;
            this.tasksContainer.appendChild(projectTitle);

            this.currentProject.tasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.classList.add('task-item');

                const taskTitle = document.createElement('span');
                taskTitle.textContent = task.title;
                taskElement.appendChild(taskTitle);

                const deleteIcon = document.createElement('i');
                deleteIcon.classList.add('fa', 'fa-trash-o');
                taskElement.appendChild(deleteIcon);

                taskElement.addEventListener('click', () => {
                    this.openTaskDetails(task);
                });

                deleteIcon.addEventListener('click', (event) => {
                    event.stopPropagation();
                    this.deleteTask(task);
                });

                this.tasksContainer.appendChild(taskElement);
            });

            const addButton = document.createElement('button');
            addButton.classList.add('addBtn');
            addButton.textContent = 'Add Task';
            addButton.addEventListener('click', () => {
                this.displayTaskForm();
            });

            this.tasksContainer.appendChild(addButton);
        }
    }

    openTaskDetails(task) {
        const taskModal = document.getElementById('taskModal');
        const taskTitle = document.getElementById('taskTitle');
        const taskDescription = document.getElementById('taskDescription');
        const taskDueDate = document.getElementById('taskDueDate');
        const taskPriority = document.getElementById('taskPriority');
        const taskNotes = document.getElementById('taskNotes');
        const taskChecklist = document.getElementById('taskChecklist');
        const taskStatus = document.getElementById('taskStatus');

        taskTitle.textContent = task.title;
        taskDescription.textContent = task.description;
        taskDueDate.textContent = 'Due Date: ' + task.dueDate;
        taskPriority.textContent = 'Priority: ' + task.priority;
        taskNotes.textContent = 'Notes: ' + task.notes;
        taskChecklist.innerHTML = '';
        task.checklist.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            taskChecklist.appendChild(li);
        });
        taskStatus.textContent = 'Status: ' + task.status;

        taskModal.style.display = 'block';

        const closeBtn = document.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            taskModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === taskModal) {
                taskModal.style.display = 'none';
            }
        });
    }

    deleteTask(task) {
        if (this.currentProject) {
            const taskIndex = this.currentProject.tasks.indexOf(task);
            if (taskIndex > -1) {
                this.currentProject.tasks.splice(taskIndex, 1);
                this.displayTasks();
                console.log('test')
            }
        }
    }

    displayProjectForm(buttonContainer, addTaskButton) {
        this.clearTasksContainer();

        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');

        const nameInput = document.createElement('input');
        nameInput.type = 'text';

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Add';
        submitButton.classList.add('addBtn');

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('cancelBtn');

        formContainer.appendChild(nameInput);
        formContainer.appendChild(submitButton);
        formContainer.appendChild(cancelButton);

        this.listsContainer.appendChild(formContainer);

        submitButton.addEventListener('click', () => {
            const projectName = nameInput.value;

            formContainer.style.display = 'none';

            this.clearTasksContainer();

            buttonContainer.style.display = 'block';
            addTaskButton.style.display = 'block';

            if (projectName.trim() !== '') {
                this.todoList.addProject(projectName);
                this.displayTodoLists();
            }

        });

        cancelButton.addEventListener('click', () => {
            formContainer.style.display = 'none';

            this.clearTasksContainer();

            buttonContainer.style.display = 'block';
            addTaskButton.style.display = 'block';

        });
    }

    displayTaskForm() {
        this.clearTasksContainer();

        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');

        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title:';
        const titleInput = document.createElement('input');
        titleInput.type = 'text';

        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Description:';
        const descriptionInput = document.createElement('textarea');

        const dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Due Date:';
        const dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';

        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority:';
        const priorityInput = document.createElement('select');
        const option1 = document.createElement('option');
        option1.textContent = 'High';
        const option2 = document.createElement('option');
        option2.textContent = 'Medium';
        const option3 = document.createElement('option');
        option3.textContent = 'Low';
        priorityInput.appendChild(option1);
        priorityInput.appendChild(option2);
        priorityInput.appendChild(option3);

        const notesLabel = document.createElement('label');
        notesLabel.textContent = 'Notes:';
        const notesInput = document.createElement('textarea');

        const addButton = document.createElement('button');
        addButton.classList.add('addBtn');
        addButton.textContent = 'Add Task';
        addButton.addEventListener('click', () => {
            const title = titleInput.value;
            const description = descriptionInput.value;
            const dueDate = dueDateInput.value;
            const priority = priorityInput.value;
            const notes = notesInput.value;

            const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate, priority);
            newTask.notes = notes;
            this.currentProject.addTask(newTask);

            titleInput.value = '';
            descriptionInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = '';
            notesInput.value = '';

            this.displayTasks();
        });

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancelBtn');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', () => {
            this.clearTasksContainer();
            this.displayTasks();
        });

        formContainer.appendChild(titleLabel);
        formContainer.appendChild(titleInput);
        formContainer.appendChild(descriptionLabel);
        formContainer.appendChild(descriptionInput);
        formContainer.appendChild(dueDateLabel);
        formContainer.appendChild(dueDateInput);
        formContainer.appendChild(priorityLabel);
        formContainer.appendChild(priorityInput);
        formContainer.appendChild(notesLabel);
        formContainer.appendChild(notesInput);
        formContainer.appendChild(addButton);
        formContainer.appendChild(cancelButton);

        this.tasksContainer.appendChild(formContainer);
    }


    clearListsContainer() {
        this.listsContainer.innerHTML = '';
    }

    clearTasksContainer() {
        this.tasksContainer.innerHTML = '';
    }
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = '';
        this.checklist = [];
        this.status = 'Incomplete';
    }

    markAsComplete() {
        this.status = 'Complete';
    }

    addNote(note) {
        this.notes += note + '\n';
    }

    addChecklistItem(item) {
        this.checklist.push(item);
    }

    removeChecklistItem(index) {
        this.checklist.splice(index, 1);
    }
}


/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodoList: () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



class TodoList {
    constructor() {
        this.projects = [new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project('Inbox')];
        this.loadTodoList();
    }

    addProject(name) {
        const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(name);
        this.projects.push(newProject);
        this.saveTodoList();
    }

    getProject(name) {
        return this.projects.find(project => project.name === name);
    }

    addTaskToProject(projectName, taskDescription, taskDueDate) {
        const project = this.projects.find(project => project.name === projectName);
        if (project) {
            const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task(taskDescription, taskDueDate);
            project.tasks.push(newTask);
        }
    }

    getTasksByProject(projectName) {
        const project = this.projects.find(project => project.name === projectName);
        if (project) {
            return project.tasks;
        }
        return [];
    }

    saveTodoList() {
        const todoListData = this.projects.map(project => ({
          name: project.name,
          tasks: project.tasks.map(task => ({
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            priority: task.priority,
            notes: task.notes,
            checklist: task.checklist,
            status: task.status
          }))
        }));
      
        localStorage.setItem('todoList', JSON.stringify(todoListData));
      }

    loadTodoList() {
        const savedTodoList = localStorage.getItem('todoList');
        const projectsLoaded = localStorage.getItem('projectsLoaded');
      
        if (savedTodoList) {
          const todoListData = JSON.parse(savedTodoList);
          this.projects = todoListData.map(projectData => {
            const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectData.name);
            projectData.tasks.forEach(taskData => {
              const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task(
                taskData.title,
                taskData.description,
                taskData.dueDate,
                taskData.priority,
                taskData.notes,
                taskData.checklist,
                taskData.status
              );
              project.tasks.push(task);
            });
            return project;
          });
        } else if (!projectsLoaded) {
          this.addProject('Work');
          this.addProject('Personal');
          this.addTaskToProject('Work', 'Finish report', '2023-07-10');
          this.addTaskToProject('Work', 'Prepare presentation', '2023-07-12');
          this.addTaskToProject('Personal', 'Go grocery shopping', '2023-07-05');
          this.addTaskToProject('Inbox', 'Task 1', '2023-07-04');
          this.addTaskToProject('Inbox', 'Task 2', '2023-07-05');
      
          localStorage.setItem('projectsLoaded', true);
        }
      }



}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList.js */ "./src/todoList.js");
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");




const todoList = new _todoList_js__WEBPACK_IMPORTED_MODULE_1__.TodoList();


const pageLoad = new _pageLoad_js__WEBPACK_IMPORTED_MODULE_2__.PageLoad(todoList);
pageLoad.displayTodoLists();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLElBQUksSUFBSSxrQkFBa0I7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGdHQUFnRyxJQUFJLElBQUksSUFBSSxtQkFBbUIsaUJBQWlCLG1CQUFtQixlQUFlLHNDQUFzQyxpQkFBaUIsOEJBQThCLG1CQUFtQixHQUFHLGtCQUFrQixpQkFBaUIsa0JBQWtCLHFDQUFxQyw2QkFBNkIsaUNBQWlDLDJCQUEyQixHQUFHLGFBQWEsNEJBQTRCLGlDQUFpQyxrQkFBa0IsMkJBQTJCLGlDQUFpQyxxQkFBcUIsY0FBYyxHQUFHLFlBQVksa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsWUFBWSxrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyxXQUFXLDhCQUE4QixrQkFBa0IsaUNBQWlDLEdBQUcsZ0JBQWdCLDhCQUE4QixrQkFBa0Isd0JBQXdCLG9CQUFvQixrQkFBa0IsbUNBQW1DLEdBQUcsZ0JBQWdCLDhCQUE4QixrQkFBa0Isd0JBQXdCLG9CQUFvQixrQkFBa0IsbUNBQW1DLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLHVCQUF1QixxQkFBcUIsdUJBQXVCLEtBQUssc0JBQXNCLGlCQUFpQixrQkFBa0Isc0NBQXNDLG9CQUFvQixpQkFBaUIscUJBQXFCLDhCQUE4Qix3QkFBd0Isb0JBQW9CLGdCQUFnQixLQUFLLHFCQUFxQixxQkFBcUIsa0JBQWtCLG1DQUFtQyxjQUFjLEdBQUcsYUFBYSx1QkFBdUIsc0NBQXNDLG9CQUFvQixpQkFBaUIscUJBQXFCLDhCQUE4Qix3QkFBd0IsR0FBRyxnQkFBZ0IsdUJBQXVCLHNDQUFzQyxvQkFBb0IsaUJBQWlCLHFCQUFxQiw4QkFBOEIsd0JBQXdCLEdBQUcsMENBQTBDLGVBQWUsaUJBQWlCLHdCQUF3QixxQkFBcUIsd0JBQXdCLGlCQUFpQiw4QkFBOEIsR0FBRyw0QkFBNEIsbUJBQW1CLG9CQUFvQixzQkFBc0IsaUJBQWlCLG9CQUFvQixHQUFHLG1CQUFtQixpQkFBaUIsaUJBQWlCLGtCQUFrQixzQ0FBc0Msb0JBQW9CLGlCQUFpQixxQkFBcUIsd0JBQXdCLG9CQUFvQixlQUFlLEdBQUcsY0FBYyxrQkFBa0Isb0JBQW9CLGtCQUFrQixZQUFZLFdBQVcsZ0JBQWdCLGlCQUFpQixtQkFBbUIseUNBQXlDLEdBQUcsb0JBQW9CLDhCQUE4QixxQkFBcUIsa0JBQWtCLDJCQUEyQix1QkFBdUIscUJBQXFCLEdBQUcsWUFBWSx1QkFBdUIsY0FBYyxnQkFBZ0Isb0JBQW9CLHNCQUFzQixvQkFBb0IsR0FBRyxrQkFBa0IsZUFBZSxHQUFHLFlBQVksa0JBQWtCLG9CQUFvQixrQkFBa0IsWUFBWSxXQUFXLGdCQUFnQixpQkFBaUIsbUJBQW1CLHlDQUF5QyxHQUFHLG9CQUFvQiw4QkFBOEIscUJBQXFCLGtCQUFrQiwyQkFBMkIsdUJBQXVCLHFCQUFxQixHQUFHLFlBQVksdUJBQXVCLGNBQWMsZ0JBQWdCLG9CQUFvQixzQkFBc0Isb0JBQW9CLEdBQUcsa0JBQWtCLGVBQWUsR0FBRyxnQkFBZ0Isb0JBQW9CLHNCQUFzQix3QkFBd0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLG1CQUFtQixzQkFBc0Isd0JBQXdCLEdBQUcsZ0JBQWdCLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxpQkFBaUIsc0JBQXNCLHdCQUF3QixHQUFHLG1CQUFtQjtBQUMva007QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMvUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjhCO0FBQ007QUFDN0I7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyx1Q0FBSTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuVU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNUTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnVDO0FBQ047O0FBRTFCO0FBQ1A7QUFDQSw2QkFBNkIsZ0RBQU87QUFDcEM7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixnREFBTztBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwQ0FBSTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdEQUFPO0FBQ3ZDO0FBQ0EsK0JBQStCLDBDQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7Ozs7O1VDekZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUNBOztBQUV6QyxxQkFBcUIsa0RBQVE7OztBQUc3QixxQkFBcUIsa0RBQVE7QUFDN0IsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs1MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IGF1dG8gMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwN0M3QTQ7XG4gIGNvbG9yOiAjMDdDN0E0O1xufVxuXG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XG4gIHBhZGRpbmc6IDgwcHggNjBweCA4MHB4IDYwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMzBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZ2FwOiAxNXB4O1xufVxuXG4jbGlzdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbiN0YXNrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDRjVFNjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YXNrLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRENGNUU2O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZhLXRyYXNoLW8ge1xuICBjb2xvcjogI0ZGNkE2QTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuI2FkZC1wcm9qZWN0LWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3QzdBNDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcblxufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMjBweDtcbn1cblxuLmFkZEJ0biB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3QzdBNDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNhbmNlbEJ0biB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNkE2QTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgd2lkdGg6IDk4JTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQ0Y1RTY7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN0YXNrcyBidXR0b24ge1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNTAlO1xufVxuXG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbiN0YXNrVGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jdGFza0Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3Rhc2tEdWVEYXRlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4jdGFza1ByaW9yaXR5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiN0YXNrTm90ZXMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jdGFza0NoZWNrbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiN0YXNrU3RhdHVzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwi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QUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzUwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogYXV0byAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwN0M3QTQ7XFxuICBjb2xvcjogIzA3QzdBNDtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XFxuICBwYWRkaW5nOiA4MHB4IDYwcHggODBweCA2MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDMwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jbGlzdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiN0YXNrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcbn1cXG5cXG4ubGlzdC1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQ0Y1RTY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDRjVFNjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZhLXRyYXNoLW8ge1xcbiAgY29sb3I6ICNGRjZBNkE7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcblxcbiNhZGQtcHJvamVjdC1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdDN0E0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5hZGRCdG4ge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwN0M3QTQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FuY2VsQnRuIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2QTZBO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICB3aWR0aDogOTglO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDRjVFNjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFza3MgYnV0dG9uIHtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxMCUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMTAlIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxufVxcblxcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuI3Rhc2tUaXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiN0YXNrRGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3Rhc2tEdWVEYXRlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI3Rhc2tQcmlvcml0eSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiN0YXNrTm90ZXMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3Rhc2tDaGVja2xpc3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3Rhc2tTdGF0dXMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5leHBvcnQgY2xhc3MgUGFnZUxvYWQge1xuICAgIGNvbnN0cnVjdG9yKHRvZG9MaXN0KSB7XG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSB0b2RvTGlzdDtcbiAgICAgICAgdGhpcy5saXN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0cycpO1xuICAgICAgICB0aGlzLnRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBudWxsO1xuICAgIH1cblxuICAgIGRpc3BsYXlUb2RvTGlzdHMoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJMaXN0c0NvbnRhaW5lcigpO1xuICAgICAgICB0aGlzLmNsZWFyVGFza3NDb250YWluZXIoKTtcblxuICAgICAgICBjb25zdCBpbmJveFByb2plY3QgPSB0aGlzLnRvZG9MaXN0LmdldFByb2plY3QoJ0luYm94Jyk7XG5cbiAgICAgICAgaWYgKGluYm94UHJvamVjdCkge1xuICAgICAgICAgICAgY29uc3QgaW5ib3hMaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5ib3hMaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IGluYm94UHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgaW5ib3hMaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcblxuICAgICAgICAgICAgaW5ib3hMaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gaW5ib3hQcm9qZWN0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5saXN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbmJveExpc3RFbGVtZW50KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICBwcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICAgICAgICAgIHRoaXMubGlzdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNUaXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvdGhlclByb2plY3RzID0gdGhpcy50b2RvTGlzdC5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgIT09ICdJbmJveCcpO1xuXG4gICAgICAgIG90aGVyUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZmEnLCAnZmEtdHJhc2gtbycpO1xuXG4gICAgICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5pZCA9ICdhZGQtcHJvamVjdC1idG4nO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5UHJvamVjdEZvcm0oYnV0dG9uQ29udGFpbmVyLCBhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICB0aGlzLmxpc3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHRoaXMudG9kb0xpc3QucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgaWYgKHByb2plY3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0xpc3QucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJUYXNrc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VG9kb0xpc3RzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUYXNrcygpXG4gICAgICAgICAgICB0aGlzLnRvZG9MaXN0LnNhdmVUb2RvTGlzdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheVRhc2tzKCkge1xuICAgICAgICB0aGlzLmNsZWFyVGFza3NDb250YWluZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UHJvamVjdCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuY3VycmVudFByb2plY3QubmFtZTtcbiAgICAgICAgICAgIHRoaXMudGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJvamVjdC50YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgICAgICAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhJywgJ2ZhLXRyYXNoLW8nKTtcbiAgICAgICAgICAgICAgICB0YXNrRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgICAgICAgICAgICAgIHRhc2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5UYXNrRGV0YWlscyh0YXNrKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ0bicpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlUYXNrRm9ybSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMudGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5UYXNrRGV0YWlscyh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTW9kYWwnKTtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUaXRsZScpO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEdWVEYXRlJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tOb3RlcycpO1xuICAgICAgICBjb25zdCB0YXNrQ2hlY2tsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tDaGVja2xpc3QnKTtcbiAgICAgICAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3RhdHVzJyk7XG5cbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICcgKyB0YXNrLmR1ZURhdGU7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJyArIHRhc2sucHJpb3JpdHk7XG4gICAgICAgIHRhc2tOb3Rlcy50ZXh0Q29udGVudCA9ICdOb3RlczogJyArIHRhc2subm90ZXM7XG4gICAgICAgIHRhc2tDaGVja2xpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhc2suY2hlY2tsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgICAgIHRhc2tDaGVja2xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFza1N0YXR1cy50ZXh0Q29udGVudCA9ICdTdGF0dXM6ICcgKyB0YXNrLnN0YXR1cztcblxuICAgICAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0YXNrTW9kYWwpIHtcbiAgICAgICAgICAgICAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayh0YXNrKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQcm9qZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrSW5kZXggPSB0aGlzLmN1cnJlbnRQcm9qZWN0LnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgICAgICBpZiAodGFza0luZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheVByb2plY3RGb3JtKGJ1dHRvbkNvbnRhaW5lciwgYWRkVGFza0J1dHRvbikge1xuICAgICAgICB0aGlzLmNsZWFyVGFza3NDb250YWluZXIoKTtcblxuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRCdG4nKTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxCdG4nKTtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIHRoaXMubGlzdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuYW1lSW5wdXQudmFsdWU7XG5cbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgdGhpcy5jbGVhclRhc2tzQ29udGFpbmVyKCk7XG5cbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlUb2RvTGlzdHMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIHRoaXMuY2xlYXJUYXNrc0NvbnRhaW5lcigpO1xuXG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc3BsYXlUYXNrRm9ybSgpIHtcbiAgICAgICAgdGhpcy5jbGVhclRhc2tzQ29udGFpbmVyKCk7XG5cbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjEudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uMi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbjMudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24xKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24yKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24zKTtcblxuICAgICAgICBjb25zdCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbm90ZXNMYWJlbC50ZXh0Q29udGVudCA9ICdOb3RlczonO1xuICAgICAgICBjb25zdCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ0bicpO1xuICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3Qgbm90ZXMgPSBub3Rlc0lucHV0LnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgICAgICBuZXdUYXNrLm5vdGVzID0gbm90ZXM7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XG5cbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgbm90ZXNJbnB1dC52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbEJ0bicpO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhclRhc2tzQ29udGFpbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc0xhYmVsKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgdGhpcy50YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgICB9XG5cblxuICAgIGNsZWFyTGlzdHNDb250YWluZXIoKSB7XG4gICAgICAgIHRoaXMubGlzdHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgY2xlYXJUYXNrc0NvbnRhaW5lcigpIHtcbiAgICAgICAgdGhpcy50YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLm5vdGVzID0gJyc7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0ID0gW107XG4gICAgICAgIHRoaXMuc3RhdHVzID0gJ0luY29tcGxldGUnO1xuICAgIH1cblxuICAgIG1hcmtBc0NvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLnN0YXR1cyA9ICdDb21wbGV0ZSc7XG4gICAgfVxuXG4gICAgYWRkTm90ZShub3RlKSB7XG4gICAgICAgIHRoaXMubm90ZXMgKz0gbm90ZSArICdcXG4nO1xuICAgIH1cblxuICAgIGFkZENoZWNrbGlzdEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLmNoZWNrbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJlbW92ZUNoZWNrbGlzdEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jaGVja2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2suanMnO1xuXG5leHBvcnQgY2xhc3MgVG9kb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW25ldyBQcm9qZWN0KCdJbmJveCcpXTtcbiAgICAgICAgdGhpcy5sb2FkVG9kb0xpc3QoKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHRoaXMuc2F2ZVRvZG9MaXN0KCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xuICAgIH1cblxuICAgIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUpO1xuICAgICAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGFza3NCeVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2plY3QudGFza3M7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHNhdmVUb2RvTGlzdCgpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3REYXRhID0gdGhpcy5wcm9qZWN0cy5tYXAocHJvamVjdCA9PiAoe1xuICAgICAgICAgIG5hbWU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICB0YXNrczogcHJvamVjdC50YXNrcy5tYXAodGFzayA9PiAoe1xuICAgICAgICAgICAgdGl0bGU6IHRhc2sudGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZURhdGU6IHRhc2suZHVlRGF0ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiB0YXNrLnByaW9yaXR5LFxuICAgICAgICAgICAgbm90ZXM6IHRhc2subm90ZXMsXG4gICAgICAgICAgICBjaGVja2xpc3Q6IHRhc2suY2hlY2tsaXN0LFxuICAgICAgICAgICAgc3RhdHVzOiB0YXNrLnN0YXR1c1xuICAgICAgICAgIH0pKVxuICAgICAgICB9KSk7XG4gICAgICBcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3REYXRhKSk7XG4gICAgICB9XG5cbiAgICBsb2FkVG9kb0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkVG9kb0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHNMb2FkZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHNMb2FkZWQnKTtcbiAgICAgIFxuICAgICAgICBpZiAoc2F2ZWRUb2RvTGlzdCkge1xuICAgICAgICAgIGNvbnN0IHRvZG9MaXN0RGF0YSA9IEpTT04ucGFyc2Uoc2F2ZWRUb2RvTGlzdCk7XG4gICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRvZG9MaXN0RGF0YS5tYXAocHJvamVjdERhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3REYXRhLm5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdERhdGEudGFza3MuZm9yRWFjaCh0YXNrRGF0YSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcbiAgICAgICAgICAgICAgICB0YXNrRGF0YS50aXRsZSxcbiAgICAgICAgICAgICAgICB0YXNrRGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB0YXNrRGF0YS5kdWVEYXRlLFxuICAgICAgICAgICAgICAgIHRhc2tEYXRhLnByaW9yaXR5LFxuICAgICAgICAgICAgICAgIHRhc2tEYXRhLm5vdGVzLFxuICAgICAgICAgICAgICAgIHRhc2tEYXRhLmNoZWNrbGlzdCxcbiAgICAgICAgICAgICAgICB0YXNrRGF0YS5zdGF0dXNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghcHJvamVjdHNMb2FkZWQpIHtcbiAgICAgICAgICB0aGlzLmFkZFByb2plY3QoJ1dvcmsnKTtcbiAgICAgICAgICB0aGlzLmFkZFByb2plY3QoJ1BlcnNvbmFsJyk7XG4gICAgICAgICAgdGhpcy5hZGRUYXNrVG9Qcm9qZWN0KCdXb3JrJywgJ0ZpbmlzaCByZXBvcnQnLCAnMjAyMy0wNy0xMCcpO1xuICAgICAgICAgIHRoaXMuYWRkVGFza1RvUHJvamVjdCgnV29yaycsICdQcmVwYXJlIHByZXNlbnRhdGlvbicsICcyMDIzLTA3LTEyJyk7XG4gICAgICAgICAgdGhpcy5hZGRUYXNrVG9Qcm9qZWN0KCdQZXJzb25hbCcsICdHbyBncm9jZXJ5IHNob3BwaW5nJywgJzIwMjMtMDctMDUnKTtcbiAgICAgICAgICB0aGlzLmFkZFRhc2tUb1Byb2plY3QoJ0luYm94JywgJ1Rhc2sgMScsICcyMDIzLTA3LTA0Jyk7XG4gICAgICAgICAgdGhpcy5hZGRUYXNrVG9Qcm9qZWN0KCdJbmJveCcsICdUYXNrIDInLCAnMjAyMy0wNy0wNScpO1xuICAgICAgXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzTG9hZGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgVG9kb0xpc3QgfSBmcm9tICcuL3RvZG9MaXN0LmpzJztcbmltcG9ydCB7IFBhZ2VMb2FkIH0gZnJvbSAnLi9wYWdlTG9hZC5qcyc7XG5cbmNvbnN0IHRvZG9MaXN0ID0gbmV3IFRvZG9MaXN0KCk7XG5cblxuY29uc3QgcGFnZUxvYWQgPSBuZXcgUGFnZUxvYWQodG9kb0xpc3QpO1xucGFnZUxvYWQuZGlzcGxheVRvZG9MaXN0cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
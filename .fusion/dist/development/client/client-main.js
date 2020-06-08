(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/app.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/app.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a199c1badaa6bf93422ea4a9db1b352e.css";

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/index.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/index.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6be6c2aec87df78d3f11a55bab446e14.css";

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "./node_modules/fusion-react/dist/browser.es2017.es.js");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist-browser-esm/index.js");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/fusion-plugin-styletron-react/dist-browser-esm/index.js");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-plugin-react-helmet-async */ "./node_modules/fusion-plugin-react-helmet-async/dist-browser-esm/index.js");
/* harmony import */ var _plugins_core_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/core/database */ "./src/plugins/core/database.js");
/* harmony import */ var _plugins_home_api_question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/home/api/question */ "./src/plugins/home/api/question.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root.js */ "./src/root.js");







/* harmony default export */ __webpack_exports__["default"] = (() => {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0__["default"](_root_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

  if (false) {}

  app.register(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3__["default"]);
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__["default"]);
  app.register(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return app;
});

/***/ }),

/***/ "./src/pages/home-xxx.js":
/*!*******************************!*\
  !*** ./src/pages/home-xxx.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "./node_modules/styletron-react/dist/browser.es2017.es.js");
var _jsxFileName = "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/src/pages/home-xxx.js";


const Center = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
});
Center.displayName = "Center";
const FusionStyle = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  fontSize: '80px',
  color: 'rgba(0,0,0,.8)',
  paddingRight: '30px',
  display: 'flex'
});
FusionStyle.displayName = "FusionStyle";
const FullHeightDiv = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  height: '100%',
  backgroundColor: '#FFFFFF'
});
FullHeightDiv.displayName = "FullHeightDiv";
const Circle = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  height: '180px',
  width: '180px',
  marginTop: '20px',
  backgroundColor: 'white',
  ':hover': {
    backgroundColor: '#f0f8fa'
  },
  border: '10px solid #4db5d9',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
Circle.displayName = "Circle";
const GettingStartedLink = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('a', {
  textDecoration: 'none',
  color: '#4db5d9',
  fontSize: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%'
});
GettingStartedLink.displayName = "GettingStartedLink";

const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FullHeightDiv, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "\n        html,body,#root{height:100%;}\n        html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}\n        body{margin:0;}\n        button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}\n        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}\n        "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FusionStyle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, "Fusion.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GettingStartedLink, {
  href: "https://fusionjs.com/docs/overview",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, "Let's Get Started")))));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/pageNotFound.js":
/*!***********************************!*\
  !*** ./src/pages/pageNotFound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist-browser-esm/index.js");
var _jsxFileName = "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/src/pages/pageNotFound.js";



const PageNotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["NotFound"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "404"));

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/plugins/core/database.js":
/*!**************************************!*\
  !*** ./src/plugins/core/database.js ***!
  \**************************************/
/*! exports provided: DatabaseToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseToken", function() { return DatabaseToken; });
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "./node_modules/fusion-core/dist/browser.es2017.es.js");

const DatabaseToken = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createToken"])('DatabaseToken');

var _default =
/*#__PURE__*/
Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  provides: () => {
    const DataStore = __webpack_require__(/*! nedb */ "./node_modules/nedb/index.js");

    return {
      questions: () => {
        const db = new DataStore({
          filename: './database/questions.db',
          autoload: true
        });
        return db;
      },
      rules: () => {
        const db = new DataStore({
          filename: '../../../database/rules.db',
          autoload: true
        });
        return db;
      }
    };
  }
});

/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ }),

/***/ "./src/plugins/home/api/question.js":
/*!******************************************!*\
  !*** ./src/plugins/home/api/question.js ***!
  \******************************************/
/*! exports provided: QuestionAPIToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAPIToken", function() { return QuestionAPIToken; });
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "./node_modules/fusion-core/dist/browser.es2017.es.js");
/* harmony import */ var _core_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/database */ "./src/plugins/core/database.js");


const QuestionAPIToken = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createToken"])('QuestionAPIToken');

var _default =
/*#__PURE__*/
Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  deps: {
    db: _core_database__WEBPACK_IMPORTED_MODULE_1__["DatabaseToken"]
  },
  provides: ({
    db
  }) => ({
    questions: db.questions()
  }),
  middleware: ({
    db
  }, {
    questions
  }) => async (ctx, next) => {
    if (ctx.path === '/api/questions') {
      if (ctx.method === 'POST') {
        const rules = [];
        rules.push({
          number: 1,
          code: 'Tis',
          question: 'Is the tumor in situ ?',
          answers: {
            true: 'Tis',
            false: '2'
          },
          type: 'doctor'
        }, {
          number: 2,
          code: 'T1',
          question: 'Is the tumor thickness less than equeal 1.0 mm ?',
          answers: {
            true: '3',
            false: '5'
          },
          type: 'doctor'
        }, {
          number: 3,
          code: 'T1a',
          question: 'Is the tumor tickness less than 0.8 mm and without ulceration ?',
          answers: {
            true: 'T1a',
            false: 'T1b'
          },
          type: 'doctor'
        }, {
          number: 5,
          code: 'T2',
          question: 'Is the tumor thickness between 1.0 mm and 2.0 mm ?',
          answers: {
            true: '6',
            false: '7'
          },
          type: 'doctor'
        }, {
          number: 6,
          code: '',
          question: 'Is there any ulceration ?',
          answers: {
            true: 'T2b',
            false: 'T2a'
          },
          type: 'doctor'
        }, {
          number: 7,
          code: 'T3',
          question: 'Is the tumor thickness between 2.0 mm and 4.0 mm ?',
          answers: {
            true: '9',
            false: '8'
          },
          type: 'doctor'
        }, {
          number: 8,
          code: '',
          question: 'Is there any ulceration ?',
          answers: {
            true: 'T3b',
            false: 'T3a'
          },
          type: 'doctor'
        }, {
          number: 9,
          code: 'T4',
          question: 'Is the tumor thickness more than 4.0 ?',
          answers: {
            true: '10',
            false: '10'
          },
          type: 'doctor'
        }, {
          number: 10,
          code: '',
          question: 'Is there any ulceration ?',
          answers: {
            true: 'T4b',
            false: 'T4a'
          },
          type: 'doctor'
        }, {
          number: 11,
          code: 'N0',
          question: 'Is there any regional lymph nodes metastases detected ?',
          answers: {
            true: '12',
            false: 'N0'
          },
          type: 'doctor'
        }, {
          number: 12,
          code: 'N1',
          question: 'Is there one tumor involved nodes ?',
          answers: {
            true: 'N1',
            false: '13'
          },
          type: 'doctor'
        }, {
          number: 13,
          code: 'N2',
          question: 'Are there 2 or 3 tumors involved nodes ?',
          answers: {
            true: 'N2',
            false: 'N3'
          },
          type: 'doctor'
        }, {
          number: 15,
          code: 'M0',
          question: 'Is there evidence of distance metastases ?',
          answers: {
            true: 'M1',
            false: 'M0'
          },
          type: 'doctor'
        });
        const newData = await questions.insert(rules);
        console.log('newData', newData);
        ctx.response.status = 201;
        ctx.response.body = newData;
      }
    }

    return next();
  }
});

/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ }),

/***/ "./src/plugins/home/components/main.js":
/*!*********************************************!*\
  !*** ./src/plugins/home/components/main.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/src/plugins/home/components/main.js";




const Home = () => {
  const handleOnClick = async () => {
    const data = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()('/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('data', data);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClick: handleOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Click Here"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/root.js":
/*!*********************!*\
  !*** ./src/root.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "./node_modules/fusion-core/dist/browser.es2017.es.js");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-react-router */ "./node_modules/fusion-plugin-react-router/dist-browser-esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/collections/Menu/Menu.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/elements/Container/Container.js");
/* harmony import */ var _pages_home_xxx_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home-xxx.js */ "./src/pages/home-xxx.js");
/* harmony import */ var _plugins_home_components_main_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plugins/home/components/main.js */ "./src/plugins/home/components/main.js");
/* harmony import */ var _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/pageNotFound.js */ "./src/pages/pageNotFound.js");
var _jsxFileName = "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/src/root.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const cssBasic = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["assetUrl"])(__webpack_require__(/*! __SECRET_FILE_LOADER__?assetUrl=true!../node_modules/semantic-ui-css/semantic.min.css */ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./node_modules/semantic-ui-css/semantic.min.css"));
const cssLayoutBasic = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["assetUrl"])(__webpack_require__(/*! __SECRET_FILE_LOADER__?assetUrl=true!./css/index.css */ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/index.css"));
const cssLayout = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["assetUrl"])(__webpack_require__(/*! __SECRET_FILE_LOADER__?assetUrl=true!./css/app.css */ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/app.css"));

class MobileMenuItems extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      dropdownMenuStyle: {
        display: "none"
      }
    });

    _defineProperty(this, "handleToggleDropdownMenu", () => {
      let newState = Object.assign({}, this.state);

      if (newState.dropdownMenuStyle.display === "none") {
        newState.dropdownMenuStyle = {
          display: "flex"
        };
      } else {
        newState.dropdownMenuStyle = {
          display: "none"
        };
      }

      this.setState(newState);
    });

    _defineProperty(this, "render", () => {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        padded: true,
        className: "mobile only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        borderless: true,
        fluid: true,
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
        header: true,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Project Name"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
        icon: true,
        basic: true,
        toggle: true,
        onClick: this.handleToggleDropdownMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        vertical: true,
        borderless: true,
        fluid: true,
        style: this.state.dropdownMenuStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
        active: true,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
        text: "Dropdown",
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Action"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Another action"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Something else here"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Navbar header"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Seperated link"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["default"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "One more seperated link"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Default"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
        active: true,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Static top"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Fixed top"))));
    });
  }

}

const MenuItems = () => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
  padded: true,
  className: "tablet computer only",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
  borderless: true,
  fluid: true,
  size: "huge",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
  header: true,
  as: "a",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "Melanoma App"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, "Home")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/predict",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, "Predict")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, "Info")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, "About")))));

const DynamicContent = () => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/",
  component: _plugins_home_components_main_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/home2",
  component: _pages_home_xxx_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  component: _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}));

class App extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
      rel: "stylesheet",
      href: cssBasic,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
      rel: "stylesheet",
      href: cssLayoutBasic,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
      rel: "stylesheet",
      href: cssLayout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MenuItems, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MobileMenuItems, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "dynamic-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DynamicContent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}));

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/fusion-cli/entries/client-public-path.js (webpack)-hot-middleware/client.js?name=client ./node_modules/fusion-cli/entries/client-entry.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-cli/entries/client-public-path.js */"./node_modules/fusion-cli/entries/client-public-path.js");
__webpack_require__(/*! /Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/webpack-hot-middleware/client.js?name=client */"./node_modules/webpack-hot-middleware/client.js?name=client");
module.exports = __webpack_require__(/*! /Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-cli/entries/client-entry.js */"./node_modules/fusion-cli/entries/client-entry.js");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=client-main.js.map
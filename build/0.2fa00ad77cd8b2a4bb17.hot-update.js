exports.id = 0;
exports.modules = {

/***/ "./src/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom_Route__ = __webpack_require__("react-router-dom/Route");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom_Route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom_Route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Switch__ = __webpack_require__("react-router-dom/Switch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home__ = __webpack_require__("./src/Home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App_css__ = __webpack_require__("./src/App.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__App_css__);
var _jsxFileName = '/Users/kwawrzecki/Documents/react-month-select/src/App.js';






var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_router_dom_Switch___default.a,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom_Route___default.a, { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__Home__["a" /* default */], __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_MonthPicker_MonthPicker__ = __webpack_require__("./src/components/MonthPicker/MonthPicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_MonthPicker_MonthButton__ = __webpack_require__("./src/components/MonthPicker/MonthButton.js");





var _jsxFileName = '/Users/kwawrzecki/Documents/react-month-select/src/Home.js';




var Home = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _Component);

  function Home() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { style: { margin: '30px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_MonthPicker_MonthPicker__["a" /* default */], { button: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_MonthPicker_MonthButton__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            }), locale: 'en', __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          })
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ "./src/components/MonthPicker/MonthButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = '/Users/kwawrzecki/Documents/react-month-select/src/components/MonthPicker/MonthButton.js';



var MonthButton = function MonthButton(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'button',
    { onClick: props.onClick, __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    props.title
  );
};

MonthButton.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

/* harmony default export */ __webpack_exports__["a"] = (MonthButton);

/***/ }),

/***/ "./src/components/MonthPicker/MonthPicker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MonthPickerContainer__ = __webpack_require__("./src/components/MonthPicker/MonthPickerContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__MonthPickerNav__ = __webpack_require__("./src/components/MonthPicker/MonthPickerNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MonthPickerNavItem__ = __webpack_require__("./src/components/MonthPicker/MonthPickerNavItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__MonthPickerMonthItem__ = __webpack_require__("./src/components/MonthPicker/MonthPickerMonthItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__MonthPickerBodyContainer__ = __webpack_require__("./src/components/MonthPicker/MonthPickerBodyContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__MonthPickerDropDown__ = __webpack_require__("./src/components/MonthPicker/MonthPickerDropDown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__MonthPickerDropDownContainer__ = __webpack_require__("./src/components/MonthPicker/MonthPickerDropDownContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__WatchDocumentEvents__ = __webpack_require__("./src/components/MonthPicker/WatchDocumentEvents.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__NavButton__ = __webpack_require__("./src/components/MonthPicker/NavButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_generate_months__ = __webpack_require__("./src/components/MonthPicker/utils/generate-months.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__utils_generate_years__ = __webpack_require__("./src/components/MonthPicker/utils/generate-years.js");





var _jsxFileName = '/Users/kwawrzecki/Documents/react-month-select/src/components/MonthPicker/MonthPicker.js';














var MonthPicker = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MonthPicker, _React$Component);

  function MonthPicker(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MonthPicker);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MonthPicker.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MonthPicker)).call(this, props));

    _this.monthSelect = function (month, year) {
      return function () {
        _this.setState({ selected: { month: month, year: year } });
        if (_this.props.handleMonthSelect) {
          _this.prop.handleMonthSelect(month, year);
        }
        _this.toggle();
      };
    };

    _this.next = function () {
      if (_this.state.activeIndex < _this.state.years.length - 1) {
        _this.setState({ activeIndex: _this.state.activeIndex + 1 });
      }
    };

    _this.prev = function () {
      if (_this.state.activeIndex >= 1) {
        _this.setState({ activeIndex: _this.state.activeIndex - 1 });
      }
    };

    _this.toggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    var years = Object(__WEBPACK_IMPORTED_MODULE_17__utils_generate_years__["a" /* default */])();
    var months = Object(__WEBPACK_IMPORTED_MODULE_16__utils_generate_months__["a" /* default */])(_this.props.locale);
    _this.state = {
      months: months,
      years: years,
      activeIndex: years.length - 1,
      open: false,
      selected: { month: months[0], year: years[years.length - 1] }
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MonthPicker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var newButton = Object(__WEBPACK_IMPORTED_MODULE_5_react__["cloneElement"])(this.props.button, {
        onClick: this.toggle,
        title: this.state.selected.month.fullName + ' ' + this.state.selected.year
      });
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12__MonthPickerDropDown__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        newButton,
        this.state.open && __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_13__MonthPickerDropDownContainer__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_14__WatchDocumentEvents__["a" /* default */],
            { onClickOutside: this.toggle, onEscapeKey: this.toggle, __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__MonthPickerContainer__["a" /* default */],
              { onKeyUp: this.toggle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8__MonthPickerNav__["a" /* default */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9__MonthPickerNavItem__["a" /* default */],
                  { order: 1, grow: 0, onClick: this.prev, role: 'button', button: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__NavButton__["a" /* default */], { prev: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9__MonthPickerNavItem__["a" /* default */],
                  { order: 2, grow: 3, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 67
                    }
                  },
                  this.state.years[this.state.activeIndex]
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9__MonthPickerNavItem__["a" /* default */],
                  { order: 3, grow: 0, onClick: this.next, role: 'button', button: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__NavButton__["a" /* default */], {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_11__MonthPickerBodyContainer__["a" /* default */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                },
                this.state.months.map(function (month) {
                  return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_10__MonthPickerMonthItem__["a" /* default */],
                    {
                      key: month.number,
                      basis: '50px',
                      onClick: _this2.monthSelect(month, _this2.state.years[_this2.state.activeIndex]),
                      title: month.fullName,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 78
                      }
                    },
                    month.name
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);

  return MonthPicker;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

MonthPicker.propTypes = {
  locale: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string.isRequired,
  handleMonthSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  button: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (MonthPicker);

/***/ }),

/***/ "./src/components/MonthPicker/NavButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = '/Users/kwawrzecki/Documents/react-month-select/src/components/MonthPicker/NavButton.js';



var NavButton = function NavButton(props) {
  var icon = props.prev ? '<' : '>';
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'i',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    icon
  );
};

NavButton.propTypes = {
  prev: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (NavButton);

/***/ }),

/***/ "./src/components/MonthPicker/WatchDocumentEvents.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);





var _jsxFileName = '/Users/kwawrzecki/Documents/react-month-select/src/components/MonthPicker/WatchDocumentEvents.js';



var WatchDocumentEvents = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(WatchDocumentEvents, _React$Component);

  function WatchDocumentEvents() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, WatchDocumentEvents);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = WatchDocumentEvents.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(WatchDocumentEvents)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var _this2 = _this,
          container = _this2.container;
      var onClickOutside = _this.props.onClickOutside;
      var target = event.target;

      if (typeof onClickOutside !== 'function') {
        return;
      }

      // if target is container - container was not clicked outside
      // if container contains clicked target - click was not outside of it
      if (target !== container && !container.contains(target)) {
        onClickOutside(event); // clicked outside - fire callback
      }
    }, _this.handleKeyUp = function (event) {
      var onEscapeKey = _this.props.onEscapeKey;

      if (typeof onEscapeKey !== 'function') {
        return;
      }
      if (event.keyCode === 27) {
        onEscapeKey(event);
      }
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(WatchDocumentEvents, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('click', this.handleClick);
      document.addEventListener('keyup', this.handleKeyUp);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // remember to remove all events to avoid memory leaks
      document.removeEventListener('click', this.handleClick);
      document.removeEventListener('keyup', this.handleKeyUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { ref: function ref(el) {
            _this3.container = el;
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        this.props.children
      );
    }
  }]);

  return WatchDocumentEvents;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

WatchDocumentEvents.propTypes = {
  onClickOutside: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  onEscapeKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node
};

/* harmony default export */ __webpack_exports__["a"] = (WatchDocumentEvents);

/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App__ = __webpack_require__("./src/App.js");
var _jsxFileName = '/Users/kwawrzecki/Documents/react-month-select/src/server.js';






var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_2_express___default()();
server.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static("/Users/kwawrzecki/Documents/react-month-select/public")).get('/*', function (req, res) {
  var context = {};
  var markup = Object(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["StaticRouter"],
    { context: context, location: req.url, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__App__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    })
  ));

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send('<!doctype html>\n    <html lang="">\n    <head>\n        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />\n        <meta charSet=\'utf-8\' />\n        <title>Welcome to Razzle</title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        ' + (assets.client.css ? '<link rel="stylesheet" href="' + assets.client.css + '">' : '') + '\n        ' + ( false ? '<script src="' + assets.client.js + '" defer></script>' : '<script src="' + assets.client.js + '" defer crossorigin></script>') + '\n    </head>\n    <body>\n        <div id="root">' + markup + '</div>\n    </body>\n</html>');
  }
});

/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

};
//# sourceMappingURL=0.2fa00ad77cd8b2a4bb17.hot-update.js.map
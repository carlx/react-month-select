exports.id = 0;
exports.modules = {

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
      // if there is no proper callback - no point of checking

      if (typeof onClickOutside !== 'function') {
        return;
      }

      // if target is container - container was not clicked outside
      // if container contains clicked target - click was not outside of it
      if (target !== container && !container.contains(target)) {
        onClickOutside(event); // clicked outside - fire callback
      }
    }, _this.handleKeyUp = function (event) {
      console.log(event);
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
            return _this3.container = el;
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        },
        this.props.children
      );
    }
  }]);

  return WatchDocumentEvents;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (WatchDocumentEvents);

/***/ })

};
//# sourceMappingURL=0.b17526ffbcff79495e5f.hot-update.js.map

          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _MyLayout = __webpack_require__(543);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = __webpack_require__(538);

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _PostLink = __webpack_require__(544);

var _PostLink2 = _interopRequireDefault(_PostLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/adarshsingh1407/workspaceABCD/next-js-noob/pages/index.js?entry';


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_MyLayout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'My Blog'), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_PostLink2.default, { id: 'hello-nextjs', title: 'Hello NextJS', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(_PostLink2.default, { id: 'hello-adarsh', title: 'Hello Adarsh', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement(_PostLink2.default, { id: 'hello-kanika', title: 'Hello Kanika', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/adarshsingh1407/workspaceABCD/next-js-noob/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/adarshsingh1407/workspaceABCD/next-js-noob/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _link = __webpack_require__(538);

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/adarshsingh1407/workspaceABCD/next-js-noob/components/Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var linkStyle = {
        marginRight: 15
      };
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('a', { style: linkStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'Home')), _react2.default.createElement(_link2.default, { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('a', { style: linkStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'About')));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/adarshsingh1407/workspaceABCD/next-js-noob/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/adarshsingh1407/workspaceABCD/next-js-noob/components/Header.js"); } } })();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(542);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/adarshsingh1407/workspaceABCD/next-js-noob/components/MyLayout.js';


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/adarshsingh1407/workspaceABCD/next-js-noob/components/MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/adarshsingh1407/workspaceABCD/next-js-noob/components/MyLayout.js"); } } })();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(538);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/adarshsingh1407/workspaceABCD/next-js-noob/components/PostLink.js';


var PostLink = function (_Component) {
  (0, _inherits3.default)(PostLink, _Component);

  function PostLink(props) {
    (0, _classCallCheck3.default)(this, PostLink);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PostLink.__proto__ || (0, _getPrototypeOf2.default)(PostLink)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(PostLink, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('li', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_link2.default, { as: '/p/' + this.props.id + '?title=' + this.props.title, href: '/post?id=' + this.props.id + '&title=' + this.props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, this.props.id)));
    }
  }]);

  return PostLink;
}(_react.Component);

exports.default = PostLink;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/adarshsingh1407/workspaceABCD/next-js-noob/components/PostLink.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/adarshsingh1407/workspaceABCD/next-js-noob/components/PostLink.js"); } } })();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(539);


/***/ })

},[545]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzlkZDBmMzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/OWRkMGYzMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzlkZDBmMzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0TGluay5qcz85ZGQwZjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQb3N0TGluayBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RMaW5rJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIFx0c3VwZXIocHJvcHMpO1xuICBcdHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0anNcIiB0aXRsZT1cIkhlbGxvIE5leHRKU1wiLz5cbiAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1hZGFyc2hcIiB0aXRsZT1cIkhlbGxvIEFkYXJzaFwiLz5cbiAgICAgICAgICA8UG9zdExpbmsgaWQ9XCJoZWxsby1rYW5pa2FcIiB0aXRsZT1cIkhlbGxvIEthbmlrYVwiLz5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICBcdHN1cGVyKHByb3BzKTtcbiAgXHR0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgbGlua1N0eWxlID0ge1xuICAgICAgbWFyZ2luUmlnaHQ6IDE1XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICBtYXJnaW46IDIwLFxuICBwYWRkaW5nOiAyMCxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXG59XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgPEhlYWRlciAvPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIFBvc3RMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBhcz17YC9wLyR7dGhpcy5wcm9wcy5pZH0/dGl0bGU9JHt0aGlzLnByb3BzLnRpdGxlfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3RoaXMucHJvcHMuaWR9JnRpdGxlPSR7dGhpcy5wcm9wcy50aXRsZX1gfT5cbiAgICAgICAgICA8YT57dGhpcy5wcm9wcy5pZH08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlua1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qb3N0TGluay5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7Ozs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFHQTtBQUZBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        

          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports =
webpackJsonp([6],{

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

/***/ 546:
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

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/adarshsingh1407/workspaceABCD/next-js-noob/pages/post.js?entry';


var Post = function (_Component) {
  (0, _inherits3.default)(Post, _Component);

  function Post(props) {
    (0, _classCallCheck3.default)(this, Post);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Post, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_MyLayout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.props.url.query.id), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'This is the blog post content for ', this.props.url.query.title, '.'));
    }
  }]);

  return Post;
}(_react.Component);

exports.default = Post;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/adarshsingh1407/workspaceABCD/next-js-noob/pages/post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/adarshsingh1407/workspaceABCD/next-js-noob/pages/post.js"); } } })();
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
    })(module.exports.default || module.exports, "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(546);


/***/ })

},[547]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9wb3N0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/Yzk0ZGNlNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzP2M5NGRjZTYiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcz9jOTRkY2U2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICBcdHN1cGVyKHByb3BzKTtcbiAgXHR0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgbGlua1N0eWxlID0ge1xuICAgICAgbWFyZ2luUmlnaHQ6IDE1XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICBtYXJnaW46IDIwLFxuICBwYWRkaW5nOiAyMCxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXG59XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgPEhlYWRlciAvPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuY2xhc3MgUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgXHRzdXBlcihwcm9wcyk7XG4gIFx0dGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICA8aDE+e3RoaXMucHJvcHMudXJsLnF1ZXJ5LmlkfTwvaDE+XG4gICAgICAgICA8cD5UaGlzIGlzIHRoZSBibG9nIHBvc3QgY29udGVudCBmb3Ige3RoaXMucHJvcHMudXJsLnF1ZXJ5LnRpdGxlfS48L3A+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUVBO0FBQUE7QUFHQTtBQUZBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        
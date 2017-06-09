'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PostLink = require('../components/PostLink');

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
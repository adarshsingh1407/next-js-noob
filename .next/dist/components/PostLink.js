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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

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
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

var _react = require('react');

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
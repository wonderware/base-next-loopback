webpackHotUpdate(5,{

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _logatim = __webpack_require__(396);

var _logatim2 = _interopRequireDefault(_logatim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_logatim2.default.setLevel("info");

exports.default = {
	trace: function trace() {
		return _logatim2.default.trace.apply(_logatim2.default, arguments);
	},
	debug: function debug() {
		return _logatim2.default.debug.apply(_logatim2.default, arguments);
	},
	info: function info() {
		var _log$blue;

		return (_log$blue = _logatim2.default.blue).info.apply(_log$blue, arguments);
	},
	warn: function warn() {
		var _log$yellow;

		return (_log$yellow = _logatim2.default.yellow).warn.apply(_log$yellow, arguments);
	},
	error: function error() {
		var _log$red;

		return (_log$red = _logatim2.default.red).error.apply(_log$red, arguments);
	},
	setLevel: function setLevel() {
		return _logatim2.default.setLevel.apply(_logatim2.default, arguments);
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9sb2dnZXIvbG9nZ2VyLmpzIl0sIm5hbWVzIjpbImxvZyIsInNldExldmVsIiwidHJhY2UiLCJkZWJ1ZyIsImluZm8iLCJibHVlIiwid2FybiIsInllbGxvdyIsImVycm9yIiwicmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7Ozs7QUFFUCxrQkFBQSxBQUFJLFNBQUosQUFBYSxBQUViOzs7UUFDUSxpQkFBaUIsQUFDdkI7U0FBTyxrQkFBQSxBQUFJLCtCQUFYLEFBQ0E7QUFIYSxBQUlkO1FBQU8saUJBQWlCLEFBQ3ZCO1NBQU8sa0JBQUEsQUFBSSwrQkFBWCxBQUNBO0FBTmEsQUFPZDtPQUFNLGdCQUFpQjtNQUN0Qjs7U0FBTywrQkFBQSxBQUFJLE1BQUosQUFBUyxzQkFBaEIsQUFDQTtBQVRhLEFBVWQ7T0FBTSxnQkFBaUI7TUFDdEI7O1NBQU8saUNBQUEsQUFBSSxRQUFKLEFBQVcsd0JBQWxCLEFBQ0E7QUFaYSxBQWFkO1FBQU8saUJBQWlCO01BQ3ZCOztTQUFPLDhCQUFBLEFBQUksS0FBSixBQUFRLHNCQUFmLEFBQ0E7QUFmYSxBQWdCZDtXQUFVLG9CQUFpQixBQUMxQjtTQUFPLGtCQUFBLEFBQUksa0NBQVgsQUFDQTtBQWxCRixBQUFlO0FBQUEsQUFDZCIsImZpbGUiOiJsb2dnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL1BhdHJpY2svUHJvamVjdHMvc3VuLXN0cnVjdHVyZXMifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Patrick/Projects/sun-structures/src/utils/logger/logger.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Patrick/Projects/sun-structures/src/utils/logger/logger.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41YmQwYWNmM2QxYWRiYjRjMTkyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2xvZ2dlci9sb2dnZXIuanM/OGUzNzBhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nIGZyb20gXCJsb2dhdGltXCI7XG5cbmxvZy5zZXRMZXZlbChcImluZm9cIik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0dHJhY2U6IGZ1bmN0aW9uKC4uLmFyZ3Mpe1xuXHRcdHJldHVybiBsb2cudHJhY2UoLi4uYXJncyk7XG5cdH0sXG5cdGRlYnVnOiBmdW5jdGlvbiguLi5hcmdzKXtcblx0XHRyZXR1cm4gbG9nLmRlYnVnKC4uLmFyZ3MpO1xuXHR9LFxuXHRpbmZvOiBmdW5jdGlvbiguLi5hcmdzKXtcblx0XHRyZXR1cm4gbG9nLmJsdWUuaW5mbyguLi5hcmdzKTtcblx0fSxcblx0d2FybjogZnVuY3Rpb24oLi4uYXJncyl7XG5cdFx0cmV0dXJuIGxvZy55ZWxsb3cud2FybiguLi5hcmdzKTtcblx0fSxcblx0ZXJyb3I6IGZ1bmN0aW9uKC4uLmFyZ3Mpe1xuXHRcdHJldHVybiBsb2cucmVkLmVycm9yKC4uLmFyZ3MpO1xuXHR9LFxuXHRzZXRMZXZlbDogZnVuY3Rpb24oLi4uYXJncyl7XG5cdFx0cmV0dXJuIGxvZy5zZXRMZXZlbCguLi5hcmdzKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2xvZ2dlci9sb2dnZXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBakJBO0FBQ0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
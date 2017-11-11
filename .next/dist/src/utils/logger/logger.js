"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _logatim = require("logatim");

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
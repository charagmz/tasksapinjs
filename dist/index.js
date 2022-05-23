"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//no se guarda en un objeto porque el archivo no tiene exports
_app["default"].listen(_app["default"].get('port'));

console.log('Server on port ', _app["default"].get('port'));
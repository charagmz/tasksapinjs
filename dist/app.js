"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // settings

app.set('port', process.env.PORT || 3000); // middlewares

var corsOptions = {}; //const corsOptions = {origin: 'http://localhost:3000'};

app.use((0, _cors["default"])(corsOptions)); //que direccion tiene permitido hacer peticiones aqui

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json()); //para entender peticiones con json

app.use(_express["default"].urlencoded({
  extended: false
})); //para entender peticiones con parametros desde formularios html
// routes

app.get('/', function (req, res) {
  res.json({
    message: 'Wellcome to my application'
  });
});
app.use('/api/tasks', _tasks["default"]);
var _default = app;
exports["default"] = _default;
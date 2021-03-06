"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)(); //para que pueda cargar las variables de entorno

var _default = {
  mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/tasksapi'
};
exports["default"] = _default;
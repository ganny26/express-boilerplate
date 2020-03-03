"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var routeMismatch = function routeMismatch(req, res, next) {
  res.status(404);
  res.json({
    status: 404,
    title: "Not Found",
    msg: "Route not found"
  });
  next();
};

var _default = routeMismatch;
exports["default"] = _default;
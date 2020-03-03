"use strict";

var _app = _interopRequireDefault(require("./middlewares/app"));

var _invalidroute = _interopRequireDefault(require("./middlewares/invalidroute"));

var _app2 = _interopRequireDefault(require("./routes/app.routes"));

var _config = _interopRequireDefault(require("config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || _config["default"].get("port"); // Configure approutes in routes folder


_app["default"].use(_app2["default"]); // Middleware to handle invalid route


_app["default"].use(_invalidroute["default"]); // Error middleware


_app["default"].use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

_app["default"].listen(PORT, function (req, res) {
  console.log("app running on port ".concat(PORT));
});
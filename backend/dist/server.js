"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("./routes/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import errorHandler from "./middlewares/errorHandler";
var app = (0, _express.default)();
var PORT = 3000 || process.env.PORT;
app.use((0, _cors.default)());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use(_express.default.json());
app.use("/api", _index.default); // app.use(errorHandler);

var _default = function _default() {
  app.listen(PORT, function () {
    console.log("Server up and running on port: ".concat(PORT));
  });
};

exports.default = _default;
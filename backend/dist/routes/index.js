"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Auth = _interopRequireDefault(require("./Auth"));

var _Wishlists = _interopRequireDefault(require("./Wishlists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.default)();
router.use("/auth", _Auth.default);
router.use("/books", _Wishlists.default);
var _default = router;
exports.default = _default;
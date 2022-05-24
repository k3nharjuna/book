"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _AuthController = require("../controllers/AuthController");

var router = (0, _express.Router)();
router.post("/login", _AuthController.guestLogin);
var _default = router;
exports.default = _default;
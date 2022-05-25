"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _wishlistsController = require("../controllers/wishlistsController");

var router = (0, _express.Router)();
router.get("/wishlists/:guestname", _wishlistsController.getGuestWishlists);
router.post("/wishlists", _wishlistsController.guestWish);
var _default = router;
exports.default = _default;
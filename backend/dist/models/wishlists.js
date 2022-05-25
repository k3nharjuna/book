"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongodb = _interopRequireDefault(require("./mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wishlistsSchema = new _mongodb.default.Schema({
  guestName: {
    type: String
  },
  books: {
    type: Array,
    default: []
  }
}, {
  timestamps: true,
  collections: "wishlists"
});

var Wishlists = _mongodb.default.model("wishlists", wishlistsSchema);

var _default = Wishlists;
exports.default = _default;
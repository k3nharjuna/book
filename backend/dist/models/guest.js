"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongodb = _interopRequireDefault(require("./mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var guestsSchema = new _mongodb.default.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true,
  collections: "guests"
});

var Guests = _mongodb.default.model("guests", guestsSchema);

var _default = Guests;
exports.default = _default;
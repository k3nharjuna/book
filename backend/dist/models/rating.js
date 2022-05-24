"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.number.constructor.js");

var _mongodb = _interopRequireDefault(require("./mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ratingSchema = new _mongodb.default.Schema({
  bookId: {
    type: String,
    unique: true,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  collections: "rating"
});
var userBookRating = new _mongodb.default.Schema({
  bookId: {
    type: String,
    unique: true,
    required: true
  },
  user: {
    type: String,
    unique: true,
    required: true
  }
});

var Rating = _mongodb.default.model("rating", ratingSchema);

var _default = Rating;
exports.default = _default;
import mongoose from "./mongodb";

const ratingSchema = new mongoose.Schema(
  {
    bookId: { type: String, unique: true, required: true },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true, collections: "rating" }
);

const userBookRating = new mongoose.Schema({
  bookId: { type: String, unique: true, required: true },
  user: { type: String, unique: true, required: true },
});

const Rating = mongoose.model("rating", ratingSchema);

export default Rating;

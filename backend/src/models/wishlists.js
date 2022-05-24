import mongoose from "./mongodb";

const wishlistsSchema = new mongoose.Schema(
  {
    bookId: { type: String, unique: true, required: true },
  },
  { timestamps: true, collections: "wishlists" }
);

const Wishlists = mongoose.model("wishlists", wishlistsSchema);

export default Wishlists;

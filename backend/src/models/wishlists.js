import mongoose from "./mongodb";

const wishlistsSchema = new mongoose.Schema(
  {
    books: { type: Array },
  },
  { timestamps: true, collections: "wishlists" }
);

const Wishlists = mongoose.model("wishlists", wishlistsSchema);

export default Wishlists;

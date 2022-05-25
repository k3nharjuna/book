import mongoose from "./mongodb";

const wishlistsSchema = new mongoose.Schema(
  {
    guestName: { type: String },
    books: { type: Array, default: [] },
  },
  { timestamps: true, collections: "wishlists" }
);

const Wishlists = mongoose.model("wishlists", wishlistsSchema);

export default Wishlists;

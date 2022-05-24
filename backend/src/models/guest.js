import mongoose from "./mongodb";

const guestsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true, collections: "guests" }
);

const Guests = mongoose.model("guests", guestsSchema);

export default Guests;

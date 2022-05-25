import Wishlists from "../models/wishlists";

const addWishlist = async (data) => {
  try {
    const wishlists = await Wishlists.findOneAndUpdate(
      { guestName: data.guestName },
      { $push: { books: data.bookId } }
    );
    if (wishlists === null || !wishlists) {
      const newUserWishlists = await Wishlists.create({
        guestName: data.guestName,
        books: [],
      });
      const update = await Wishlists.findOneAndUpdate(
        { guestName: data.guestName },
        { $push: { books: data.bookId } },
        {
          new: true,
        }
      );
      console.log(update);
      return update;
    }
    return wishlists;
  } catch (err) {
    return err;
  }
};

const getWishlists = async (guestName) => {
  try {
    const wishlists = await Wishlists.findOne({ guestName });
    if (wishlists && wishlists.books) {
      return wishlists.books;
    } else {
      return [];
    }
  } catch (err) {
    return err;
  }
};

export { addWishlist, getWishlists };

import { addWishlist, getWishlists } from "../repositories/wishlists";

const guestWish = async (req, res, next) => {
  try {
    const { bookId, guestName, title, authors, thumbnail, averageRating } =
      req.body;
    const wishlist = await addWishlist({
      bookId,
      guestName,
      title,
      authors,
      thumbnail,
      averageRating,
    });
    if (!wishlist) throw { name: "InternalError" };
    res.status(201).json({ msg: "Update success" });
  } catch (err) {
    next(err);
  }
};

const getGuestWishlists = async (req, res, next) => {
  try {
    const wishlists = await getWishlists(req.params.guestname);
    res.status(200).json({ data: wishlists });
  } catch (err) {
    next(err);
  }
};

export { guestWish, getGuestWishlists };

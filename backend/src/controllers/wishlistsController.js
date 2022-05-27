import { addWishlist, getWishlists } from "../repositories/wishlists";

const guestWish = async (req, res, next) => {
  try {
    const { bookId, guestName, title, authors, thumbnail } = req.body;
    const wishlist = await addWishlist({
      bookId,
      guestName,
      title,
      authors,
      thumbnail,
    });
    if (!wishlist) throw { name: "InternalError" };
    res.status(201).json({ msg: "Update success" });
  } catch (err) {
    next(err);
  }
};

const getGuestWishlists = async (req, res, next) => {
  console.log(req.params);
  try {
    const wishlists = await getWishlists(req.params.guestname);
    res.status(200).json({ data: wishlists });
  } catch (err) {
    next(err);
  }
};

export { guestWish, getGuestWishlists };

import { Router } from "express";
import {
  guestWish,
  getGuestWishlists,
} from "../controllers/wishlistsController";

const router = Router();

router.get("/wishlists/:guestname", getGuestWishlists);
router.post("/wishlists", guestWish);

export default router;

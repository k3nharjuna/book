import Router from "express";
import authRoute from "./Auth";
import wishlistsRoute from "./Wishlists";

const router = Router();

router.use("/auth", authRoute);
router.use("/books", wishlistsRoute);

export default router;

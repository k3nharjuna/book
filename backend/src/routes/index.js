import Router from "express";
import authRoute from "./Auth";

const router = Router();

router.use("/auth", authRoute);

export default router;

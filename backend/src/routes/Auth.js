import { Router } from "express";
import { guestLogin } from "../controllers/AuthController";

const router = Router();

router.post("/login", guestLogin);

export default router;

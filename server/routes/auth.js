import { Router } from "express";
import { login } from  "../controllers/auth.js";

const router = new Router();

router.get("/auth/login",login);
export default router;


import authRoutes from "./auth.js";
import userRoutes from "./users.js";
import postRoutes from "./posts.js";
import { Router } from 'express';

const router = new Router();

router.get("/",(req,res) => {
    res.send("Healthy")
})

router.use(authRoutes);
router.use(userRoutes);
router.use(postRoutes);


export default router;


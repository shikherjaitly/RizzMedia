import express from 'express';
import {getFeedPosts, getUserPosts, likesPost } from "../controllers/posts.js";
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/*Read*/
router.get("/", verifyToken,getFeedPosts);
router.get("/:userId/posts",verifyToken, getUserPosts);

/*UPDATE*/
router.patch("/:id/like",verifyToken, likesPost);
 
export default router;
 

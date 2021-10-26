import express from 'express';
import { getPosts, newPost } from '../controller/posts.js';
import PostMessage from '../models/postMessage.js';

const router = express.Router();
router.route('/').get(getPosts).post(newPost);
export default router;

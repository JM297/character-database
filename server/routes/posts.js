import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

//localhost:5000/posts
router.post('/', createPost);
router.get('/', getPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
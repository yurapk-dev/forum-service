import {Router} from 'express';
import {
    addComment, addLike, addPost, deletePost, findPostById,
    findPostsByAuthor, findPostsByPeriod, findPostsByTags, updatePost
} from "../controllers/post.controller.js";

const router = Router();

router.post('/post/:user', addPost);
router.get('/post/:id', findPostById);
router.patch('/post/:id/like', addLike);
router.get('/posts/author/:user', findPostsByAuthor);
router.patch('/post/:id/comment/:commenter', addComment);
router.delete('/post/:id', deletePost);
router.get('/posts/tags', findPostsByTags);
router.get('/posts/period', findPostsByPeriod);
router.patch('/post/:id', updatePost);

export default router;

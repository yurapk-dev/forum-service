import {Router} from 'express';
import {
    addComment, addLike, addPost, deletePost, findPostById,
    findPostsByAuthor, findPostsByPeriod, findPostsByTags, updatePost
} from "../controllers/post.controller.js";
import validate from "../middlewares/validation.middleware.js";
const router = Router();

router.post('/post/:user', validate('addPost'), addPost);
router.get('/post/:id', findPostById);
router.patch('/post/:id/like', addLike);
router.get('/posts/author/:user', findPostsByAuthor);
router.patch('/post/:id/comment/:commenter',validate('addComment'), addComment);
router.delete('/post/:id', deletePost);
router.get('/posts/tags', findPostsByTags);
router.get('/posts/period',validate('dateFormatPeriod', 'query'), findPostsByPeriod);
router.patch('/post/:id',validate('updatePost'), updatePost);

export default router;

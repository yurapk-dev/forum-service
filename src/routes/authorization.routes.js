import { Router } from 'express';
import {canAddComment, hasRole, isOwner} from '../middlewares/authorization.middleware.js';
import {ADMIN} from '../configuration/constants.js';


const router = Router();
router.post('/forum/post/:user', isOwner);
router.patch('/forum/post/:id/comment/:commenter', canAddComment);

router.patch('/account/user/:login/role/:role', hasRole(ADMIN));
router.delete('/account/user/:login/role/:role', hasRole(ADMIN));

export default router;

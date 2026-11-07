import { Router } from 'express';
import {
    canRemoveUser,
    hasRole,
    isOwner,
    isPostAuthor,
    isPostAuthorOrHasRole
} from '../middlewares/authorization.middleware.js';
import {ADMIN} from '../configuration/constants.js';


const router = Router();
router.post('/forum/post/:user', isOwner);
router.patch('/forum/post/:id/comment/:user', isOwner);

router.patch('/account/user/:user', isOwner);
router.delete('/account/user/:user', canRemoveUser);

router.patch('/account/user/:login/role/:role', hasRole(ADMIN));
router.delete('/account/user/:login/role/:role', hasRole(ADMIN));

router.patch('/forum/post/:id', isPostAuthor('id'));
router.delete('/forum/post/:id', isPostAuthorOrHasRole('id', 'MODERATOR'));

export default router;

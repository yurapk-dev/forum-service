import {Router} from 'express';
import {
    registerUser, loginUser, deleteUser, updateUser,
    addRole, deleteRole, changePassword, getUser
} from '../controllers/userAccount.controller.js';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/user/:user', deleteUser);
router.patch('/user/:user', updateUser);
router.patch('/user/:user/role/:role', addRole);
router.delete('/user/:user/role/:role', deleteRole);
router.patch('/password', changePassword);
router.get('/user/:user', getUser);

export default router;

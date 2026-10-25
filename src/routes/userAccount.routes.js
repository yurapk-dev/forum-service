import {Router} from 'express';
import {
    registerUser, loginUser, deleteUser, updateUser,
    addRole, deleteRole, changePassword, getUser
} from '../controllers/userAccount.controller.js';
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post('/register',validate('registerUser'), registerUser);
router.post('/login', loginUser);
router.delete('/user/:user', validate('deleteUser', 'params'), deleteUser);
router.patch('/user/:user', validate('updateUser'), updateUser);
router.patch('/user/:user/role/:role', validate('addRole', 'params'), addRole);
router.delete('/user/:user/role/:role',validate('deleteRole', 'params'), deleteRole);
router.patch('/password', changePassword);
router.get('/user/:user',validate('getUser', 'params'), getUser);

export default router;

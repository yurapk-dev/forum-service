import {Router} from 'express';
import {
    registerUser, loginUser, removeUser, updateUser,
    addRole, deleteRole, changePassword, findUser
} from '../controllers/userAccount.controller.js';
import validate from "../middlewares/validation.middleware.js";


const router = Router();

router.post('/register',validate('registerUser'), registerUser);
router.post('/login', loginUser);
router.delete('/user/:user', validate('deleteUser', 'params'), removeUser);
router.patch('/user/:user', validate('updateUser'), updateUser);
router.patch('/user/:user/role/:role', validate('changeRole', 'params'), addRole);
router.delete('/user/:user/role/:role',validate('changeRole', 'params'), deleteRole);
router.patch('/password', changePassword);
router.get('/user/:user',validate('getUser', 'params'), findUser);

export default router;

import * as userAccountService from '../services/userAccount.service.js';

export const registerUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.registerUser(req.body);
        return res.status(201).json(userAccount);
    } catch (e) {
        return next(e);
    }
}

export const loginUser = async (req, res, next) => {
// TODO: Implement login user
    throw new Error('Not implemented');
}

export const deleteUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.deleteUser(req.params.login);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.updateUser(req.params.login, req.body);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }
}

export const addRole = async (req, res, next) => {
    try {
        const userRoles = await userAccountService.changeRoles(req.params.login, req.body);
        return res.json(userRoles);
    } catch (e) {
        return next(e);
    }
}
export const changePassword = async (req, res) => {
    // TODO implement change password
    throw new Error('Not implemented');
}

export const deleteRole = async (req, res) => {
    // if (!req.user) {
    //     return res.status(401).send();
    // }
    // if (!req.user.roles?.includes('ADMIN')) {
    //     return res.status(403).send();
    // }
    // const user = await userAccountService.deleteRole(req.params.user, req.params.role);
    // return res.status(200).json(user);
}


export const getUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.getUser(req.params.login);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }

}


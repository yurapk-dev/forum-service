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

    throw new Error('Not implemented');
}

export const removeUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.removeUser(req.params.user);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.updateUser(req.params.user, req.body);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }
}

export const addRole = async (req, res, next) => {
    try {
        const userRoles = await userAccountService.changeRoles(req.params.user, req.params.role, true);
        return res.json(userRoles);
    } catch (e) {
        return next(e);
    }
}
export const changePassword = async (req, res) => {

    throw new Error('Not implemented');
}

export const deleteRole = async (req, res, next) => {
    try {
        const userRoles = await userAccountService.changeRoles(req.params.user, req.params.role, false);
        return res.json(userRoles);
    } catch (e) {
        return next(e)
    }

}


export const findUser = async (req, res, next) => {
    try {
        const userAccount = await userAccountService.findUser(req.params.user);
        return res.json(userAccount);
    } catch (e) {
        return next(e);
    }

}


import * as userAccountService from '../services/userAccount.service.js';

export const registerUser = async (req, res) => {
    const user = await userAccountService.registerUser(req.body);
    if (user) {
        return res.status(201).json(user);
    } else return res.status(409).send();
}
export const loginUser = async (req, res) => {
// TODO: Implement login user
}

export const deleteUser = async(req, res) => {
    if (!req.user) {
        return res.status(401).send();
    }
    if (req.user.login !== req.params.user && !req.user.roles?.includes('ADMIN')) {
        return res.status(403).send(); // ?
    }
    const deletedUser = await userAccountService.deleteUser(req.params.user);
    return res.status(200).json(deletedUser);
}
export const updateUser = async(req, res) => {
    if (!req.user) {
        return res.status(401).send();
    }
    if (req.user.login !== req.params.user && !req.user.roles?.includes('ADMIN')) {
        return res.status(403).send();
    }
    const updatedUser = await userAccountService.updateUser(req.params.user, req.body);
    return res.status(200).json(updatedUser);
}

export const addRole = async(req, res) => {
    if (!req.user) {
        return res.status(401).send();
    }
    if (!req.user.roles?.includes('ADMIN')) {
        return res.status(403).send();
    }
    const user = await userAccountService.addRole(req.params.user, req.params.role);
    return res.status(200).json(user);
}

export const deleteRole = async(req, res) => {
    if (!req.user) {
        return res.status(401).send();
    }
    if (!req.user.roles?.includes('ADMIN')) {
        return res.status(403).send();
    }
    const user = await userAccountService.deleteRole(req.params.user, req.params.role);
    return res.status(200).json(user);
}

export const changePassword = async(req, res) => {
    // TODO implement change password
}

export const getUser = async(req, res) => {
    if (!req.user) {
        return res.status(401).send();
    }
    const user = await userAccountService.getUser(req.params.user);
    return res.status(200).json(user);
}


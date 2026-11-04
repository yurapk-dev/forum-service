import * as userAccountRepository from '../repository/userAccount.repository.js';
import bcrypt from 'bcrypt';

export const registerUser = async user => {
    try {

        return await userAccountRepository.addUser(user);
    } catch (e) {
        throw new Error('User already exists');
    }
}

export const removeUser = async (login) => {
    const userAccount = await userAccountRepository.removeUser(login);
    if (!userAccount) {
        throw new Error('User not found');
    }
    return userAccount;
}

export const updateUser = async (login, updateData) => {
    const userAccount = await userAccountRepository.updateUser(login, updateData);
    if (!userAccount) {
        throw new Error('User not found');
    }
    return userAccount;
}
export const changeRoles = async (login, role, isAddRole) => {
    if (isAddRole) {
        return userAccountRepository.addRole(login, role);
    }
    return userAccountRepository.deleteRole(login, role);
}

export const changePassword = async (login, newPassword) => {
    const userAccount = await userAccountRepository.changePassword(login, newPassword);
    if (!userAccount) {
        throw new Error('User not found');
    }
    return userAccount;
}

export const findUser = async login => {
    const userAccount = await userAccountRepository.findUser(login);
    if (!userAccount) {
        throw new Error('User not found');
    }
    return userAccount;
}



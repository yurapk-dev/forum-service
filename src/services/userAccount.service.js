import * as userAccountRepository from '../repository/userAccount.repository.js';
import bcrypt from 'bcrypt';

export const registerUser = async user => {
    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        return await userAccountRepository.addUser(user);
    } catch (e) {
        throw new Error('User already exists');
    }
}

// export const loginUser = async login => {
//     // TODO implement login user
// }

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
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(newPassword, salt);
    const userAccount = await userAccountRepository.changePassword(login, password);
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



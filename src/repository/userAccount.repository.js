import UserAccount from '../models/userAccount.model.js';

export const addUser = async (user) => {
    const userAccount = new UserAccount(user)
    return userAccount.save();
}
export const removeUser = async (login) => UserAccount.findByIdAndDelete(login, {returnDocument: 'after'}).exec();

export const updateUser = async (login, updateData) => UserAccount.findByIdAndUpdate(login, updateData, {returnDocument: 'after'}).exec();

export const findUser = async (login) => UserAccount.findById(login).exec();

export const changePassword = async (login, newPassword) => {
    const userAccount = await UserAccount.findById(login).exec();
    userAccount.password = newPassword;
    return userAccount.save();
}

export const addRole = async (login, role) => {
    return UserAccount.findByIdAndUpdate(login, {$addToSet: {roles: role}}, {returnDocument: 'after'}).select({roles: 1, login: 1}).exec();}

export const deleteRole = async (login, role) => {
    return UserAccount.findByIdAndUpdate(login, {$pull: {roles: role}}, {returnDocument: 'after'}).select('_id roles').exec();
    if (!userAccount) {
        throw new Error('User not found');
    }
    return {login: userAccount.login, roles: userAccount.roles};
}


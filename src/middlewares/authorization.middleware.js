import {ADMIN} from '../configuration/constants.js';

export const hasRole = (role) => (req, res, next) => {
    const check = req.principal.roles.includes(role.toUpperCase().trim());
    return check ? next() : res.status(403).json({message: 'Access denied'});
}

export const isOwner = (req, res, next) => {
    return req.principal.userName === req.params.user ? next() : res.status(403).json({message: 'Forbidden'});
}

export const canAddComment = (req, res, next) => {
    return req.principal.userName === req.params.commenter ? next() : res.status(403).json({message: 'Forbidden'});
}

export const canRemoveUser = (req, res, next) => {
    const allowed = req.principal.userName === req.params.user || req.principal.roles?.includes(ADMIN);
    return allowed ? next() : res.status(403).json({message: 'Forbidden'});
}


import {ADMIN} from '../configuration/constants.js';
import {findPostById} from '../services/post.service.js';

export const hasRole = (role) => (req, res, next) => {
    const check = req.principal.roles.includes(role.toUpperCase().trim());
    return check ? next() : res.status(403).json({message: 'Access denied'});
}

export const isOwner = (req, res, next) => {
    return req.principal.userName === req.params.user ? next() : res.status(403).json({message: 'Forbidden'});
}

export const canRemoveUser = (req, res, next) => {
    const allowed = req.principal.userName === req.params.user || req.principal.roles?.includes(ADMIN);
    return allowed ? next() : res.status(403).json({message: 'Forbidden'});
}

export const isPostAuthor = (postIdParams = 'id') => async (req, res, next) => {
    const post = await findPostById(req.params[postIdParams]);
    return post.user === req.principal.userName ? next() : res.status(403).json({message: 'Access denied'});
}

export const isPostAuthorOrHasRole = (postIdParam = 'id', role) => async (req, res, next) => {
    const post = await findPostById(req.params[postIdParam]);
    const isAuthor = post.user === req.principal.userName;
    const hasRole = req.principal.roles.includes(role.toUpperCase().trim());
    return isAuthor || hasRole ? next() : res.status(403).json({message: 'Access denied'});
}


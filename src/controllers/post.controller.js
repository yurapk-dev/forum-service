import * as postService from '../services/post.service.js';
import mongoose from 'mongoose';

export const addPost = async (req, res, next) => {
    try {
        const post = await postService.addPost(req.params.user, req.body);
        return res.json(post);
    } catch (e) {
        return next(e);
    }
};

export const findPostById = async (req, res, next) => {
    try {
        const post = await postService.findPostById(req.params.id);
        return res.json(post);
    } catch (e) {
        return next(e);
    }
};

export const addLike = async (req, res, next) => {
    try {
        await postService.addLike(req.params.id);
        return res.sendStatus(204);
    } catch (e) {
        return next(e);
    }
};

export const findPostsByAuthor = async (req, res, next) => {
    try {
        const posts = await postService.findPostsByAuthor(req.params.user);
        return res.json(posts);
    } catch (e) {
        return next(e);
    }
};

export const addComment = async (req, res, next) => {
    try {
        const post = await postService.addComment(req.params.id, req.params.commenter, req.body.message);
        return res.json(post);
    } catch (e) {
        return next(e);
    }
};

export const deletePost = async (req, res, next) => {
    try {
        const post = await postService.deletePost(req.params.id);
        return res.json(post);
    } catch (e) {
        return next(e);
    }

};

export const findPostsByTags = async (req, res) => {
    let values = req.query.values;
    if (Array.isArray(req.query.values)) {
        values = req.query.values.join(',');
    }
    return res.json(await postService.findPostsByTags(values));
};

export const findPostsByPeriod = async (req, res) => {
    const {dateFrom, dateTo} = req.query;
    const posts = await postService.findPostsByPeriod(dateFrom, dateTo);
    return res.json(posts);
};

export const updatePost = async (req, res, next) => {
    try {
        const post = await postService.updatePost(req.params.id, req.body);
        return res.json(post);
    } catch (e) {
        return next(e);
    }
};

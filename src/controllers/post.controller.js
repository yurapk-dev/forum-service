import * as postService from '../services/post.service.js';
import mongoose from 'mongoose';

export const addPost = async (req, res) => {
    const post = await postService.addPost(req.params.user, req.body);
    return res.status(201).json(post);
};

export const findPostById = async (req, res) => {
    try {
        const post = await postService.findPostById(req.params.id);
        return res.json(post);
    } catch (e) {
        return res.status(404).json({message: 'Post not found'});
    }
};

export const addLike = async (req, res) => {
    if (!mongoose.isObjectIdOrHexString(req.params.id)) {
        return res.sendStatus(404);
    }

    const success = await postService.addLike(req.params.id);
    if (success) return res.status(204).end();
    return res.sendStatus(404)
};

export const findPostsByAuthor = async (req, res) => {
    const posts = await postService.findPostsByAuthor(req.params.user);
    return res.json(posts);
};

export const addComment = async (req, res) => {
    try {
        const post = await postService.addComment(req.params.id, req.params.commenter, req.body.message);
        return res.json(post);
    } catch (e) {
        return res.sendStatus(404)
    }
};

    export const deletePost = async (req, res) => {
        const post = await postService.deletePost(req.params.id);
        if (!post) return res.status(404).send({
            "timestamp": new Date().toISOString(),
            "status": 404,
            "error": "Not Found",
            "message": `Post with id ${req.params.id} not found`,
            "path": req.path
        })
        return res.json(post);
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

    export const updatePost = async (req, res) => {
        const post = await postService.updatePost(req.params.id, req.body);
        if (post) return res.json(post);
        return res.sendStatus(404);
    };

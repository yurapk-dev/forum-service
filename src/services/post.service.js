import * as postRepository from '../repository/post.repository.js';

export const addPost = async (user, data) => {
    const tags = [...new Set(data.tags)];
    return await postRepository.addPost({user, ...data, tags});
}

export const findPostById = async id => {
    const post = await postRepository.findPostById(id);
    if (!post) {
        throw new Error(`Post with id ${id} not found`);
    }
    return post;
}

export const addLike = async id => {
        const success = await postRepository.addLike(id);
        if (success) return success;
        throw new Error(`Post with id ${id} not found`);
}

export const findPostsByAuthor = async user => {
    return await postRepository.findPostsByAuthor(user);
}

export const addComment = async (id, commenter, content) => {
    const comment = {user: commenter, message: content};
    const post = await postRepository.addComment(id, comment);
    if (!post) {
        throw new Error(`Post with id ${id} not found`);
    }
    return post;
}

export const deletePost = async id => {
    const post = await postRepository.deletePostById(id);
    if (!post) {
        throw new Error(`Post with id ${id} not found`);
    }
    return post;
}

export const findPostsByTags = async (tagsString) => {
    const tags = tagsString.split(',').map(tag => tag.trim());
    return await postRepository.findPostsByTags(tags);
}

export const findPostsByPeriod = async (dateFrom, dateTo) => {
    return await postRepository.findPostsByPeriod(dateFrom, dateTo);
}

export const updatePost = async (postId, data) => {
    const post = await postRepository.updatePost(postId, data);
    if (!post) {
        throw new Error(`Post with id ${postId} not found`);
    }
    return post;
}

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
    return await postRepository.addLike(id);
}

export const findPostsByAuthor = async user => {
    // TODO Implement findPostsByAuthor
}

export const addComment = async (postId, commenter, message) => {
    // TODO Implement addComment
}

export const deletePost = async id => {
    const post = await postRepository.deletePostById(id);
    if(!post) {
        throw new Error(`Post with id ${id} not found`);
    }
    return post;
}

export const findPostsByTags = async tags => {
    // TODO Implement findPostsByTags
}

export const findPostsByPeriod = async (dateFrom, dateTo) => {
    // TODO Implement findPostsByPeriod
}

export const updatePost = async (postId, data) => {
    // TODO Implement updatePost
}

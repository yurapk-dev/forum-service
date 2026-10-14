import Post from '../models/post.model.js';

export const addPost = async (postData) => {
    const newPost = new Post(postData);
    return Post.create(newPost);
}
export const findPostById = async (id) => Post.findById(id).exec();

export const addLike = async (id) => {
    const result = await Post.updateOne({_id: id}, {$inc: {likes: 1}}).exec();
    return result.matchedCount > 0;
}

export const deletePostById = async (id) => Post.findByIdAndDelete(id).exec();

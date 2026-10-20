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

export const findPostsByAuthor = async (user) => Post.find({user}).exec();

export const addComment = async (id, comment) =>
    Post.findByIdAndUpdate(id, {$push: {comments: comment}}, {returnDocument: 'after'}).exec();


export const findPostsByTags = async (tags) => {
    const tagsRegex = tags.map(tag => new RegExp(`^${tag}$`, 'i'));
    return Post.find({ tags: { $in: tagsRegex } }).exec();
}

export const findPostsByPeriod = async (startDate, endDate) =>
    Post.find({createdAt: {$gte: startDate, $lte: endDate}}).exec();

export const updatePost = async (id, postData) =>
    Post.findByIdAndUpdate({_id: id}, postData, {returnDocument: 'after'}).exec();
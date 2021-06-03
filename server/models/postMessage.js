import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    age: Number,
    referencePicture: String
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
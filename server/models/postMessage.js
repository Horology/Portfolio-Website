import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
   firstName: String, 
   lastName: String, 
   email: String, 
   message: String,
   createdAt: {
       type: Date,
       default: new Date(),
   },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try{
        const PostMessages = await PostMessage.find();

        res.status(200).json(PostMessages);
    } catch(error) {
        res.status(404).json({message: error});
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    console.log(newPost);

    try {
        await newPost.save();
        res.status(200).json(newPost);
    }catch(error){
        res.status(404).json({message: error});
    }

    res.send('Posts');
};
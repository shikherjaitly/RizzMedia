import Post from "../models/posts.js";

/*Create */

export const createPosts = async(req,res) =>{
    try {
        const { userId, description, picturePath } = req.body;
        const user = await user.findById(userId); 
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: picturePath,
            picturePath,
            likes:{},
            comments:[]
        });
        await newPost.save();

        const post = await Post.find();
        res.status(201).json(post);
    } catch (err) {
        res.status(409).json({message:err.message});
    }
}


/* READ */

export const getFeedPosts = async(req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const getUserPosts = async(req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

/*UPDATE*/
export const likesPost = async(req, res) => {
    try {
        const { id } = req.params;
        const { UserId } = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(UserId);

        
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}
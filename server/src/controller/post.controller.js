import Post from "../model/post.model.js";
import { HttpStatusCode, sendError, sendErrorServerInterval, sendSucces } from "../helper/client.js";

/**
 * @route POST: api/post/create
 * create post
 */
 export async function createPostController(req, res){
     const {user} = res.locals
    try {
        const post = await Post.create({...req.body, user: user._id} );
        return sendSucces(
            res, 
            "create post success!",
            post
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}

/**
 * @route GET api/post/getAll
 * get all posts
 */
export async function getAllPostsController(req, res) {
    const {user} = res.locals
    try {
        const posts = await Post.find({user: user._id})
        return sendSucces(
            res,
            "get posts success!",
            posts
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}


/**
 * @route POST api/post/:postId/edit
 * update post
 */
 export async function updatePostController(req, res) {
    const {postId} = req.params
    try {
        const post = await Post.findByIdAndUpdate(postId, req.body)
        return sendSucces(
            res,
            "edit post success!",
            post
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}


/**
 * @route POST api/post/:postId/delete
 * delete post
 */
 export async function deletePostController(req, res) {
    const {postId} = req.params
    try {
        const post = await Post.findByIdAndDelete(postId)
        return sendSucces(
            res,
            "delete post success!",
            post
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}

/**
 * @route GET api/post/:postId
 */
 export async function getOnePostController(req, res) {
    const {postId} = req.params
    try {
        const post = await Post.findById(postId)
        return sendSucces(
            res,
            "get post by id success!",
            post
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}


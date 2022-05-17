import { Router } from "express";
import { createPostController, deletePostController, getAllPostsController, getOnePostController, updatePostController } from "../controller/post.controller.js";
import authenticate from "../middleware/authenticate.js";

const router = Router()

router.use(authenticate())

router.get(
    '/test',
    (req, res) =>{
        res.send("success test")
    }
)

router.post(
    '/create',
    createPostController
)


router.get(
    '/getAll',
    getAllPostsController
)

router.post(
    '/:postId/edit',
    updatePostController
)

router.post(
    '/:postId/delete',
    deletePostController
)


router.get(
    '/:postId',
    getOnePostController
)

export default router
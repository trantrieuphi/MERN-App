import { Router } from "express"
import authenticate from "../middleware/authenticate.js"
import authRouter from "./auth.route.js"
import postRouter from "./post.route.js"
import userRouter from "./user.route.js"
import adminRouter from "./admin.route.js"

const api = Router()

api.use('/auth', authRouter)
api.use('/user', userRouter)
api.use('/post', postRouter)
api.use('/admin', adminRouter)
api.get('/test-access-token', authenticate(), (req, res) => res.sendStatus(200))


export default api
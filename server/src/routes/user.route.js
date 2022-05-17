import { Router } from "express";
import {  getUserController, updateUserController } from "../controller/user.controller.js";
import authenticate from "../middleware/authenticate.js";

const router = Router()

router.use(authenticate)

router.get(
    '/test',
    (req, res) =>{
        res.send("user router test")
    }
)

router.post(
    '/:userId/edit',
    updateUserController
)

router.get(
    '/:userId',
    getUserController
)

export default router
import { Router } from "express";
import { deleteUserController, getAllUserController } from "../controller/admin.controller.js";
import authenticate from "../middleware/authenticate.js";
import requireAdmin from "../middleware/requireAdmin.js";

const router = Router()

router.use(requireAdmin())

router.get(
    '/getAll',
    getAllUserController
)

router.post(
    '/:userId/delete',
    deleteUserController
)

export default router
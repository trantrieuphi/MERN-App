import { Router } from "express"
import { userLoginController, userRegisterController } from "../controller/auth.controller.js"
import { userRegisterValidationRule } from "../validation/auth.validation.js"
import validate from "../middleware/validate.js"

const router = Router()

router.post(
    '/register',
    validate(userRegisterValidationRule),
    userRegisterController
)

router.post(
    '/login',
    userLoginController
)

export default router
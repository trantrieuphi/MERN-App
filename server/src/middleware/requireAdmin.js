import { HttpStatusCode, sendError } from "../helper/client.js"
import { UserType } from "../model/user.model.js"
import authenticate from "./authenticate.js"

function requiredAdminMiddleWare(req, res, next) {
    const { user } = res.locals

    if (user && user.userType === UserType.ADMIN) {
        return next()
    }
    return sendError(
        res,
        HttpStatusCode.FORBIDDEN,
        'not allow.'
    )
}

export default function requireAdmin() {
    return [
        authenticate(),
        requiredAdminMiddleWare
    ]
}
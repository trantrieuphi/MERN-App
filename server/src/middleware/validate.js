import { validationResult } from "express-validator"
import { sendError, HttpStatusCode } from "../helper/client.js"

export function validateHandler(req, res, next) {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }

    let extractedError = {}
    errors.array().forEach(err => {
        if (extractedError[err.param]) {
            extractedError[err.param].push(err.msg)
        } else {
            extractedError[err.param] = [err.msg]
        }
    })

    return sendError(
        res,
        HttpStatusCode.BAD_REQUEST,
        'field validation error.',
        extractedError
    )
}

/**
 * @param {*} validation : callback
 * @returns 
 */
export default function validate(validation) {
    return [
        validation(),
        validateHandler
    ]
}
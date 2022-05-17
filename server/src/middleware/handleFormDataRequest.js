/**
 * Middleware accept x-www-form-urlencoded | form-data
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns next()
 */
export default function handleFormDataRequest(req, res, next) {
    for (let key in req.body) {
        let value = req.body[key]
        try {
            req.body[key] = JSON.parse(value)
        } catch (error) {}
    }
    return next()
}
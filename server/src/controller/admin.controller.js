import { sendErrorServerInterval, sendSucces } from "../helper/client.js";
import User, { UserType } from "../model/user.model.js";

/**
 * @route GET api/admin/getAll
 */
export async function getAllUserController(req, res) {
    try {
        const users = await  User.find({userType: UserType.USER})
        return sendSucces(
            res, 
            "get users success!",
            users
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}

/**
 * @route POST api/admin/:userId/delete
 * delete user
 */
export async function deleteUserController(req, res) {
    const {userId} = req.params
    try {
        const user = await User.findByIdAndDelete(userId)
        return sendSucces(
            res, 
            "delete user success!",
            user
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}
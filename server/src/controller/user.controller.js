import { sendErrorServerInterval, sendSucces } from "../helper/client.js";
import User from "../model/user.model.js";


/**
 * @route POST api/user/:userId/edit
 * update user
 */
 export async function updateUserController(req, res) {
     const {userId} = req.params
    try {
        const user = await User.findByIdAndUpdate(userId, req.body)
        return sendSucces(
            req, 
            'update user success!',
            user
        )
    } catch (error) {
        console.log(error)
        sendErrorServerInterval(res)
    }
}


/**
 * @route POST api/user/:userId/
 * get  user
 */
 export async function getUserController(req, res) {
    const {userId} = req.params
   try {
       const user = await User.findById(userId)
       return sendSucces(
           req, 
           'get user success!',
           user
       )
   } catch (error) {
       console.log(error)
       sendErrorServerInterval(res)
   }
}







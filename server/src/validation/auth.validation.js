import { check } from "express-validator"
import User from "../model/user.model.js"

const checkEmail = () => 
    check('email')
    .exists().withMessage('email is required.').bail()
    .isEmail().withMessage('email is invalid.').bail()

const checkEmailUnique = () => 
    checkEmail()
    .custom(value => User.exists({email: value})
        .then(user => user ? Promise.reject() : Promise.resolve())
    )
    .withMessage('E-mail already in use.')

const checkUsername = () => 
    check('name')
    .exists().withMessage('name is required.').bail()
    .isLength({min: 3}).withMessage('name must be at least 3 chars long.')

// const checkPhone = () => 
//     check('phone')
//     .exists().withMessage('phone is required.').bail()
//     .isMobilePhone('vi-VN').withMessage('phone is invalid.').bail()

// const checkPhoneUnique = () =>
//     checkPhone()
//     .custom(value => User.exists({phone: value})
//         .then(user => user ? Promise.reject() : Promise.resolve())
//     )
//     .withMessage('phone-number already in use.')

const checkPassword = () =>
    check('password')
    .exists().withMessage('password is required.').bail()
    .isLength({min: 6}).withMessage('password must be at least 6 chars long.')

const checkConfirmPassword = () =>
    check('confirmPassword')
    .exists().withMessage('confirmPassword is required.')

/**
 * Rule validate form in user register request
 * @returns 
 */
export const userRegisterValidationRule = () => [
    [   
        checkUsername(),
        checkEmailUnique(),
        // checkPhoneUnique(),
        checkPassword(),
        checkConfirmPassword()
    ],
    async (req, res, next) => {
        const { password, confirmPassword } = req.body

        if (password && confirmPassword) {
            await check('confirmPassword')
            .custom(value => password === confirmPassword)
            .withMessage('passwords do not match.')
            .run(req)
        }
        return next()
    }
]

/**
 * Rule validate form in user login request
 * @returns 
 */
// export const userLoginValidationRule = () => [
//     checkEmail(),
//     checkPassword()
// ]
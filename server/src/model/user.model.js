import mongoose from "mongoose"
import bcrypt from "bcrypt"
import config from "../../config/default.js"

export const UserType = {
    USER: 0,
    ADMIN: 1
}

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userType: {
        type: Number,
        enum: [UserType.USER, UserType.ADMIN],
        required: true,
        default: UserType.USER
    }
}, {
    timestamps: true
})

UserSchema.pre("save", async function(next) {
    let user = this

    if (!user.isModified) {
        return next()
    }
    const salt = await bcrypt.genSalt(config.saltRounds)
    const hash = await bcrypt.hash(user.password, salt)

    user.password = hash
    return next()
})

UserSchema.methods.comparePassword = async function(candidatePassword) {
    const user = this

    return bcrypt.compare(candidatePassword, user.password).catch(error => false)
}

const User = mongoose.model('User', UserSchema)
export default User
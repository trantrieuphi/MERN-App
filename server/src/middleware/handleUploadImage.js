import multer, { diskStorage } from "multer"
import { mkdirSync } from "fs"
import handleFormDataRequest from "./handleFormDataRequest.js"
import { sendErrorServerInterval } from "../helper/client.js"

const MAX_NUMBER_FILE_UPLOAD = 5

export function createUploadDir(req, res, next) {
    // Format name: yyyy-mm
    const dirName = new Date().toISOString().slice(0, 7)
    try {
        mkdirSync(`public/uploads/${dirName}`, {
            recursive: true
        })

        req.dirName = dirName
        return next()
    } catch (error) {
        console.log(error)
        return sendErrorServerInterval(res)
    }
}

export function getUploadMulter(filename) {
    const storage = diskStorage({
        destination: (req, file, callback) => {
            callback(null, `public/uploads/${req.dirName}/`)
        },
        filename: (req, file, callback) => {
            if (!filename) {
                console.log(file.originalname)
                const uniqueSuffix = Date.now()
                const part = file.originalname.split(".")
                part[part.length - 2] += uniqueSuffix // originalname+uniqeSuffix.jpg

                callback(null, part.join("."))
            } else {
                callback(null, filename)
            }
        }
    })

    return multer({ storage })
}

/**
 * Upload multiple file with custom name => use: req.files
 * @param {*} field: string
 * @returns middleware[]
 */
export function handleUploadMultiImage(field) {
    return [
        createUploadDir,
        getUploadMulter(null).array(field, MAX_NUMBER_FILE_UPLOAD),
        handleFormDataRequest
    ]
}

/**
 * Upload file with custom name
 * @param {*} field: string
 * @param {*} filename: string
 * @returns middleware[]
 */
export default function handleUploadImage(field, filename = null) {
    return [
        createUploadDir,
        getUploadMulter(filename).single(field),
        handleFormDataRequest
    ]
}
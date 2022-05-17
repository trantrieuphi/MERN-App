import dotenv from "dotenv"
dotenv.config()

const config = {
    dbUrl: process.env.MONGO_URI,
    port: process.env.PORT ?? 5000,
    saltRounds: 10,
    jwtSecretKey: process.env.JWT_SECRET_KEY ?? "",
    accessTokenTtl: "1y"
}

export default config
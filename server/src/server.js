import express from "express"
import cors from "cors"
import api from "./routes/api.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use("/api", api)

export default app

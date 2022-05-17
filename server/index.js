import config from "./config/default.js"
import app from "./src/server.js"
import { connect } from "./src/helper/db.js"

const PORT = config.port
app.listen(PORT, async () => {
    await connect()
    console.log(`Server start at http://localhost:${PORT}`)
})
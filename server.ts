const express = require("express")
const app = express()
const cors = require("cors")
app.use(
  cors({
    origin: "http://localhost:8080"
  })
)
 app.listen(4200)
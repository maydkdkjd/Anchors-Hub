const express = require("express")
const app = express()
require("dotenv").config()
const mail = require("./controllers/mail.js")

app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Server is started")
})

app.use('/mail', mail)

app.listen(PORT)
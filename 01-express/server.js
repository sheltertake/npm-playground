const express = require('express')

const PORT = 8081
const app = express()
app.use(express.static('public'))

app.listen(PORT)
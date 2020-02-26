const express = require('express')
const routes = require('./routes')

const app = express()
const server = require('http').createServer(app)

app.use(express.json())
app.use(routes)

server.listen(process.env.PORT, () => {
  console.log(`Listening at port ${process.env.PORT}`)
})

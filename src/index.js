const express = require('express')
const app = express()
const server = require('http').createServer(app)

const routes = require('./routes')

app.use(express.json())
app.use(routes)

server.listen(process.env.PORT, () => {
  console.log(`Listening at port ${process.env.PORT}`)
})

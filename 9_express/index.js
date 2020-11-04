const express = require('express')
const app = express()

app.use(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>Hi</h1>')
}).listen(3001, function (err) {
  console.log('server is running at http://127.0.0.1:3001')
})
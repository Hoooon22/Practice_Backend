const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

http.createServer(function (req, res) {

    fs.readFile('./index.ejs', 'utf8', function(err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(ejs.render(data))
    })
  
  }).listen(3001, function () {
    console.log('server is running at http://127.0.0.1:3001')
  })
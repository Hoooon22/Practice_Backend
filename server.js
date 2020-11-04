const fs = require('fs')
const http = require('http')

const server = http.createServer(function (req, res){
    //Read HTML file
    fs.readFile('./index.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.end(data)
    })
}).listen(3001, function(){
    console.log('Server Running')
})
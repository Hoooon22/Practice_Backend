// http module 추출
const http = require('http')

// web server 생성 and 실행
require('http').createServer(function(req, res){ // request, response
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('<h1>Hello World..!</h1>')
}).listen(3001, function(){
    console.log('Server Running at http://127.0.0.1:3001')
})
const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer(function(req, res){
    // URL을 받아올 변수를 선언합니다.
    let path = url.parse(req.url).pathname

    // 페이지 구분
    if (path == '/'){
        //index.html
        fs.readFile('./index.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
        })
    } else if (path == '/otherPage') {
        // otherPage.html
        fs.readFile('./otherPage.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
        })
    }
}).listen(3001, function(){
    console.log('Server is Running')
})
// 모듈 추출
var http = require('http')

// 웹 서버를 만들고 실행
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('<h1>Hello World..!</h1>')
}).listen(3001, function(){
    console.log('Server running')
})
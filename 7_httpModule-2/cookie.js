const http = require('http')

http.createServer(function (req, res){
    // 쿠키의 유효기간 (Exoire 속성) 변수
    let date = new Date()
    date.setDate(date.getDate()+7)

    // 쿠키 입력
    res.writeHead(200, {
        'Content-Type'  : 'text/html',
        'Set-Cookie': [
            'myname = jihoon; Expires = ' + date.toUTCString(), // myName에 유효기간 설정
            'mygoal = good developer'
        ]
    })

    res.end('<h1>' + req.headers.cookie + '</h1>')
}).listen(3001, function(){
    console.log('Sever Running')
})
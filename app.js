console.log('프로그램을 시작했습니다.')

const EventEmitter = require('events')
let custom = new EventEmitter()

custom.on('tick', function (code){
    console.log('tick 이벤트 실행')
})

custom.emit('tick')
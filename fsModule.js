const fs = require('fs')

let text = fs.readFileSync('./file.txt', 'utf8')

console.log(text)
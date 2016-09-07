var fs = require('fs')

var moo = fs.readFileSync(process.argv[2])
console.log(moo.toString().split('\n').length - 1)

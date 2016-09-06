var fs = require('fs')

fs.readFile(process.argv[2], function read(err, data) {
	if (err) {
		throw err;
	}
	console.log(data.toString().split('\n').length - 1);
});

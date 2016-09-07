var fs = require('fs');

var read = function (err, dirs) {
	for (var i = 0 ; i < dirs.length ; i++) {
		if (dirs[i].indexOf('.' + process.argv[3]) > -1) {
			console.log(dirs[i]);
		}
	}
}

fs.readdir(process.argv[2], read);

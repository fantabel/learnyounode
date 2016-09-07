var fs = require('fs');

module.exports = function (dir, filter, callback) {
	var read = function (err, data) {
		if (err)
			return callback(err);
		var array = [];
		for (var i = 0 ; i < data.length ; i++) {
			if (data[i].indexOf('.' + filter) > -1) {
				array.push(data[i]);
			}
		}
		callback(null, array);
	}
	fs.readdir(dir, read);
}

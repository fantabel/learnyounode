var mymodule = require('./challenge06require');

mymodule(process.argv[2], process.argv[3], function (err, data) {
	if (err) {
		console.log('oops!', err)
	} else {
		for (var i = 0 ; i < data.length ; i++) {
			console.log(data[i]);
		}
	}	
});

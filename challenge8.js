
var http = require('http');

http.get(process.argv[2], function (response) {
	var nbChars = 0
	var resp = "";
	response.setEncoding('utf-8');
	response.on("data", function (data) {
		nbChars += data.toString().length;
		resp += data.toString();
	});
	
	response.on("end", function () {
		console.log(nbChars);
		console.log(resp);
	});

})



var http = require('http');
var result = [];

var count = 0;

function httpGet(index) {
	result[index] = "";
	http.get(process.argv[2 + index], function (response) {
		response.setEncoding("utf-8")
		response.on("data", function (data) {
			result[index] += data.toString();
		});
		response.on("end", function () {
			count++;

			if (count === 3) {
				printResult();
			}
		});
	});
}
	
function printResult() {
	for (var i = 0 ; i < 3 ; i++) {
		console.log(result[i]);
	}
}

for (var i = 0 ; i < 3 ; i++) {
	httpGet(i);
}

function getCurrentTime() {
	var date = new Date();
	return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
}

function getCurrentDate() {
	var date = new Date();
	return date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
}

var net = require("net");

var server = net.createServer(function (socket) {
	socket.end(getCurrentDate() + " " + getCurrentTime() + "\n");
});
server.listen(process.argv[2]);

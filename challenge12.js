var http = require("http");

var server = http.createServer(function (req, res) {
    switch (req.method) {
        case ("POST"):
            res.statusCode = '200';
            res.setHeader('content-type','text/plain');
            req.on("data", function (data) {
                res.write(data.toString().toUpperCase());
            });
            req.on("end", function() {
                res.end();
            });
            break;
        default:
            break;
    }
});

server.listen(process.argv[2]);

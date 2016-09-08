var http = require('http'),
    url = require('url'),
    port = process.argv[2],
    server = http.createServer();

server.on("request", function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json'});

    var urlObject = url.parse(request.url, true);
    var query = urlObject.query;
    var date = new Date(query.iso);
    if (urlObject.pathname === "/api/parsetime") {
        var json = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
        response.write(JSON.stringify(json));
    } else if (urlObject.pathname === "/api/unixtime") {
        var json = {
            "unixtime": date.getTime()
        }
        response.write(JSON.stringify(json));
    }
    response.end();

});
server.listen(port);

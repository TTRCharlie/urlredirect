var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(301, { Location: "http://w3docs.com" });
    res.end();
  })
  .listen(8888);
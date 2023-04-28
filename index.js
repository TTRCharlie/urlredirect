var http = require("http");
require('dotenv').config();

var port = process.env.PORT;
http
  .createServer(function (req, res) {
    res.writeHead(301, { Location: "https://example.com" });
    res.end();
  })
  .listen(port);
  console.log("Running on port "+port);
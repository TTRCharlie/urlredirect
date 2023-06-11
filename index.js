var http = require("http");
require('dotenv').config();
var url = process.env.URL;
var port = process.env.PORT;

http
  .createServer(function (req, res) {
    res.writeHead(301, { Location: url });
    console.info(`${req.socket.localAddress} ${res.statusCode} ${res.statusMessage};`)
    res.end();
  })
  .listen(port);
  console.log("Running on port "+port);
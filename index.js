const http = require("http");
require('dotenv').config();
const port = process.env.PORT || 8999;

http
  .createServer(function (req, res) {
    res.writeHead(301, { Location: process.env.URL });
    console.info(`${req.headers['x-forwarded-for']} ${req.method} ${res.statusCode} ${res.statusMessage}`)
    res.end();
  })
  .listen(port);
  console.log("Running on port "+port);
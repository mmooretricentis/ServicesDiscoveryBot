// Minimal zero-dependency static server for Railway.
// Serves the discovery app on the port Railway provides ($PORT).
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const FILE = path.join(__dirname, "services-discovery-app-v2.html");

http
  .createServer(function (req, res) {
    fs.readFile(FILE, function (err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading app");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  })
  .listen(PORT, "0.0.0.0", function () {
    console.log("Services Discovery app listening on port " + PORT);
  });

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
});

const port = process.env.port || 5000;

server.listen(port,
   () => {
     console.log(`Server running at port ${port}`);
   });

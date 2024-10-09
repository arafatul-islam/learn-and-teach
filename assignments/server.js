const http = require("http");

const server = http.createServer((req, resp) => {
  resp.write("404 not found");
  resp.end();
});

server.listen(8080);

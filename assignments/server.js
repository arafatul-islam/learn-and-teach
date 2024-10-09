const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, resp) => {
  if (req.url == "/") {
    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (error, content) => {
      if (error) {
        resp.writeHead(500, { "content-type": "text/plain" });
        resp.end();
      }

      resp.writeHead(200, { "content-type": "text/plain" });
      resp.end(content);
    });
  } else {
    resp.writeHead(404, { "content-type": "text/plain" });
    resp.end();
  }
});

server.listen(8080, () => console.log(`server is listening`));

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(
    `[${new Date().toLocaleString()}] ${method} localhost:3000${url} called.`
  );
  //   GET /image
  if (url === "/image" && method === "GET") {
    fs.readFile("./data/image.jpg", (err, data) => {
      if (err) {
        console.error(JSON.stringify(err));
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ code: 500, error: "Error in reading Image data." })
        );
        return;
      }
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      res.end(data);
    });
  }
  //   GET /pdf
  else if (url === "/pdf" && method === "GET") {
    fs.readFile("./data/file.pdf", (err, data) => {
      if (err) {
        console.error(JSON.stringify(err));
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ code: 500, error: "Error in reading PDF data." })
        );
        return;
      }
      res.writeHead(200, { "Content-Type": "application/pdf" });
      res.end(data);
    });
  }
  // GET /about
  else if (url === "/about" && method === "GET") {
    fs.readFile("./data/about.txt", "utf8", (err, data) => {
      if (err) {
        console.error(JSON.stringify(err));
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ code: 500, error: "Error in reading TXT data." })
        );
        return;
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });
  }
  //   GET /home
  else if ((url === "/home" || url === "/") && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my website");
  }
  //   404
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ code: 404, error: "URL not found." }));
  }
});

server.listen(3000, () => {
  console.log("Server started on localhost:3000");
  console.log("Available URLs:");
  console.log("  - localhost:3000/image");
  console.log("  - localhost:3000/pdf");
  console.log("  - localhost:3000/about");
  console.log("  - localhost:3000/ OR localhost:3000/home");
  console.log("\nAll other URLs will throw Error 404");
  console.log("\n API Call Logs =>");
});

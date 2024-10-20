import http from "http";
import Expense from "./Expense.js";
import fs from "fs";

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  const method = req.method;

  // if (url === "/api/v1/expense" && method === "GET") {
  //   res.end(JSON.stringify(Expense.getAllExpenses(), null, 2));
  // }

  if (url === "/image" && method === "GET") {
    readFileAndSendData("./data/image.jpg", "image/jpeg", res);
  } else if (url === "/pdf" && method === "GET") {
    readFileAndSendData("./data/file.pdf", "application/pdf", res);
  } else if (url === "/about" && method === "GET") {
    readFileAndSendData("./data/about.txt", "text/plain", res);
  } else if (url === "/home" || (url === "/" && method === "GET")) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Welcome to my website");
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end();
  }
});

function readFileAndSendData(path, contentType, res) {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(JSON.stringify(err))
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          code: 500,
          message: "Something went wrong",
        })
      );
      return;
    } else {
      res.writeHead(200, { "Content-type": contentType });
      res.end(data);
    }
  });
}

server.listen(3000, () => {
  console.log("Server Started");
});

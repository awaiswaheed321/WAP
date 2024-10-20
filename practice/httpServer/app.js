import http from "http";
import Expense from "./Expense.js";

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/api/v1/expense" && method === "GET") {
    res.end(JSON.stringify(Expense.getAllExpenses(), null, 2));
  }
});

server.listen(3000, () => {
  console.log("Server Started");
});

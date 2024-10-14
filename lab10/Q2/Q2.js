import express from "express";
import calculatorRouter from "./service.js";

const app = express();
const port = 3000;

app.use("/", calculatorRouter);

app.use((_, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

app.listen(port, () => {
  console.log(`Calculator API listening on port ${port}`);
  console.log("Available endpoints:");
  console.log("GET/POST  - localhost:3000/addition");
  console.log("GET/POST  - localhost:3000/subtraction");
  console.log("GET/POST  - localhost:3000/multiplication");
  console.log("GET/POST  - localhost:3000/division");
  console.log("GET/POST  - localhost:3000/modulus");
  console.log("Send Params OR Query Params for GET.");
  console.log("Send Query Params OR Body (JSON/URLEncoded) for POST.");
  console.log("All other URLs will throw Error 404");
  console.log("\n API Call Logs =>");
});

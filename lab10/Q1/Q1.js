import express from "express";
import { printApiInfo } from "./service.js";
import router from "./route.js";

const app = express();
const port = 3000;

app.use(printApiInfo);

app.use("/", router);

app.use((_, res) => {
  res.status(404).json({ error: "API not found" });
});

app.listen(port, () => {
  console.log(`Lab10Q1 app listening on port ${port}`);
  console.log("Available URLs:");
  console.log("  - localhost:3000/image");
  console.log("  - localhost:3000/pdf");
  console.log("  - localhost:3000/about");
  console.log("  - localhost:3000/ OR localhost:3000/home");
  console.log("\nAll other URLs will throw Error 404");
  console.log("\n API Call Logs =>");
});

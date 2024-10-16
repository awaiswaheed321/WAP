import express from "express";
import studentRouter from "./route/studentRoute.js";
import cors from "cors";

const app = express();

app.set("port", process.env.PORT || 3000);
const port = app.get("port");
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
// Request Logging middleware
app.use(express.json());
app.use((req, _, next) => {
  const {
    originalUrl: url,
    method,
    headers: { host },
  } = req;
  console.log(`[${new Date().toISOString()}] ${method} ${host}${url} called.`);
  if (["POST", "PUT"].includes(method) && Object.keys(req.body).length > 0) {
    console.log("Request Body:", JSON.stringify(req.body, null, 2));
  }

  next();
});

app.use("/api/v1/students", studentRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: req.url + " API not supported" });
});

//error handling middleware
app.use((err, req, res, next) => {
  if (err.message === "NOT Found") res.status(404).json({ error: err.message });
  else res.status(500).json({ error: "Something went wrong. " + err.message });
});

app.listen(port, () => console.log("The server has started at " + port));

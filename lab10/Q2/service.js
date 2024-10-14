import bodyParser from "body-parser";
import { Router } from "express";

const calculatorRouter = Router();

calculatorRouter.use(bodyParser.json());
calculatorRouter.use(bodyParser.urlencoded({ extended: true }));

// Request Logging middleware
calculatorRouter.use((req, _, next) => {
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

const getNumbers = (req) => {
  const a = parseFloat(req.params.a || req.query.a || req.body.a);
  const b = parseFloat(req.params.b || req.query.b || req.body.b);
  return { a, b };
};

const validateNumbers = (a, b, res) => {
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: "Both 'a' and 'b' must be valid numbers." });
    return false;
  }
  return true;
};

// Addition
calculatorRouter.get("/addition/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  if (!validateNumbers(a, b, res)) return;
  res.json({ results: a + b });
});

calculatorRouter.post("/addition", (req, res) => {
  const { a, b } = getNumbers(req);
  if (!validateNumbers(a, b, res)) return;
  res.json({ results: a + b });
});

// Subtraction
calculatorRouter.get("/subtraction/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  if (!validateNumbers(a, b, res)) return;
  res.json({ results: a - b });
});

calculatorRouter.post("/subtraction", (req, res) => {
  const { a, b } = getNumbers(req);
  if (!validateNumbers(a, b, res)) return;
  res.json({ results: a - b });
});

// Multiplication
calculatorRouter.get("/multiplication/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  if (!validateNumbers(a, b, res)) return;
  res.json({ results: a * b });
});

calculatorRouter.post("/multiplication", (req, res) => {
  const { a, b } = getNumbers(req);
  if (!validateNumbers(a, b, res)) return;
  res.json({ results: a * b });
});

// Division
calculatorRouter.get("/division/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  if (!validateNumbers(a, b, res)) return;
  if (b === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  res.json({ results: a / b });
});

calculatorRouter.post("/division", (req, res) => {
  const { a, b } = getNumbers(req);
  if (!validateNumbers(a, b, res)) return;
  if (b === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  res.json({ results: a / b });
});

// Modulus
calculatorRouter.get("/modulus/:a?/:b?", (req, res) => {
  const { a, b } = getNumbers(req);
  if (!validateNumbers(a, b, res)) return;
  res.json({ results: a % b });
});

calculatorRouter.post("/modulus", (req, res) => {
  const { a, b } = getNumbers(req);
  if (!validateNumbers(a, b, res)) return;
  res.json({ results: a % b });
});

export default calculatorRouter;

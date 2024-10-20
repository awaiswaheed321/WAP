import { ApiError } from "./ApiError.js";

const ErrorMiddleware = (err, req, res, result) => {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default ErrorMiddleware;

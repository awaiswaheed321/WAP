const LoggingMiddleware = (req, _, next) => {
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
};

export default LoggingMiddleware;

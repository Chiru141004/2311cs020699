const express = require("express");
const requestLogger = require("./logger");

const app = express();
const PORT = 3000;

// Parse JSON request bodies
app.use(express.json());

// Apply logging middleware globally
app.use(requestLogger);

// Test Route 1
app.get("/api/success", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Everything is working fine!",
  });
});

// Test Route 2
app.get("/api/error", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Resource not found",
  });
});

// Health Check
app.get("/", (req, res) => {
  res.send("Campus Notification Logging Middleware is running.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
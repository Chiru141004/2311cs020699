const express = require('express');
const requestLogger = require('./logger'); // Import your middleware

const app = express();
const PORT = 3000;

// Apply the logging middleware globally
app.use(requestLogger);

// Test Route 1: Success
app.get('/api/success', (req, res) => {
    res.status(200).json({ message: "Everything is working fine!" });
});

// Test Route 2: Simulated Error
app.get('/api/error', (req, res) => {
    res.status(404).json({ error: "Resource not found" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
// app.js

const express = require('express');
const authorRouter = require('./authorRouter');

const app = express();

// Middleware for global simple logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Link Author router
app.use('/authors', authorRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

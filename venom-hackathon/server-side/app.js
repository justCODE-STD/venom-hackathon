
// Dependencies
const express = require('express');
const connectDB = require('./src/config/db.config')
const port = 3200 || process.env.PORT;

// Express app creation
const app = express();

// Middlewares

// Routes
app.use()

// Main App Starter
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
    connectDB();
});

module.exports = app;
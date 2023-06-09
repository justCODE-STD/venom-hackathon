
// Dependencies
const express = require('express');
const port = 3000 || process.env.PORT;

// Express app creation
const app = express();

// Main App Starter
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});

module.exports = app;
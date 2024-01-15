'use strict';

// Require use of libraries
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const PORT = process.env.PORT || 3000; // Fallback to 3000 is no variable in env file

// Single instance of express
const app = express();


// Establish get route
app.get('/person', (req, res, next) => {
  const message = `${req.query.name} is the name of your query`;
  // Convert message into an object, so that response message is in json
  const formattedMessage = { message };
  // Send message back in jason format
  res.status(200).json(formattedMessage);
});

// Start server
function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

// Export for use in other files
module.exports = { start };

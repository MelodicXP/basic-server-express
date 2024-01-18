'use strict';

// Require use of libraries
const express = require('express');

const errorHandler500 = require('./error-handlers/500');
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3000; // Fallback to 3000 is no variable in env file

// Single instance of express
const app = express();

// Use logger for all routes
app.use(logger);

// Establish default route
app.get('/', (req, res, next) => {
  const message = 'Default route message';
  res.status(200).send(message);
});

// Establish get person route
app.get('/person', (req, res, next) => {

  // If no name provided in query, next() sends off to error handler
  if (!req.query.name) {
    next('no name query present');
    // Prevent further execution
    return;
  }

  // Set message to display if query successful
  const name = req.query.name;
  // Convert message into an object, so that response message is in json
  const formattedMessage = { name };
  // Send message back in jason format
  res.status(200).json(formattedMessage);
});

// Start server
function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

// Error Handler
app.use(errorHandler500);

// Export for use in other files
module.exports = { start, app };

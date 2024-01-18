'use strict';

// Require use of libraries
const express = require('express');

// Require use of other .js files and its functions and properties
const errorHandler500 = require('./error-handlers/500');
const notFound404 = require('./error-handlers/404');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

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

// Establish get person route, and use validator.js (middleware) to check if query has a name property, if no name force error (send to erroHandler)
app.get('/person', validator, (req, res, next) => {
  // Set message to display if query name is present after going through validator
  const name = req.query.name;
  // Convert message into an object, so that response message is in json
  const formattedMessage = { name };
  // Send message back in jason format
  res.status(200).json(formattedMessage);
});

// Error Handler - 404 - not found error (incorrect or non-existent path)
app.use('*', notFound404);

// Error Handler - 500 server error
app.use(errorHandler500);

// Start server
function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

// Export for use in other files
module.exports = { start, app };

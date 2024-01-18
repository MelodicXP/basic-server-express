'use strict';

// Check the query string for a name property
// Send the request through when valid, forces an error when not

// Validator middleware
module.exports = (req, res, next) => {
  // Check if the 'name' query parameter exists
  if (!req.query.name) {
    // If 'name' is not present, pass an error message to the next middleware
    next('Name query parameter is required');
  } else {
    // If 'name' is present, continue to the next middleware/route handler
    next();
  }
};
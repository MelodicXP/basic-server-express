'use strict';

module.exports = (req, res, next) => {

  // Performs a console.log with the request method and path
  // Import this into your server and set it up to run at the application level for all routes
  console.log(`Request Method: ${req.method}, Path: ${req.path}`);
  next(); // Call next() to pass control to the next middleware function

};
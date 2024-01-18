'use strict';

// Require dotenv library
require('dotenv').config();

// Deconstruct from server.js
const { start } = require('./src/server');

// Invoke start(), to start server
start ();
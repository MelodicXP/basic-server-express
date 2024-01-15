'use strict';

const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

const PORT = process.env.PORT || 3000; // Fallback to 3000 is no variable in env file

const app = express();

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { start };

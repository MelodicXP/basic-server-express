// Run mockRequests to server without server having to be running live

// Require supertest
const supertest = require('supertest');

// Require app from server.js, deconstruct app, allows to run and test server code without going live
const { app } = require('../src/server');

// Feed app into supertest and assign to mockRequest variable
const mockRequest = supertest(app);

// Require external test .js files
// const validator = require('../src/middleware/validator.test.js');
// const logger = require('../src/middleware/logger.test.js');
// const { request } = require('express');

// ** Test route responds with correct info **
describe('API Server', () => {
  it('handles 404 a bad route', async () => {
    const response = await mockRequest.get('/badRoute');
    expect(response.status).toEqual(404);
  });

  it('handles 404 on a bad method', async () => {
    const response = await mockRequest.put('/person');
    expect(response.status).toEqual(404);
  });

  it('handles 500 if no name in the query string', async () => {
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);
  });
});
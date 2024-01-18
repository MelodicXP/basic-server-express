// Run mockRequests to server without server having to be running live

// Require supertest
const supertest = require('supertest');

// Require app from server.js, deconstruct app, allows to run and test server code without going live
const { app } = require('../src/server');

// Feed app into supertest and assign to mockRequest variable
const mockRequest = supertest(app);

// ** Test route responds with correct info **
describe('API Server', () => {
  it('handles root path', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('Default route message');
  });
  
  it('handles 404 on a bad route \'/badRoute\'', async () => {
    const response = await mockRequest.get('/badRoute');
    expect(response.status).toEqual(404);
    expect(response.body.route).toEqual('/badRoute');
    expect(response.body.message).toEqual('Not Found');
  });

  it('handles 404 on a bad method \'mockRequest.put\'', async () => {
    const response = await mockRequest.put('/person');
    expect(response.status).toEqual(404);
    expect(response.body.route).toEqual('/person');
    expect(response.body.message).toEqual('Not Found');
  });

  it('handles 500 if no name in query string for \'/person\' route', async () => {
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/person');
    expect(response.body.message).toBeTruthy();
    expect(response.body.message).toEqual('Name query parameter is required');
  });

  it('handles 200 if name is in the query string', async () => {
    const response = await mockRequest.get('/person?name=John');
    expect(response.status).toEqual(200);
  });

  it('handles if output object is correct', async () => {
    const response = await mockRequest.get('/person?name=John');
    expect(response.status).toEqual(200); // Check if the response status is 200
    expect(response.body).toEqual({ 'name': 'John' }); // Check if the response body is as expected
  });

});
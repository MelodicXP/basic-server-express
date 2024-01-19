const supertest = require('supertest');
const { app } = require('../server');

// Mock the app with supertest
const mockRequest = supertest(app);

describe('Validator Middleware', () => {
  it('allows requests with a valid name query parameter', async () => {
    const response = await mockRequest.get('/person?name=John');
    // Assuming /person route exists and it returns a status code of 200 when successful
    expect(response.status).toEqual(200);
  });

  it('throws an error when name query parameter is missing', async () => {
    const response = await mockRequest.get('/person');
    // Assuming your error handler returns a status code of 400 or 500 when an error is thrown
    expect(response.status).toBeGreaterThanOrEqual(400);
  });
});
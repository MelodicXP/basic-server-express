const supertest = require('supertest');
const { app } = require('../server'); 

// Mocking console.log to test logger output
const mockRequest = supertest(app);

describe('Logger Middleware', () => {
  it('logs the method and path of a request', async () => {
    const consoleSpy = jest.spyOn(console, 'log');

    // Make a request to trigger the logger
    await mockRequest.get('/some-route');

    // Check if console.log has been called with the correct method and path
    expect(consoleSpy).toHaveBeenCalledWith('Request Method: GET, Path: /some-route');

    // Restore console.log to its original state
    consoleSpy.mockRestore();
  });
});

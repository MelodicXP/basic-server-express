'use strict';

const validator = require('../middleware/validator');

describe('validator middleware', () => {
  let req = {query: {name: 'John'}};
  let res = {};
  let next = jest.fn();

  // Happy path - success
  it('validates string query is present as expected', () => {
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith();
  });

  // Fail if no name in query - unsccessful
  it('fails appropriately if no query name', () => {
    // created a key of notName, which will throw an error as expects 'name'
    req = {query: {notName: 'John'}};
    validator(req, res, next);

    // if no name in query, next would be called with error message (error message string established in validator.js, line 11)
    expect(next).toHaveBeenCalledWith('Name query parameter is required');
  });
});
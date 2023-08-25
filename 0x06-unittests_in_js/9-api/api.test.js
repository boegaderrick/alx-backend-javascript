const request = require('request');
const expect = require('chai').expect;


describe('Index page', function () {
  it('Tests index page', function () {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      expect(response.url).to.equal('');
    });
  });
});

describe('Carts page', function () {
  it('Tests when id is a number', function () {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12\n');
      expect(response.statusCode).to.equal(200);
    });
  });

  it('Tests when id is not a number', function () {
    request('http://localhost:7865/cart/test', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
    });
  });
});

const request = require('request');
const url = 'http://localhost:7865';
const expect = require('chai').expect;

describe('Index page', function () {
  it('', function () {
    request(url, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      expect(response.url).to.equal('');
    });
  });
});

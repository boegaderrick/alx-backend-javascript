const request = require('request');
const expect = require('chai').expect;


describe('Index page', function () {
  it('', function () {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      expect(response.statusCode).to.equal(200);
      expect(response.url).to.equal('');
    });
  });
});

describe('Carts page', function () {
  it('', function () {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      expect(response.statusCode).to.equal(200);
    });
  });

  it('', function () {
    request('http://localhost:7865/cart/test', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
    });
  });
});

describe('', function () {
  it('', function () {
    const options = {
      method: 'POST',
      url: 'http://localhost:7865/login',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ userName: 'Betty' })
    };
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      expect(response.statusCode).to.equal(200);
    });
  });
});

describe('', function () {
  it('', function () {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        "payment_methods":{
          "credit_cards":true,"paypal":false
        }
      });
    });
  });
});

const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', function () {
  it('Returns a resolved promise', function (done) {
    getPaymentTokenFromAPI(true)
      .then(function (output) {
        expect(output).to.deep.equal({'data': 'Successful response from the API'});
        done();
      });
  });
});

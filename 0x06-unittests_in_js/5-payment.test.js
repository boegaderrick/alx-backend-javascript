const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  let spy;
  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });

  it('Tests sendPaymentRequestToApi', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('Tests sendPaymentRequestToApi', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  afterEach(function () {
    spy.restore();
  });
});

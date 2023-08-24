const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('Checks if Utils.calculateNumber is called', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const args = [100, 20];
    sendPaymentRequestToApi(...args);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', ...args)).to.be.true;
    spy.restore();
  });
});

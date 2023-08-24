const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const args = [100, 20];


describe('sendPaymentRequestToApi', function () {
  it('Checks if Utils.calculateNumber is called', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(...args);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', ...args)).to.be.true;
    spy.restore();
  });
});

describe('Utils.calculateNumber', function () {
  it('Stubs Utils.calculateNumber', function () {
    const consoleSpy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    sendPaymentRequestToApi(...args);
    expect(stub.calledWith('SUM', ...args)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    consoleSpy.restore();
    stub.restore();
  });
});

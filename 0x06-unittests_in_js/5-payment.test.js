const { expect } = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // runs before each test in this block
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // runs after each test in this block
    expect(consoleSpy.calledOnce).to.be.true;
    consoleSpy.restore();
  });

  it('checks output of sendPaymentRequestToApi with 100 and 20 as args', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('checks output of sendPaymentRequestToApi with 10 and 10 as args', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});

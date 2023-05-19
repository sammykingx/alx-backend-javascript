const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi function', () => {
  // create the spy / wrapper of an existing function
  const utilSpy = sinon.spy(Utils, 'calculateNumber');

  it('validate the usage of the Utils function', () => {
    // run the function with the parameters
    sendPaymentRequestToApi(100, 20);
    // check that the spy was called exactly once
    expect(utilSpy.calledOnce).to.be.true;
    // check that spy was called at least once with the provided arguments
    expect(utilSpy.calledWith('SUM', 100, 20)).to.be.true;
    utilSpy.restore()
  });
});

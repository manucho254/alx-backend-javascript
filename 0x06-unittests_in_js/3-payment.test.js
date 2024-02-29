const calculateNumber = require("./2-calcul_chai");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const { expect } = require("chai");
const sinon = require("sinon");

describe("calculateNumber", function () {
  it("Return sum with correct values", function () {
    expect(calculateNumber("SUM", 3, 3)).to.equal(6);
    expect(calculateNumber("SUM", 1, 3)).to.equal(4);
    expect(calculateNumber("SUBTRACT", 7, 2)).to.equal(5);
    expect(calculateNumber("SUBTRACT", 7.1, 2.1)).to.equal(5);
    expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
    expect(calculateNumber("DIVIDE", 1, 0.1)).to.equal("Error");
  });
});

const obj = {
  func: sendPaymentRequestToApi,
};
describe("sendPaymentRequestToApi", function () {
  it("Return sum with correct values", function () {
    const spy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(1, 2);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
    spy.restore();
  });
});

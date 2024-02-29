const calculateNumber = require("./2-calcul_chai");
const sendPaymentRequestToApi = require("./4-payment");
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

describe("sendPaymentRequestToApi", function () {
  let calculateNumberStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, "calculateNumber");
  });

  afterEach(() => {
    calculateNumberStub.restore();
  });

  it("should return correct sum", () => {
    const totalAmount = 7;
    const totalShipping = 4;
    const expectedResult = 42; // Mocking the calculation result

    calculateNumberStub.returns(expectedResult);
    const result = sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(result).to.equal(expectedResult);
  });
});

const calculateNumber = require("./2-calcul_chai");
const { expect } = require('chai');

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

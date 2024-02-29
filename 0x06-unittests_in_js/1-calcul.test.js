const calculateNumber = require("./1-calcul");
const assert = require("assert");

describe("calculateNumber", function () {
  it("Return sum with correct values", function () {
    assert.equal(calculateNumber("SUM", 3, 3), 6);
    assert.equal(calculateNumber("SUM", 1, 3), 4);
    assert.equal(calculateNumber("SUBTRACT", 7, 2), 5);
    assert.equal(calculateNumber("SUBTRACT", 7.1, 2.1), 5);
    assert.equal(calculateNumber("DIVIDE", 4, 2), 2);
    assert.equal(calculateNumber("DIVIDE", 1, 0.1), "Error");
  });
});

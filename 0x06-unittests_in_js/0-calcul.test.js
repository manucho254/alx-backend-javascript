const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("calculateNumber", function () {
  it("Return sum with correct values", () => {
    assert.equal(calculateNumber(3, 3), 6);
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(-1.7, -2), -4);
    assert.equal(calculateNumber(1, -2), -1);
    assert.equal(calculateNumber(-1, -2.7), -4);
  });

  it("first argument", () => {
    assert.equal(calculateNumber(2.0, 0), 2);
    assert.equal(calculateNumber(3.3, 0), 3);
    assert.equal(calculateNumber(1.7, 0), 2);
  });

  it("second argument", () => {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 1.3), 1);
    assert.equal(calculateNumber(0, 1.7), 2);
  });
});

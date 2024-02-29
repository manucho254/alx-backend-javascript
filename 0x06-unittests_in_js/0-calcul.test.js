const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("calculateNumber", function () {
  it("Return sum with correct values", function () {
    assert.equal(calculateNumber(3, 3), 6);
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(-1.7, -2), -4);
    assert.equal(calculateNumber(1, -2), -1);
    assert.equal(calculateNumber(-1, -2.7), -4);
  });
  it("Return NAN if invalid number of arguments ()", function () {
    assert(isNaN(calculateNumber()));
    assert(isNaN(calculateNumber(1)));
  });
});

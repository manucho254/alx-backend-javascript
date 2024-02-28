const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("Sum", function () {
  describe("#calculateNumber", function () {
    it("Return 6 when the values are present (3, 3)", function () {
      assert.equal(calculateNumber(3, 3), 6);
    });
  });
});

describe("Sum", function () {
  describe("#calculateNumber", function () {
    it("Return NAN if only one argument is provided (3)", function () {
      assert.equal(calculateNumber(3), NaN);
    });
  });
});

describe("Sum", function () {
  describe("#calculateNumber", function () {
    it("Return NAN if only no arguments are provided ()", function () {
      assert.equal(calculateNumber(), NaN);
    });
  });
});

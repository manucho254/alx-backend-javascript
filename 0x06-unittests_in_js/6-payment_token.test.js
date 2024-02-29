const getPaymentTokenFromAPI = require("./6-payment_token");
const { expect } = require("chai");

describe.only("AsyncTest", function () {
  it("should return `an object` if `true` is passed in", function (done) {
    getPaymentTokenFromAPI(true, function (success) {
      expect(success).to.equal({ data: "Successful response from the API" });
    });
    done();
  });
});

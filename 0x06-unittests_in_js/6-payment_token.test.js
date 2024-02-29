const getPaymentTokenFromAPI = require("./6-payment_token");
const { expect } = require("chai");

describe.only("getPaymentTokenFromAPI", function () {
  it("should return `an object` if `true` is passed in", function (done) {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.be.an("object");
      expect(res).to.have.property("data");
      expect(res.data).to.equal("Successful response from the API");
      done();
    });
  });
});

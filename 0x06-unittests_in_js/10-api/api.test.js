const request = require("request");
const { expect } = require("chai");

describe.only("Api Integration test", function () {
  it("Right data in response /", function () {
    request("http://127.0.0.1:7865/", function (error, response, body) {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
    });
  });
  it("404 if path does not exist /", function () {
    request("http://127.0.0.1:7865/test", function (error, response, body) {
      expect(response.statusCode).to.be.equal(404);
    });
  });
  it("Right data in response /cart", function () {
    request("http://127.0.0.1:7865/cart/123", function (error, response, body) {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Payment methods for cart 123");
    });
  });
  it("404 if path does not exist /cart", function () {
    request(
      "http://127.0.0.1:7865/cart/test",
      function (error, response, body) {
        expect(response.statusCode).to.be.equal(404);
      }
    );
  });
});

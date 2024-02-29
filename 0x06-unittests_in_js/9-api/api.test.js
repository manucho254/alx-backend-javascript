const request = require("request");
const { expect } = require("chai");
const URL = "http://127.0.0.1:7865";

describe.only("Api Integration test", function () {
  it("Right data in response /", function () {
    request(`${URL}/`, function (error, response, body) {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
    });
  });
  it("404 if path does not exist /", function () {
    request(`${URL}/test`, function (error, response, body) {
      expect(response.statusCode).to.be.equal(404);
    });
  });
  it("Right data in response /cart", function () {
    request(`${URL}/cart/123`, function (error, response, body) {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Payment methods for cart 123");
    });
  });
  it("404 if path does not exist /cart", function () {
    request(`${URL}/cart/test`, function (error, response, body) {
      expect(response.statusCode).to.be.equal(404);
    });
  });
});

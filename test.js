const assert = require("chai").assert;
var should = require('chai').should();


const CalcService = require("./service/calcService") // Import the service we want to test

describe("Calc Service", () => {
  const CalsServiceInstance = new CalcService();
  console.log(CalsServiceInstance.addTwoNumbers({
    "firstNumber": 1,
    "secondNumber": 2
  }))

  describe("Create instance of service", () => {
    it("Is not null", () => {
      assert.isNotNull(CalsServiceInstance);
    });

    it("Exposes the add 2 numbers method", () => {
      assert.isFunction(CalsServiceInstance.addTwoNumbers);
    });

    it("Exposes the average numbers method", () => {
      assert.isFunction(CalsServiceInstance.getNumbersAverage);
    });


    it("Valid average number correct", async () => {
      const result = await CalsServiceInstance.getNumbersAverage({
        "numbers": [1, 2, 3, 4, 5]
      })
      assert.equal(result.result, 3);
    });

    it("Valid average number not correct", async () => {
      const result = await CalsServiceInstance.getNumbersAverage({
        "numbers": [1, 2, 3, 4, 5]
      })
      assert.notEqual(result.result, -1);
    });

    it("Adding number correct", async () => {
      const result = await CalsServiceInstance.addTwoNumbers({
        "firstNumber": 1,
        "secondNumber": 1
      })
      assert.equal(result.result, 2);
    });

    it("Adding number not correct", async () => {
      const result = await CalsServiceInstance.addTwoNumbers({
        "firstNumber": 1,
        "secondNumber": 1
      })
      assert.notEqual(result.result, 3);
    });

  });
});
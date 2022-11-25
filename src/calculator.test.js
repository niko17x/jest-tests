const { default: expect } = require("expect");
const calculator = require("./calculator");

test("Return the appropriate solution given 2 integers.", () => {
  expect(calculator.addition(1, 2)).toBe(3);
  expect(calculator.subtract(5, 1)).toBe(4);
  expect(calculator.divide(4, 2)).toBe(2);
  expect(calculator.multiply(2, 2)).toBe(4);
});

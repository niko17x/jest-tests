const analyzeArray = require("./main");

describe("Object property", () => {
  test("Given an array, return the following properties", () => {
    const prop = {
      average: 4,
      min: 2,
      max: 6,
      length: 3,
    };
    expect(analyzeArray([2, 4, 6])).toEqual(prop);
  });
});

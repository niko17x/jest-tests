const reverseString = require("./reverseString");

test("Return the string in reverse.", () => {
  expect(reverseString("hello")).toBe("olleh");
});

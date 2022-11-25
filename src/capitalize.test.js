const main = require("./capitalize");

test("First letter in string should be capitalized.", () => {
  expect(main("zoe")).toBe(`Zoe`);
});

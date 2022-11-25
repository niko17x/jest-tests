const { default: expect } = require("expect");
const caeserCipher = require("./caeserCipher");

test("aaabbbccc becomes bbbcccddd with 1 shift up.", () => {
  expect(caeserCipher("abc", 2)).toBe("cde");
});

test("abc#def becomes bcd#efg with 1 shift up.", () => {
  expect(caeserCipher("abc#def", 1)).toBe("bcd#efg");
});

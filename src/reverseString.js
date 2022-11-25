function reverseString(str) {
  if (typeof str !== "string" || !str.length) {
    return str;
  }
  return reverseString(str.substring(1)) + str.charAt(0);
}

module.exports = reverseString;

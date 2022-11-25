// const caeserCipher = (str, shift) => {
//   // isString(str); // Validate correct string input.

//   const newStr = str.toLowerCase();
//   let result = "";

//   // Use charCodeAt() to get the ASCII value.
//   for (let i = 0; i < str.length; i++) {
//     const getCharCode = newStr.charCodeAt(i);

//     if (isAlpha(getCharCode)) {
//       let convertChar = charLimit(getCharCode + shift);
//       result += String.fromCharCode(convertChar);
//     } else {
//       result += String.fromCharCode(getCharCode); // Account for symbols.
//     }
//   }
//   return result;
// };

// const isString = (str) => {
//   if (str !== "string") {
//     return "not a string";
//   } else {
//     return true;
//   }
// };

// // Helper function for alphabets within ASCII character code range:
// const isAlpha = (char) => {
//   if (char > 64 && char < 123) {
//     return true; // Char is alpha.
//   }
// };

// // "Reset" ASCII code if it goes beyond upper/lower case alphabets:
// const charLimit = (char) => {
//   if (char > 122) {
//     return char - 122 + 96;
//   }
// };

// Account for symbols in ASCII:
const isSymbol = (char) => {
  if (char > 122 || char < 97) {
    return true; // Return true if it IS a symbol.
  }
};

// Account for lowercase letters below/beyond ASCII alphabet:
const charLimitReset = (char, shift) => {
  return char + shift - 122 + 96;
};

const isNumLimit = (num) => {
  if (!Number.isInteger(num) || num < 1 || num > 26) {
    return true;
  }
};

const caeserCipher = (str, shift) => {
  if (typeof str !== "string") return "Not a string."; // Check if str is string.
  if (isNumLimit(shift)) return "Please enter a number between 1 and 26.";

  const newStr = str.toLowerCase(); // Convert user str to lowercase.

  let result = "";

  for (let i = 0; i < str.length; i++) {
    // Get char codes for each letter in str:
    let getCharCode = newStr.charCodeAt(i);
    // console.log(getCharCode);

    // if symbol => just add to result.
    if (isSymbol(getCharCode)) {
      result += String.fromCharCode(getCharCode);
    } else {
      if (getCharCode + shift > 122) {
        result += String.fromCharCode(getCharCode + shift - 122 + 96);
      } else {
        result += String.fromCharCode(getCharCode + shift);
      }
    }
  }
  return result;
};

module.exports = caeserCipher;

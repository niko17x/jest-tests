// Given an array, return the average of all the items in array:
const getAverage = (arr) => {
  const total = arr.reduce((a, b) => a + b);
  return total / arr.length;
};

// Given an array, return the smallest item:
const getMin = (arr) => arr.sort()[0];

// Get the largest value in the array:
const getMax = (arr) => arr.sort()[arr.length - 1];

// Get length of given array:
const getLength = (arr) => arr.length;

const analyzeArray = (arr) => ({
  average: getAverage(arr),
  min: getMin(arr),
  max: getMax(arr),
  length: getLength(arr),
});

module.exports = analyzeArray;

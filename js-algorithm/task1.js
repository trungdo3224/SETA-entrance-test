const stringLengthFrequency = (arr = []) => {
  let frequencyArr = [];
  const strLengthSet = new Set();
  const strLengthFreqMap = {}; // a hash map with each string length as key and its frequency as value
  let mostFrequent;

  if (arr.length <= 1) {
    return arr;
  }

  arr.map((str) => {
    let key = str.length;
    if (strLengthFreqMap[key]) {
      strLengthFreqMap[key]++;
    } else {
      strLengthFreqMap[key] = 1;
    }
    strLengthSet.add(key);
  }); // iterate through the input array to form a map of string length as key, and each string length frequencies as value

  strLengthSet.forEach((len) => {
    frequencyArr.push(strLengthFreqMap[len]);
    mostFrequent = Math.max(...frequencyArr); // the string length with most frequency
  });

  const mostFrequentLength = Object.keys(strLengthFreqMap).find(
    (key) => strLengthFreqMap[key] === mostFrequent
  ); // get key as a string length by value, where value is the most frequency of string length

  const resultArr = arr.filter(
    (str) => str.length === Number(mostFrequentLength)
  ); // the result array contain only string with length equal to the most frequent length
  return resultArr;
};

const isArraysEqual = (arr_1, arr_2) => {
  for (let i = 0; i < arr_1.length; i++) {
    if (arr_1[i] !== arr_2[i]) {
      return false;
    }
  }
  return true;
};

const testStringLengthFrequency = () => {
  const testCases = [
    [],
    [""],
    ["w"],
    ["a", "ab", "abc", "cd", "def", "gh"],
    ["a", "ab", "abc", "", "defg", "g"],
    ["as", "abx", "abc", "cdb", "def", "ghbsfergx", "ghbsfergc"],
  ];
  const testCasesResult = [
    [],
    [""],
    ["w"],
    ["ab", "cd", "gh"],
    ["a", "g"],
    ["abx", "abc", "cdb", "def"],
  ];
  testCases.map((testCase, index) => {
    const testResult = stringLengthFrequency(testCase);

    if (testResult.length !== testCasesResult[index].length) {
      console.log("Not passed test case!");
      console.log("Output: ", testResult);
      console.log("Expected Output: ", testCasesResult[index]);
      return false;
    }

    if (!isArraysEqual(testResult, testCasesResult[index])) {
      console.log("Not passed test case!");
      console.log("Output: ", testResult);
      console.log("Expected Output: ", testCasesResult[index]);
      return false;
    } else {
      console.log("Passed test case!\n");
      console.log("Output: ", testResult);
      console.log("Expected Output: ", testCasesResult[index]);
      return true;
    }
  });
};

testStringLengthFrequency();

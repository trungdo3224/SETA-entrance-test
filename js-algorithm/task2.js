const findMaxSum = (numsArr) => {
  numsArr = numsArr.map((num) => Number(num));
  if (numsArr.length === 1) {
    return numsArr[0];
  }
  if (numsArr.length === 0) {
    return 0;
  }
  numsArr.sort((a, b) => {
    return b - a;
  });
  const maxSum = numsArr[0] + numsArr[1];

  return maxSum;
};

const testFindMaxSum = () => {
  const testCases = [
    [],
    [1],
    [1, 4, 2, 3, 5],
    [1, 4, 2, 3, 5, 12, 19],
    [10000, 1, 1],
    ["2", 4, "8"],
  ];
  const testCasesResult = [0, 1, 9, 31, 10001, 12];
  testCases.map((testCase, index) => {
    let testResult = findMaxSum(testCase);
    if (testResult.length !== testCasesResult[index].length) {
      console.log("Not passed test case!");
      console.log("Output: ", testResult);
      console.log("Expected Output: ", testCasesResult[index]);
      return false;
    }
    if (testResult !== testCasesResult[index]) {
      console.log("Not passed test case!");
      console.log("Output: ", testResult);
      console.log("Expected Output: ", testCasesResult[index]);
      return false;
    } 
    else {
      console.log("Passed test case!");
      console.log("Output: ", testResult);
      console.log("Expected Output: ", testCasesResult[index]);
      return true;
    }
  });
};

testFindMaxSum();

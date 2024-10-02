// Question 1 Part A
function sumOfSquares(arr) {
  return arr.map((x) => x * x).reduce((a, b) => a + b);
}

// Question 1 Part B
let checkAndPrintOdd = function (arr) {
  arr
    .filter((x) => x % 2 != 0)
    .forEach((element) => {
      console.log(element);
    });
};

// Question 1 Part C
const printFibonacciSeries = (max, start1, start2) => {
  let result = [];
  for (let i = 0; i < max; i++) {
    if (i == 0) {
      result.push(start1);
    } else if (i == 1) {
      result.push(start2);
    } else {
      result[i] = result[i - 1] + result[i - 2];
    }
  }
  console.log(result.join(", "));
};

function performQuestion1() {
  console.log("**********Question 1 Part A: Sum Of Squares**********");
  console.log(sumOfSquares([1, 2, 3, 4]));
  console.log("**********Question 1 Part B: Print Odd Numbers**********");
  checkAndPrintOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.log("**********Question 1 Part B: Print Fibonacci Series**********");
  printFibonacciSeries(10, 0, 1);
}

export { performQuestion1 };

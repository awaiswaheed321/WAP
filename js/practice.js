run();

function run() {
  //   q1();
  //   console.log(q2(5, 6));
  //   console.log(q3(5));
  //   console.log(q3(6));
  //   q4();
  //   console.log(q5("heLlO"));
  //   console.log(q5(5));
  //   console.log(q6("hello"));
  //   console.log(q6(5));
  //   console.log(q6("569"));
  //   console.log(q8("Hello"));
  //   console.log(q9("mom"));
  //   console.log(q9("526"));
  //   console.log(q10(10));
  //   console.log(q10(987));
  //   console.log(q11([1,5,6,1]));
  //   console.log(q12([1,5,6,1]));
  //   console.log(q14("listen", "silent"));
  //   console.log(q14("triangle", "integral"));
  //   console.log(q14("triangle", "none"));
  // console.log(q15([1,5,6,1]));
  //   console.log(q16([1, 2, 3, 4, 5]));
  //   console.log(q16([1, 3, 2, 4]));
  console.log(q17(10));
}

// Write a function that takes a string and returns the character with the highest frequency.
// function q18(str) {
//     if(typeof str != 'string') return null;
//     Map<String, Number> m1 = new HashMap<>();
// }

// Write a program that converts a decimal number to binary.
function q17(num) {
  if (typeof num != "number") {
    return null;
  }
  if (num === 0 || num === 1) {
    return num;
  }
  let res = "";
  while (num > 0) {
    res = (num % 2) + res;
    num = Math.floor(num / 2);
  }
  return res;
}

// Implement a function that checks if an array is sorted in ascending order.
function q16(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

//  Create a program that finds the second largest number in an array.
function q15(arr) {
  if (arr.length == 0) {
    return null;
  } else if (arr.length == 1) {
    return null;
  }
  let l1, l2;
  if (arr[0] > arr[1]) {
    l1 = arr[0];
    l2 = arr[1];
  } else {
    l1 = arr[1];
    l2 = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > l1) {
      l2 = l1;
      l1 = arr[i];
    }
  }
  return l2;
}

// Write a function that checks if two strings are anagrams of each other.
function q14(str1, str2) {
  if (typeof str1 != "string" || typeof str2 != "string") {
    return false;
  }
  if (str1.length != str2.length) {
    return false;
  }
  let arr1 = [...str1].sort().join(""),
    arr2 = [...str2].sort().join("");
  return arr1 === arr2;
}

// Write a program that sorts an array of numbers in ascending order.
function q12(arr) {
  return arr.sort((e1, e2) => {
    if (e1 > e2) return 1;
    if (e2 > e1) return -1;
    return 0;
  });
}

// Implement a function that removes duplicates from an array.
function q11(arr) {
  return [...new Set(arr)];
}

// Write a function that returns the Fibonacci sequence up to a given number.
function q10(limit) {
  let res = [];
  if (limit == 0) {
    return [0];
  } else if (limit == 1) {
    return [0, 1];
  }
  res.push(0, 1);
  while (limit >= res[res.length - 1] + res[res.length - 2]) {
    res.push(res[res.length - 1] + res[res.length - 2]);
  }
  return res;
}

// Create a program that checks if a string is a palindrome.
function q9(var1) {
  if (typeof var1 === "string") {
    var1 = var1.toLocaleLowerCase();
    for (let i = 0; i <= var1.length / 2; i++) {
      if (var1.charAt(i) != var1.charAt(var1.length - i - 1)) {
        return false;
      }
    }
    return true;
  }
  return null;
}

// Write a function that counts the number of vowels in a given string.
function q8(var1) {
  if (typeof var1 === "string") {
    var1 = var1.toLocaleLowerCase();
    let count = 0;
    for (let i = var1.length - 1; i >= 0; i--) {
      if (
        var1.charAt(i) === "a" ||
        var1.charAt(i) === "e" ||
        var1.charAt(i) === "i" ||
        var1.charAt(i) === "o" ||
        var1.charAt(i) === "u"
      ) {
        count++;
      }
    }
    return count;
  }
  return null;
}

// Write a function that returns the factorial of a number.
function getFactorial(value) {
  if (value == 1) {
    return 1;
  } else {
    return value * getFactorial(value - 1);
  }
}

function q7() {
  console.log(getFactorial(5));
  console.log(getFactorial(10));
}

// Create a program that reverses a string without using built-in methods.
function q6(var1) {
  if (typeof var1 === "string") {
    let res = "";
    for (let i = var1.length - 1; i >= 0; i--) {
      res += var1.charAt(i);
    }
    return res;
  }
  return null;
}

// Write a program that converts a given string to uppercase
function q5(var1) {
  if (typeof var1 === "string") {
    return var1.toUpperCase();
  }
  return null;
}

//  Declare an array of numbers and find the sum of all its elements using `reduce()`.
function q4() {
  let arr = [1, 2, 3, 4];
  console.log(arr.reduce((e1, e2) => e1 + e2, 0));
}

// Write a program that checks whether a given number is even or odd.
function q3(var1) {
  return var1 % 2 === 0;
}

// Create a function that accepts two numbers and returns their sum.
function q2(var1, var2) {
  return var1 + var2;
}

// Write a JavaScript program to declare a variable using `let` and reassign it with a different type of value.
function q1() {
  let var1 = 10;
  console.log(var1);
  var1 = "A String";
  console.log(var1);
}
